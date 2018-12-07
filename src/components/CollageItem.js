import React, { Component } from 'react';

/**
 * Class that represents a positionable collage item.
 */
class CollageItem extends Component {
    constructor(props) {
        super(props);

        this.state = {
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
            const { item } = this.props;
            let { x, y } = item;

            x += e.movementX;
            y += e.movementY;

            this.props.updatePosition(item, x, y);
        }
    }

    render() {
        const { item } = this.props;
        const { x, y } = item;
        const style = {
            top: y,
            left: x,
        };

        return (
            <li className="collage__item" style={style}>
                <img
                    src={item.url}
                    alt="collage-item"
                    onMouseLeave={this.handleMouseUp}
                    onMouseDown={this.handleMouseDown}
                    onMouseUp={this.handleMouseUp}
                    onMouseMove={this.handleMouseMove}
                />
            </li>
        )
    }
}

export default CollageItem;