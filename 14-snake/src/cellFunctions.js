const mapper = (cells, objects, thing) => cells.map(c => objects.includes(c.id) ? { ...c, content: thing } : c)

export const place = (cells, { location, contents }) => {
    let objects = Array.isArray(location) ? location : [location]
    return mapper(cells, objects, contents)
}

export const remove = (cells, location) => {
    let objects = Array.isArray(location) ? location : [location]
    return cells.filter(cell => !objects.includes(cell.id))
}
