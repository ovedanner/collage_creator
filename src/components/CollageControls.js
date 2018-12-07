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
                <h3 className="collage__control-header">Layout</h3>
                <ul className="collage__control-list">
                    <li className="collage__control" onClick={this.organizeInRectangle}>Rectangle</li>
                </ul>
            </div>
        );
    }
}

export default CollageControls;