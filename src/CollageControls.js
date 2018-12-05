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
            <div id="collage-controls-wrapper">
                <h3>Controls</h3>
                <ul id="collage-controls">
                    <li className="controls" onClick={this.organizeInRectangle}>Rectangle</li>
                </ul>
            </div>
        );
    }
}

export default CollageControls;