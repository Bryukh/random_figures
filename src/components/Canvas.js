import React, {PropTypes} from 'react';
import Figures from "./Figures";
import C from "../settings";

require("../stylesheets/style.scss");


const Canvas = ({figures, addRandomFigure, removeFigure}) => (
    <svg viewBox="0 0 600 600">
        <rect id="background" x="0" y="0" width="600" height="600" fill="white"
            onClick={(e) => {
                const offset = e.target.getBoundingClientRect();
                addRandomFigure(e.clientX - offset.left, e.clientY - offset.top);
              }}>
        </rect>
        {figures.map((f, i) => {
            let FigureComponent = Figures[f.figureType];
            //console.log(FigureComponent);
            return <FigureComponent x={f.x} y={f.y} size={f.size} color={f.color}
                                    key={i} onClick={() => removeFigure(i)}/>
        })}
    </svg>
);

Canvas.propTypes = {
    figures: PropTypes.arrayOf(PropTypes.shape({
        figureType: PropTypes.string.isRequired,
        x: PropTypes.number.isRequired,
        y: PropTypes.number.isRequired,
        size: PropTypes.number.isRequired,
        color: PropTypes.string.isRequired
    })).isRequired,
    addRandomFigure: PropTypes.func.isRequired,
    removeFigure: PropTypes.func.isRequired
};

export default Canvas;
