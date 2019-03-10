(function () {
    'use strict';

    let coordinates = [{x: 12, y: 13}, {x: 56, y: 45}, {x: -10, y: -25}],
        result = getPolygonPoints(coordinates);

    console.log(result);

    function getPolygonPoints(coordinates) {
        return coordinates.map(coordinate => coordinate.x + ',' + coordinate.y).join(' ');
    }

})();

