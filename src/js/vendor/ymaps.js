ymaps.ready(init);
function init() {

  var myMap = new ymaps.Map("map", {
    center: [55.770255812621244, 37.637542576578404],
    zoom: 15,
  });

  var myPlacemark = new ymaps.Placemark(
    [55.770255812621244, 37.637542576578404],
    {},
    {
      iconLayout: "default#image",
      iconImageHref: "img/svg/map-item.svg",
      iconImageSize: [28, 40],
      iconImageOffset: [-3, -42],
    }
  );

  myMap.geoObjects.add(myPlacemark);
}
