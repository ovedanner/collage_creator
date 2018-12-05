import React, { Component } from 'react';
import CollageItem from './CollageItem';
import CollageControls from './CollageControls';
import RectangleOrganizer from './organizers/RectangleOrganizer';

/**
 * Wrapper for all items in a collage.
 */
class CollageItems extends Component {
    constructor(props) {
        super(props);
        const items = props.items.map((item) => {
            return {
                url: item,
                x: 0,
                y: 0,
            };
        });
        this.state = { items };
        this.organize = this.organize.bind(this);
    }

    organize(shape) {
        let organizer;

        switch (shape) {
            case 'rectangle':
                organizer = new RectangleOrganizer(1);
                break;
            default:
                organizer = null;
        }

        if (organizer) {
            const items = organizer.organize(this.state.items);
            this.setState({ items });
        }
    }

    render() {
        const items = this.state.items.map((item, idx) => (
            <CollageItem url={item.url} key={idx} x={item.x} y={item.y} />
        ));

        return (
            <div id="collage-items-wrapper">
                <CollageControls organize={this.organize} />
                <ul id="collage-items">{items}</ul>
            </div>
        );
    }
}

export default CollageItems;