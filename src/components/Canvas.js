import React, { Component } from 'react';
import {Circle, Square} from "./Figures";
import C from "../settings";


require("../stylesheets/style.scss");

export default class Canvas extends Component {
    constructor() {
        super();
        this.usableFigures = {
            "Circle": Circle,
            "Square": Square
        };
        this.state = {
            figures: []
        };
    }

    _createRandomFigure(event) {
        const figures = this.state.figures;
        const offset = event.target.getBoundingClientRect();
        figures.push({
            "type": this.randomType(),
            "size": Canvas.randomSize(),
            "x": event.clientX - offset.left,
            "y": event.clientY - offset.top,
            "color": Canvas.randomColor()
        });
        this.setState({"figures": figures});
    }

    _removeFigure(event) {
        const index = parseInt(event.target.getAttribute("data-index"));
        const figures = this.state.figures;
        this.setState({"figures": [...figures.slice(0, index), ...figures.slice(index + 1)]});
    }

    randomType() {
        const names = Object.keys(this.usableFigures);
        return names[Math.floor(Math.random() * names.length)];
    }

    static randomSize() {
        return Math.random() * (C.MAX_SIZE - C.MIN_SIZE) + C.MIN_SIZE;
    }

    static randomColor() {
        const symbols = '0123456789ABCDEF'.split('');
        let color = "#";
        for (let i = 0; i < 6; i++) {
            color += symbols[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    render() {
        const figures = this.state.figures.map((f, i) => {
            let FigureComponent = this.usableFigures[f.type];
            return <FigureComponent
                x={f.x}
                y={f.y}
                size={f.size}
                color={f.color}
                key={i}
                index={i}
                onClick={this._removeFigure.bind(this)}/>
        });
        return (
            <svg viewBox="0 0 600 600">
                <rect id="background" x="0" y="0" width="600" height="600" fill="white"
                      onClick={this._createRandomFigure.bind(this)}>
                </rect>
                {figures}
            </svg>
        );
    }
}
