/*! <<audioloopto>> macro set for SugarCube 2.x */
!(function() {
  "use strict";

  Has.audio
    ? (Macro.add("audioonend", {
        isAsync : true,
        tags: null,
        handler: function() {
          if (this.args.length < 1) {
            var errors = [];
            return (
              this.args.length < 1 && errors.push("loop track ID"),
              this.error("no " + errors.join(" or ") + " specified")
            );
          }
          var tracks = Macro.get("cacheaudio").tracks,
            loopId = this.args[0];

          if (!tracks.hasOwnProperty(loopId))
            return this.error('loop track "' + loopId + '" does not exist');


          const audio = tracks[loopId];
          console.log(audio);
          console.log(this.payload)
          console.log(this)
          const content = this.payload[0].contents

          const $wrapper   = jQuery(document.createElement('span'))
            .addClass(`macro-${this.name}`)
            .appendTo(this.output);

          const transition = this.args.length > 1 && /^(?:transition|t8n)$/.test(this.args[1]);

          function showOnEnd() {
            const frag = document.createDocumentFragment();
            new Wikifier(frag, content);

            // Output.
            let $output = $wrapper;


            if (transition) {
              $output = jQuery(document.createElement('span'))
                .addClass('macro-timed-insert macro-timed-in')
                .appendTo($output);
            }

            $output.append(frag);

            if (transition) {
              setTimeout(() => $output.removeClass('macro-timed-in'), Engine.minDomActionDelay);
            }
          }
          audio.one('end', () => {console.log('ended'); showOnEnd();});
        }
      }))
    : Macro.add(["audioonend"], { handler: function() {} });
})();