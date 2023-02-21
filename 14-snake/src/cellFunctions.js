const mapper = (cells, objects, thing) => cells.map(c => objects.includes(c.id) ? { ...c, content: thing } : c)

export const place = (cells, object, thing) => {
    let objects = Array.isArray(object) ? object : [object]
    return mapper(cells, objects, thing)
}
