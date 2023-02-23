export const delay = (fn, ...args) => () => fn.call(null, args)
export const add = (a, b) => a + b
export const subtract = (a, b) => a - b
export const multiply = (a, b) => a * b
export const divide = (a, b) => a / b
export const inc = x => x + 1
export const dec = x => x - 1
export const toggle = x => !x
export const last = (arr) => arr[arr.length - 1]
export const chooseRandom = (arr, n) => arr.sort(() => 0.5 - Math.random()).slice(0, n)
