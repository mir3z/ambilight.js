import { $canvas, drawable } from "./dom";

export default function ambient({ strength = 1.1, spread = 60 } = {}) {
    return ({ video, process, wrap }) => {
        const canvas = drawable($canvas.fromVideo(video, {
            className: "ambilight_backcanvas",
            style: {
                transform: `scale(${ strength })`,
                filter: `blur(${ spread }px`
            }
        }));

        wrap(canvas.node);

        process(video, () => canvas.draw(video));
    }
}
