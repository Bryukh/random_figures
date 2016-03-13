import React, {PropTypes} from 'react';

export const figurePropTypes = {
    onClick: PropTypes.func.isRequired,
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
    size: PropTypes.number.isRequired,
    color: PropTypes.string.isRequired
};

const Square = ({x, y, size, color, index, onClick}) => (
    <rect x={x - size / 2}
          y={y - size / 2}
          width={size}
          height={size}
          stroke={color}
          fill={color}
          onClick={onClick}></rect>
);

Square.propTypes = figurePropTypes;

const Circle = ({x, y, size, color, index, onClick}) => (
    <circle cx={x}
            cy={y}
            r={size / 2}
            stroke={color}
            fill={color}
            onClick={onClick}></circle>
);

Circle.propTypes = figurePropTypes;

export default {
    Circle: Circle,
    Square: Square
};