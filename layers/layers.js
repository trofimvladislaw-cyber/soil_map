var wms_layers = [];


        var lyr_ESRIGraydark_0 = new ol.layer.Tile({
            'title': 'ESRI Gray (dark)',
            'opacity': 0.400000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://services.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Dark_Gray_Base/MapServer/tile/{z}/{y}/{x}'
            })
        });
var lyr_P_1 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Pельеф<br />\
    <img src="styles/legend/P_1_0.png" /> 114 м<br />\
    <img src="styles/legend/P_1_1.png" />  <br />\
    <img src="styles/legend/P_1_2.png" />  <br />\
    <img src="styles/legend/P_1_3.png" />  <br />\
    <img src="styles/legend/P_1_4.png" />  <br />\
    <img src="styles/legend/P_1_5.png" />  <br />\
    <img src="styles/legend/P_1_6.png" />  <br />\
    <img src="styles/legend/P_1_7.png" /> 204 м<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/P_1.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [6313977.413012, 7849017.137232, 6329339.165888, 7864293.792534]
        })
    });
var lyr_ESRI_2 = new ol.layer.Image({
        opacity: 1,
        
    title: 'ESRI Ландшафт <br />\
    <img src="styles/legend/ESRI_2_0.png" /> водная поверхность <br />\
    <img src="styles/legend/ESRI_2_1.png" /> древесный покров <br />\
    <img src="styles/legend/ESRI_2_2.png" /> травянистая растительность<br />\
    <img src="styles/legend/ESRI_2_3.png" /> с/х угодья <br />\
    <img src="styles/legend/ESRI_2_4.png" /> открытый грунт <br />\
    <img src="styles/legend/ESRI_2_5.png" /> застроенные территории<br />\
    <img src="styles/legend/ESRI_2_6.png" /> подтопленная растительность <br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/ESRI_2.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [6313890.731150, 7848986.461399, 6329360.859881, 7864338.417160]
        })
    });
var format_K_3 = new ol.format.GeoJSON();
var features_K_3 = format_K_3.readFeatures(json_K_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_K_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_K_3.addFeatures(features_K_3);
var lyr_K_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_K_3, 
                style: style_K_3,
                popuplayertitle: 'Kарта почв с. Жилино',
                interactive: false,
    title: 'Kарта почв с. Жилино<br />\
    <img src="styles/legend/K_3_0.png" /> АблГа<br />\
    <img src="styles/legend/K_3_1.png" /> АблГА<br />\
    <img src="styles/legend/K_3_2.png" /> Адк1СА<br />\
    <img src="styles/legend/K_3_3.png" /> Адк1ТА<br />\
    <img src="styles/legend/K_3_4.png" /> Адк1IСА<br />\
    <img src="styles/legend/K_3_5.png" /> Адк1IТА<br />\
    <img src="styles/legend/K_3_6.png" /> Адк1IТЛ<br />\
    <img src="styles/legend/K_3_7.png" /> Адк2ГА<br />\
    <img src="styles/legend/K_3_8.png" /> Адк2ТА<br />\
    <img src="styles/legend/K_3_9.png" /> Адк2IIГА<br />\
    <img src="styles/legend/K_3_10.png" /> Адк3ТА<br />\
    <img src="styles/legend/K_3_11.png" /> Адкс2СА<br />\
    <img src="styles/legend/K_3_12.png" /> АдкI1СА<br />\
    <img src="styles/legend/K_3_13.png" /> АдкIСА<br />\
    <img src="styles/legend/K_3_14.png" /> Ак2ГА<br />\
    <img src="styles/legend/K_3_15.png" /> Ак2ТА<br />\
    <img src="styles/legend/K_3_16.png" /> Ак2IIГА<br />\
    <img src="styles/legend/K_3_17.png" /> АопГА<br />\
    <img src="styles/legend/K_3_18.png" /> Б<br />\
    <img src="styles/legend/K_3_19.png" /> БнПГ<br />\
    <img src="styles/legend/K_3_20.png" /> БНпг<br />\
    <img src="styles/legend/K_3_21.png" /> Д1IГЛ<br />\
    <img src="styles/legend/K_3_22.png" /> Д2вСЛ+ДнмТД25<br />\
    <img src="styles/legend/K_3_23.png" /> Л1ТЛ<br />\
    <img src="styles/legend/K_3_24.png" /> Л1IТЛ<br />\
    <img src="styles/legend/K_3_25.png" /> Л1IIТЛ<br />\
    <img src="styles/legend/K_3_26.png" /> Л2ТЛ<br />\
    <img src="styles/legend/K_3_27.png" /> Л2IIТЛ<br />\
    <img src="styles/legend/K_3_28.png" /> Л3ТЛ<br />\
    <img src="styles/legend/K_3_29.png" /> Л3IIТЛ<br />\
    <img src="styles/legend/K_3_30.png" /> ЛТ<br />\
    <img src="styles/legend/K_3_31.png" /> ЛIТЛ+ДнмТД<br />\
    <img src="styles/legend/K_3_32.png" /> П1дСЛ<br />\
    <img src="styles/legend/K_3_33.png" /> П1дIIСЛ<br />\
    <img src="styles/legend/K_3_34.png" /> П2дСЛ<br />\
    <img src="styles/legend/K_3_35.png" /> П2дТЛ<br />\
    <img src="styles/legend/K_3_36.png" /> П2дТЛ+ДнмТД25<br />\
    <img src="styles/legend/K_3_37.png" /> П2дIТЛ+ДнмТД25<br />\
    <img src="styles/legend/K_3_38.png" /> П2дIIСЛ<br />\
    <img src="styles/legend/K_3_39.png" /> П2дIIТЛ<br />\
    <img src="styles/legend/K_3_40.png" /> П2ДIIТЛ<br />\
    <img src="styles/legend/K_3_41.png" /> П2стТЛ2+ДнмД25<br />\
    <img src="styles/legend/K_3_42.png" /> ТЛ<br />' });
var format_H_4 = new ol.format.GeoJSON();
var features_H_4 = format_H_4.readFeatures(json_H_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_H_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_H_4.addFeatures(features_H_4);
var lyr_H_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_H_4, 
                style: style_H_4,
                popuplayertitle: 'Hазвание почвы',
                interactive: true,
                title: '<img src="styles/legend/H_4.png" /> Hазвание почвы'
            });
var format_T_5 = new ol.format.GeoJSON();
var features_T_5 = format_T_5.readFeatures(json_T_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_T_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_T_5.addFeatures(features_T_5);
var lyr_T_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_T_5, 
                style: style_T_5,
                popuplayertitle: 'Tочки фото ландшафтов',
                interactive: true,
                title: '<img src="styles/legend/T_5.png" /> Tочки фото ландшафтов'
            });
var format_O_6 = new ol.format.GeoJSON();
var features_O_6 = format_O_6.readFeatures(json_O_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_O_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_O_6.addFeatures(features_O_6);
var lyr_O_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_O_6, 
                style: style_O_6,
                popuplayertitle: 'Oбласть исследования',
                interactive: false,
                title: '<img src="styles/legend/O_6.png" /> Oбласть исследования'
            });

lyr_ESRIGraydark_0.setVisible(true);lyr_P_1.setVisible(true);lyr_ESRI_2.setVisible(true);lyr_K_3.setVisible(true);lyr_H_4.setVisible(true);lyr_T_5.setVisible(true);lyr_O_6.setVisible(true);
var layersList = [lyr_ESRIGraydark_0,lyr_P_1,lyr_ESRI_2,lyr_K_3,lyr_H_4,lyr_T_5,lyr_O_6];
lyr_K_3.set('fieldAliases', {'id': 'id', 'soil': 'название почвы ', 'Площа': 'площадь почвы', });
lyr_H_4.set('fieldAliases', {'id': 'id', 'soil': 'название почвы ', 'Площа': 'площадь почвы', });
lyr_T_5.set('fieldAliases', {'name': 'название ландшафта ', 'photo': 'фотография ', });
lyr_O_6.set('fieldAliases', {'id': 'id', 'soil': 'soil', 'Площа': 'Площа', });
lyr_K_3.set('fieldImages', {'id': 'TextEdit', 'soil': 'TextEdit', 'Площа': 'TextEdit', });
lyr_H_4.set('fieldImages', {'id': 'TextEdit', 'soil': 'TextEdit', 'Площа': 'TextEdit', });
lyr_T_5.set('fieldImages', {'name': 'ValueMap', 'photo': 'ExternalResource', });
lyr_O_6.set('fieldImages', {'id': 'TextEdit', 'soil': 'TextEdit', 'Площа': 'TextEdit', });
lyr_K_3.set('fieldLabels', {'id': 'no label', 'soil': 'no label', 'Площа': 'no label', });
lyr_H_4.set('fieldLabels', {'id': 'no label', 'soil': 'no label', 'Площа': 'inline label - always visible', });
lyr_T_5.set('fieldLabels', {'name': 'inline label - always visible', 'photo': 'inline label - always visible', });
lyr_O_6.set('fieldLabels', {'id': 'no label', 'soil': 'no label', 'Площа': 'no label', });
lyr_O_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});