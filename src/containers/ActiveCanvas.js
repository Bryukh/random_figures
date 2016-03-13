import React from "react";
import {connect} from "react-redux";
import {addRandomFigure, removeFigure} from "../actions";
import Canvas from "../components/Canvas";

const mapStateToProps = (state) => {
    return {
        figures: state.figures
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        addRandomFigure: (x, y) => {
            dispatch(addRandomFigure(x, y))
        },
        removeFigure: (index) => {
            dispatch(removeFigure(index))
        }
    }
};

const CanvasContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Canvas);

export default CanvasContainer;