export const $node = tagName => ({ className, style, ...props } = {}, children) => {
    const el = document.createElement(tagName);
    className && el.classList.add(className);
    style && Object.assign(el.style, style);

    Object.keys(props)
        .forEach(propName => el.setAttribute(propName, props[propName]));

    castArray(children).forEach(child => el.appendChild(child));

    return el;
};

export const $div = $node("div");
export const $canvas = $node("canvas");

$canvas.fromVideo = (video, props) => {
    return $canvas({
        ...props,
        width: video.offsetWidth, 
        height: video.offsetHeight,
    });
};

export const wrap = (wrapper, wrapee) => {
    wrapee.parentNode.insertBefore(wrapper, wrapee.nextSibling);
    wrapper.appendChild(wrapee);
    return wrapper;
};

export const drawable = canvas => {
    const { width, height } = canvas;
    const ctx = canvas.getContext("2d");

    const drawImage = img => ctx.drawImage(img, 0, 0, width, height);
    
    return {
        node: canvas,

        draw(img) {
            drawImage(img);
            return this;
        },

        snapshot() {
            return ctx.getImageData(0, 0, width, height);
        }
    };
}

const castArray = (subject = []) => Array.isArray(subject) ? subject : [subject];