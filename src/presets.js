import { ALIVE, WORLD_SIZE, createWorld } from './game';

export const loadPreset = preset => {
    let newWorld = createWorld();
    switch (preset) {
        case 'line':
            return line(newWorld);
        case 'glider':
            return glider(newWorld);
        case 'pulsar':
            return pulsar(newWorld);
        case 'diehard':
            return diehard(newWorld);
        case 'gliderGun':
            return gliderGun(newWorld);
        default:
            return newWorld;
    }
}

const line = world => {
    const half = Math.floor(WORLD_SIZE / 2);
    world[half].fill(ALIVE);
    return world;
}

const glider = world => {
    world[3][1] = ALIVE;
    world[3][2] = ALIVE;
    world[3][3] = ALIVE;
    world[2][3] = ALIVE;
    world[1][2] = ALIVE;
    return world;
}

const diehard = world => {
    world[17][16] = ALIVE;
    world[18][10] = ALIVE;
    world[18][11] = ALIVE;
    world[19][11] = ALIVE;
    world[19][15] = ALIVE;
    world[19][16] = ALIVE;
    world[19][17] = ALIVE;
    return world;
}

const pulsar = world => {
    world[2][4] = ALIVE;
    world[2][5] = ALIVE;
    world[2][6] = ALIVE;
    world[2][10] = ALIVE;
    world[2][11] = ALIVE;
    world[2][12] = ALIVE;

    world[4][2] = ALIVE;
    world[4][7] = ALIVE;
    world[4][9] = ALIVE;
    world[4][14] = ALIVE;

    world[5][2] = ALIVE;
    world[5][7] = ALIVE;
    world[5][9] = ALIVE;
    world[5][14] = ALIVE;

    world[6][2] = ALIVE;
    world[6][7] = ALIVE;
    world[6][9] = ALIVE;
    world[6][14] = ALIVE;

    world[7][4] = ALIVE;
    world[7][5] = ALIVE;
    world[7][6] = ALIVE;
    world[7][10] = ALIVE;
    world[7][11] = ALIVE;
    world[7][12] = ALIVE;

    world[9][4] = ALIVE;
    world[9][5] = ALIVE;
    world[9][6] = ALIVE;
    world[9][10] = ALIVE;
    world[9][11] = ALIVE;
    world[9][12] = ALIVE;

    world[10][2] = ALIVE;
    world[10][7] = ALIVE;
    world[10][9] = ALIVE;
    world[10][14] = ALIVE;

    world[11][2] = ALIVE;
    world[11][7] = ALIVE;
    world[11][9] = ALIVE;
    world[11][14] = ALIVE;

    world[12][2] = ALIVE;
    world[12][7] = ALIVE;
    world[12][9] = ALIVE;
    world[12][14] = ALIVE;

    world[14][4] = ALIVE;
    world[14][5] = ALIVE;
    world[14][6] = ALIVE;
    world[14][10] = ALIVE;
    world[14][11] = ALIVE;
    world[14][12] = ALIVE;

    return world;
}

const gliderGun = world => {
    world[5][1] = ALIVE;
    world[5][2] = ALIVE;
    world[6][1] = ALIVE;
    world[6][2] = ALIVE;

    world[3][13] = ALIVE; 
    world[3][14] = ALIVE;
    world[4][12] = ALIVE; 
    world[4][16] = ALIVE;
    world[5][11] = ALIVE; 
    world[5][17] = ALIVE;
    world[6][11] = ALIVE; 
    world[6][15] = ALIVE;
    world[6][17] = ALIVE; 
    world[6][18] = ALIVE;
    world[7][11] = ALIVE; 
    world[7][17] = ALIVE;
    world[8][12] = ALIVE; 
    world[8][16] = ALIVE;
    world[9][13] = ALIVE; 
    world[9][14] = ALIVE;

    world[1][25] = ALIVE;
    world[2][23] = ALIVE; 
    world[2][25] = ALIVE;
    world[3][21] = ALIVE; 
    world[3][22] = ALIVE;
    world[4][21] = ALIVE; 
    world[4][22] = ALIVE;
    world[5][21] = ALIVE; 
    world[5][22] = ALIVE;
    world[6][23] = ALIVE; 
    world[6][25] = ALIVE;
    world[7][25] = ALIVE;

    world[3][35] = ALIVE; 
    world[3][36] = ALIVE;
    world[4][35] = ALIVE; 
    world[4][36] = ALIVE;

    return world;
}