const map = new harp.MapView({
    canvas: document.getElementById("map"),
    theme:
        "https://unpkg.com/@here/harp-map-theme@latest/resources/berlin_tilezen_night_reduced.json",
    target: new harp.GeoCoordinates(37.773972, -122.431297), //San Francisco,
    zoomLevel: 13
});
const controls = new harp.MapControls(map);

window.onresize = () => map.resize(window.innerWidth, window.innerHeight);

const vectorDataSource = new harp.VectorTileDataSource({
    baseUrl: "https://vector.hereapi.com/v2/vectortiles/base/mc",
    authenticationCode: "Wuux8jMdrByZXkhOrn-VqZcTLR6Z3xpIzVobxv5wcFc"
});
map.addDataSource(vectorDataSource);