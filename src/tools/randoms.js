import Figures from "./../components/Figures";
import CONF from "./../settings";

const HEX = '0123456789ABCDEF'.split('');

export function randomFigureType() {
    const names = Object.keys(Figures);
    return names[Math.floor(Math.random() * names.length)];
}

export function randomSize() {
    return Math.random() * (CONF.MAX_SIZE - CONF.MIN_SIZE) + CONF.MIN_SIZE;
}

export function randomColor() {
    return '#' + '??????'.split('').map(() => HEX[Math.floor(Math.random() * 16)]).join('');
}
