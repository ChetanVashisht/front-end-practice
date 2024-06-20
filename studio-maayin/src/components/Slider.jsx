import * as basicSlider from './basic_slider'

export default function Slider(refs, onClick) {
    const elem = document.createElement('div')
    const renderImages = ref => `<img src=${ref.current.src} class='slider-images' />`
    return basicSlider.create(elem, refs.map(renderImages), {onClick, dots: true})
}
