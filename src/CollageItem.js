import React, { Component } from 'react';

/**
 * Class that represents a positionable collage item.
 */
class CollageItem extends Component {
    constructor(props) {
        super(props);

        const { x, y } = props;
        this.state = {
            x, y,
            canDrag: false,
        };

        this.handleMouseDown = this.handleMouseDown.bind(this);
        this.handleMouseUp = this.handleMouseUp.bind(this);
        this.handleMouseMove = this.handleMouseMove.bind(this);
    }

    handleMouseDown(e) {
        e.preventDefault();
        this.setState({
            canDrag: true,
        });
    }

    handleMouseUp(e) {
        e.preventDefault();
        this.setState({
            canDrag: false,
        });
    }

    handleMouseMove(e) {
        e.preventDefault();
        if (this.state.canDrag) {
            const { x, y } = this.state;

            this.setState({
                x: x + e.movementX,
                y: y + e.movementY,
            });
        }
    }

    render() {
        const { x, y } = this.state;
        const style = {
            top: y,
            left: x,
        };

        return (
            <li className="collage-item draggable" style={style}>
                <img
                    src={this.props.url}
                    alt="collage-item"
                    onMouseLeave={this.handleMouseUp}
                    onMouseDown={this.handleMouseDown}
                    onMouseUp={this.handleMouseUp}
                    onMouseMove={this.handleMouseMove}
                />
            </li>
        )
    }

    static defaultProps = {
        x: 0,
        y: 0,
    }
}

export default CollageItem;