import ReactDOM from 'react-dom';

/**
 * Class that organizes collage items in a rectangle
 * using a width / height ratio.
 */
class RectangleOrganizer {
    constructor(ratio = 1) {
        this.ratio = ratio;
    }

    organize(collageItems) {
        const nrItems = collageItems.length;
        const nrVertical = Math.floor(nrItems * this.ratio);
        const nrHorizontal = nrItems / nrVertical;
        console.log(`ratio: ${this.ratio}, nrVertical: ${nrVertical}, nrHorizontal: ${nrHorizontal}`);

        collageItems.forEach((item, idx) => {
            const prevItem = (idx - 1 >= 0 ? collageItems[idx - 1] : null);
            const prevNode = (prevItem ? ReactDOM.findDOMNode(prevItem.ref.current) : null);
            let x = 0;
            let y = 0;
            if (idx % nrHorizontal > 0) {
                x = (prevItem ? prevItem.x + prevNode.clientWidth : 0);
            }
            if (idx % nrVertical > 0) {
                y = (prevItem ? prevItem.y + prevNode.clientHeight : 0);
            }

            item.x = x;
            item.y = y;
        });

        return collageItems
    }
}

export default RectangleOrganizer;