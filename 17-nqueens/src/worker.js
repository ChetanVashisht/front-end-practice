import { iterateSolutions } from "./Board"

onmessage = function ({ data: size }) {
    console.log("In worker", size)
    this.postMessage({ size, boards: iterateSolutions(size) })
}
