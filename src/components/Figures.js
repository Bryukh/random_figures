import React, { Component } from 'react';

export let Square = (props) => {
    const {x, y, size} = props;
    const half = size / 2;
    return <rect x={x - half}
                 y={y - half}
                 width={size}
                 height={size}
                 stroke={props.color}
                 fill={props.color}
                 data-index={props.index}
                 onClick={props.onClick}></rect>;
};

export let Circle = (props) => {
    return <circle cx={props.x}
                   cy={props.y}
                   r={props.size / 2}
                   stroke={props.color}
                   fill={props.color}
                   data-index={props.index}
                   onClick={props.onClick}></circle>;
};

export default {"Circle": Circle, "Square": Square}