import * as rand from "./tools/randoms";

export const ADD_FIGURE = "ADD_FIGURE";
export const REMOVE_FIGURE = "REMOVE_FIGURE";

export function addFigure(figureDescription) {
    return {
        type: ADD_FIGURE,
        figure: figureDescription
    }
}

export function addRandomFigure(x, y) {
    return addFigure({
        figureType: rand.randomFigureType(),
        x: x, y: y,
        size: rand.randomSize(),
        color: rand.randomColor()
    });
}

export function removeFigure(index) {
    return {
        type: REMOVE_FIGURE,
        index: index
    }
}
