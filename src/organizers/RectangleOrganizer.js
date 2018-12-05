/**
 * Class that organizes collage items in a rectangle
 * using a width / height ratio.
 */
class RectangleOrganizer {
    constructor(ratio = 1) {
        this.ratio = ratio;
    }

    organize(collageItems) {
        collageItems.forEach((item, idx) => {
            item.x = idx * 200;
            item.y = idx * 200;
        });

        return collageItems
    }
}

export default RectangleOrganizer;