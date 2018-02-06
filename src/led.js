import { $canvas, $div, drawable } from "./dom";

export default function led({ vertical = 6, horizontal = 4 } = {}) {
    return ({ video, process, wrap }) => {
        const cells = createCells(
            vertical,
            horizontal,
            video.offsetWidth / vertical,
            video.offsetHeight / horizontal
        );
        const backLayer = $div({ className: "ambilight_backlayer" }, cells.map(cell => cell.el));
        const canvas = drawable($canvas.fromVideo(video));

        wrap(backLayer);

        process(video, () => {
            const snapshot = canvas
                .draw(video)
                .snapshot();

            cells
                .filter(cell => !cell.skip)
                .forEach(cell => {
                    const avg = calculateAvgColor(cell, snapshot);
                    cell.el.style.boxShadow = `rgb(${ avg.r }, ${ avg.g }, ${ avg.b }) 0px 0px 180px 10px`;
                });
        });
    };
}

function calculateAvgColor(cell, snapshot) {
    const { x, y, width, height } = cell;
    const buffer = new Uint32Array(snapshot.data.buffer);
    const at = (x, y) => buffer[~~(x + snapshot.width * y)];

    let pixelCount = 0;
    let r = 0;
    let g = 0;
    let b = 0;

    for (let scanY = y; scanY < height; scanY++) {
        for (let scanX = x; scanX < width; scanX++) {
            const pixel = at(scanX + x * width, scanY + y * height);

            r += (pixel & 0xff),
            g += ((pixel >> 8) & 0xff),
            b += ((pixel >> 16) & 0xff),
            pixelCount++
        }
    }

    return {
        r: ~~(r / pixelCount),
        g: ~~(g / pixelCount),
        b: ~~(b / pixelCount)
    };
}

function createCells(cols, rows, width, height) {
    let cells = [];

    for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {
            const skip = y > 0 && y < rows - 1 && x > 0 && x < cols - 1;

            cells.push(cell({ x, y, width, height, skip }));
        }
    }

    return cells;
}

function cell({ x, y, width, height, skip }) {
    return {
        x,
        y,
        width,
        height,
        skip,
        el: $div({
            style: {
                width: `${ width }px`,
                height:`${ height }px`
            }
        })
    };
}