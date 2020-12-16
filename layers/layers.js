var wms_layers = [];
var baseLayer = new ol.layer.Group({
    'title': '',
    layers: [
new ol.layer.Tile({
    'title': 'OSM DE',
    'type': 'base',
    source: new ol.source.XYZ({
        url: 'http://tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png',
        attributions: [new ol.Attribution({html: '&copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors,<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>'})]
    })
})
]
});
var format_ILOT_0 = new ol.format.GeoJSON();
var features_ILOT_0 = format_ILOT_0.readFeatures(json_ILOT_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ILOT_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_ILOT_0.addFeatures(features_ILOT_0);var lyr_ILOT_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ILOT_0, 
                style: style_ILOT_0,
                title: '<img src="styles/legend/ILOT_0.png" /> ILOT'
            });var format_lots_1 = new ol.format.GeoJSON();
var features_lots_1 = format_lots_1.readFeatures(json_lots_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_lots_1 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_lots_1.addFeatures(features_lots_1);var lyr_lots_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_lots_1, 
                style: style_lots_1,
                title: '<img src="styles/legend/lots_1.png" /> lots'
            });

lyr_ILOT_0.setVisible(true);lyr_lots_1.setVisible(true);
var layersList = [baseLayer,lyr_ILOT_0,lyr_lots_1];
lyr_ILOT_0.set('fieldAliases', {'id': 'id', 'nom': 'nom', 'numero': 'numero', 'titulaire': 'titulaire', 'superficie': 'superficie', });
lyr_lots_1.set('fieldAliases', {'type': 'type', 'lot': 'lot', });
lyr_ILOT_0.set('fieldImages', {'id': 'TextEdit', 'nom': 'TextEdit', 'numero': 'TextEdit', 'titulaire': 'TextEdit', 'superficie': 'TextEdit', });
lyr_lots_1.set('fieldImages', {'type': 'TextEdit', 'lot': 'TextEdit', });
lyr_ILOT_0.set('fieldLabels', {'id': 'no label', 'nom': 'no label', 'numero': 'no label', 'titulaire': 'no label', 'superficie': 'no label', });
lyr_lots_1.set('fieldLabels', {'type': 'no label', 'lot': 'no label', });
lyr_lots_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});