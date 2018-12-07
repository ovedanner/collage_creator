import React, { Component } from 'react';

/**
 * Controls for automatically organizing your collage.
 */
class CollageControls extends Component {
    constructor(props) {
        super(props);

        this.organizeInRectangle = this.organizeInRectangle.bind(this);
    }

    organizeInRectangle() {
        this.props.organize('rectangle');
    }

    render() {
        return (
            <div className="collage__controls">
                <div className="collage__control-header">
                    <h3>Layout</h3>
                </div>
                <ul className="collage__control-list">
                    <button className="collage__control-button btn--blue" onClick={this.organizeInRectangle}>Rectangle</button>
                </ul>
            </div>
        );
    }
}

export default CollageControls;