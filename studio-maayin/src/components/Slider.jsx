import * as basicSlider from './basic_slider'
import 'basicSlider/dist/basicSlider.min.css'

export default function Slider(refs, onClick) {
    const elem = document.createElement('div')
    // const onClick = (e) => console.log(e.target || e.srcElement)
    return basicSlider.create(elem, refs.map(ref => `<img src=${ref.current.src} class='slider-images' />`), {onClick})
}
