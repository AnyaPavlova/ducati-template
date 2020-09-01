var myMap;

// Дождёмся загрузки API и готовности DOM.

ymaps.ready(init);

function init () {

    const point=[$("#map").data("x"), $("#map").data("y")]
    myMap = new ymaps.Map('map', {
        center: point, //
        zoom: 12,
        controls: ['zoomControl']
    });
    myPlacemark1 = new ymaps.Placemark(point, {
        //balloonContent: 'Центр Выборгский'
        balloonContentHeader: '<strong>ВАГНЕР DUCATI</strong>',
        balloonContentBody: 'Санкт-Петербург, Выборгское ш., 352А',
    }, {
        // preset: 'islands#blueShoppingCircleIcon',
        // iconColor: '#78b833'
    });
    myMap.geoObjects.add(myPlacemark1);
    myMap.behaviors.disable('scrollZoom');
}
