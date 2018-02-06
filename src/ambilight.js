import ambient from "./ambient";
import { $canvas, $div, wrap } from "./dom";

import "./ambilight.css";

export default function ambilight(video, strategy = ambient()) {
    const attach = () => {
        const _wrap = (children) => {
            const wrapper = $div({ className: "ambilight_player" }, children);
            return wrap(wrapper, video);
        }

        strategy({ video, process, wrap: _wrap });
    };

    if (video.readyState >= video.HAVE_METADATA) {
        attach();
    } else {
        video.addEventListener("loadedmetadata", attach);
    }
}

function process(video, processor) {
    const playbackLoop = () => {
        if (video.paused || video.ended) {
            return;
        }

        processor(video);

        requestAnimationFrame(playbackLoop);
    };

    video.addEventListener("play", playbackLoop);
}