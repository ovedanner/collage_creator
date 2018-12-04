import React, { Component } from 'react';

class CollageItem extends Component {
    render() {
        return (
            <img src={this.props.url} alt="collage-item"/>
        )
    }
}

export default CollageItem;