import * as basicLightbox from 'basiclightbox'
import 'basicLightbox/dist/basicLightbox.min.css'

export default function LightBox(elem) {
    return basicLightbox.create(elem)
}
