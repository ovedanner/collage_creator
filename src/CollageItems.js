import React, { Component } from 'react';
import CollageItem from './CollageItem';

class CollageItems extends Component {
    render() {
        const collageItems = this.props.items.map((item) => (
            <li><CollageItem url={item} /></li>
        ));

        return (
            <div id="collage-items">
                <ul>{collageItems}</ul>
            </div>
        );
    }
}

export default CollageItems;