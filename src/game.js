export const WORLD_SIZE = 70;
export const GENERATION_TIME = 100;
export const ALIVE = 1;
export const DEAD = 0;

export const getNeighbors = (x, y) => {
    return [[x - 1, y - 1], [x, y - 1], [x + 1, y - 1], [x - 1, y], [x + 1, y], [x - 1, y + 1], [x, y + 1], [x + 1, y + 1]]
        .filter(c =>
            c[0] >= 0 && c[0] < WORLD_SIZE &&
            c[1] >= 0 && c[1] < WORLD_SIZE
        );
}

export const aliveNeighbors = (world, x, y) => {
    return getNeighbors(x, y).filter(n => world[n[0]][n[1]] === ALIVE).length;
}

export const nextGeneration = world => {
    let newWorld = createWorld();
    for (let x = 0; x < WORLD_SIZE; x++) {
        for (let y = 0; y < WORLD_SIZE; y++) {
            const alive = aliveNeighbors(world, x, y);
            const cell = world[x][y];
            newWorld[x][y] = (alive === 3 || (alive === 2 && cell === ALIVE)) ? ALIVE : DEAD;
        }
    }
    return newWorld;
}

export const createWorld = () => {
    return Array(WORLD_SIZE).fill().map(() => Array(WORLD_SIZE).fill(DEAD));
}

export const changeArrayValue = (arr, i, val) => [
    ...arr.slice(0, i), val, ...arr.slice(i + 1)
];

export const shuffle = world => world.map(row => row.map(cell => Math.round(Math.random())));