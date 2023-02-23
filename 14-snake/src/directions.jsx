const directions = {
    LEFT: { key: "ArrowLeft", disallowedDir: () => directions.RIGHT },
    UP: { key: "ArrowUp", disallowedDir: () => directions.DOWN },
    RIGHT: { key: "ArrowRight", disallowedDir: () => directions.LEFT },
    DOWN: { key: "ArrowDown", disallowedDir: () => directions.UP }
}

export default directions
