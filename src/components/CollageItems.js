import React, { Component } from 'react';
import CollageItem from './CollageItem';
import CollageControls from './CollageControls';
import RectangleOrganizer from '../organizers/RectangleOrganizer';
import { uid } from 'react-uid';

/**
 * Wrapper for all items in a collage.
 */
class CollageItems extends Component {
    constructor(props) {
        super(props);
        const items = props.items.map((url) => {
            return {
                url: url,
                ref: React.createRef(),
                x: 0,
                y: 0,
            };
        });
        this.state = { items };
        this.organize = this.organize.bind(this);
        this.updatePosition = this.updatePosition.bind(this);
    }

    /**
     * Called by a collage item when it is manually dragged to
     * a new position.
     * @param item
     * @param x
     * @param y
     */
    updatePosition(item, x, y) {
        const itemToUpdate = this.state.items.find((i) => {
            return i === item;
        });

        if (itemToUpdate) {
            itemToUpdate.x = x;
            itemToUpdate.y = y;
        }

        this.setState({
            items: this.state.items,
        });
    }

    /**
     * Organizes collage items in a certain way.
     * @param shape
     */
    organize(shape) {
        let organizer;

        switch (shape) {
            case 'rectangle':
                organizer = new RectangleOrganizer();
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
            <CollageItem
                key={uid(item, idx)}
                ref={item.ref}
                item={item}
                updatePosition={this.updatePosition}/>
        ));

        return (
            <div className="collage">
                <ul className="collage__list">{items}</ul>
                <CollageControls organize={this.organize} />
            </div>
        );
    }
}

export default CollageItems;