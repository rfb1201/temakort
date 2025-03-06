ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3857").setExtent([1316134.921796, 7457785.280283, 1432652.524107, 7526543.017336]);
var wms_layers = [];


        var lyr_Voyagernolabelsretina_0 = new ol.layer.Tile({
            'title': 'Voyager [no labels] (retina)',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 3.0. Data by OpenStreetMap, under ODbL.</a>',
                url: 'https://a.basemaps.cartocdn.com/rastertiles/voyager_nolabels/{z}/{x}/{y}@2x.png'
            })
        });
var format_folkeskoler_1 = new ol.format.GeoJSON();
var features_folkeskoler_1 = format_folkeskoler_1.readFeatures(json_folkeskoler_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_folkeskoler_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_folkeskoler_1.addFeatures(features_folkeskoler_1);
var lyr_folkeskoler_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_folkeskoler_1, 
                style: style_folkeskoler_1,
                popuplayertitle: 'folkeskoler',
                interactive: true,
                title: '<img src="styles/legend/folkeskoler_1.png" /> folkeskoler'
            });
var format_kommuneplan_2 = new ol.format.GeoJSON();
var features_kommuneplan_2 = format_kommuneplan_2.readFeatures(json_kommuneplan_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_kommuneplan_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_kommuneplan_2.addFeatures(features_kommuneplan_2);
var lyr_kommuneplan_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_kommuneplan_2, 
                style: style_kommuneplan_2,
                popuplayertitle: 'kommuneplan',
                interactive: true,
                title: '<img src="styles/legend/kommuneplan_2.png" /> kommuneplan'
            });
var format_lokalplaner_3 = new ol.format.GeoJSON();
var features_lokalplaner_3 = format_lokalplaner_3.readFeatures(json_lokalplaner_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_lokalplaner_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_lokalplaner_3.addFeatures(features_lokalplaner_3);
var lyr_lokalplaner_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_lokalplaner_3, 
                style: style_lokalplaner_3,
                popuplayertitle: 'lokalplaner',
                interactive: true,
    title: 'lokalplaner<br />\
    <img src="styles/legend/lokalplaner_3_0.png" /> 1024399<br />\
    <img src="styles/legend/lokalplaner_3_1.png" /> 1053515<br />\
    <img src="styles/legend/lokalplaner_3_2.png" /> 1061002<br />\
    <img src="styles/legend/lokalplaner_3_3.png" /> 1061022<br />\
    <img src="styles/legend/lokalplaner_3_4.png" /> 1061038<br />\
    <img src="styles/legend/lokalplaner_3_5.png" /> 1061103<br />\
    <img src="styles/legend/lokalplaner_3_6.png" /> 1061140<br />\
    <img src="styles/legend/lokalplaner_3_7.png" /> 1061206<br />\
    <img src="styles/legend/lokalplaner_3_8.png" /> 1061209<br />\
    <img src="styles/legend/lokalplaner_3_9.png" /> 1061210<br />\
    <img src="styles/legend/lokalplaner_3_10.png" /> 1061715<br />\
    <img src="styles/legend/lokalplaner_3_11.png" /> 1061734<br />\
    <img src="styles/legend/lokalplaner_3_12.png" /> 1061739<br />\
    <img src="styles/legend/lokalplaner_3_13.png" /> 1061746<br />\
    <img src="styles/legend/lokalplaner_3_14.png" /> 1061756<br />\
    <img src="styles/legend/lokalplaner_3_15.png" /> 1061757<br />\
    <img src="styles/legend/lokalplaner_3_16.png" /> 1061824<br />\
    <img src="styles/legend/lokalplaner_3_17.png" /> 1061829<br />\
    <img src="styles/legend/lokalplaner_3_18.png" /> 1062026<br />\
    <img src="styles/legend/lokalplaner_3_19.png" /> 1062121<br />\
    <img src="styles/legend/lokalplaner_3_20.png" /> 1070479<br />\
    <img src="styles/legend/lokalplaner_3_21.png" /> 1071381<br />\
    <img src="styles/legend/lokalplaner_3_22.png" /> 1074662<br />\
    <img src="styles/legend/lokalplaner_3_23.png" /> 1074664<br />\
    <img src="styles/legend/lokalplaner_3_24.png" /> 1074675<br />\
    <img src="styles/legend/lokalplaner_3_25.png" /> 1075214<br />\
    <img src="styles/legend/lokalplaner_3_26.png" /> 1075219<br />\
    <img src="styles/legend/lokalplaner_3_27.png" /> 1075387<br />\
    <img src="styles/legend/lokalplaner_3_28.png" /> 1075393<br />\
    <img src="styles/legend/lokalplaner_3_29.png" /> 1075552<br />\
    <img src="styles/legend/lokalplaner_3_30.png" /> 1075553<br />\
    <img src="styles/legend/lokalplaner_3_31.png" /> 1075577<br />\
    <img src="styles/legend/lokalplaner_3_32.png" /> 1075593<br />\
    <img src="styles/legend/lokalplaner_3_33.png" /> 1075598<br />\
    <img src="styles/legend/lokalplaner_3_34.png" /> 1075609<br />\
    <img src="styles/legend/lokalplaner_3_35.png" /> 1075669<br />\
    <img src="styles/legend/lokalplaner_3_36.png" /> 1075682<br />\
    <img src="styles/legend/lokalplaner_3_37.png" /> 1075695<br />\
    <img src="styles/legend/lokalplaner_3_38.png" /> 1075708<br />\
    <img src="styles/legend/lokalplaner_3_39.png" /> 1075710<br />\
    <img src="styles/legend/lokalplaner_3_40.png" /> 1075718<br />\
    <img src="styles/legend/lokalplaner_3_41.png" /> 1075751<br />\
    <img src="styles/legend/lokalplaner_3_42.png" /> 1075752<br />\
    <img src="styles/legend/lokalplaner_3_43.png" /> 1075779<br />\
    <img src="styles/legend/lokalplaner_3_44.png" /> 1075795<br />\
    <img src="styles/legend/lokalplaner_3_45.png" /> 1075800<br />\
    <img src="styles/legend/lokalplaner_3_46.png" /> 1075801<br />\
    <img src="styles/legend/lokalplaner_3_47.png" /> 1075815<br />\
    <img src="styles/legend/lokalplaner_3_48.png" /> 1075877<br />\
    <img src="styles/legend/lokalplaner_3_49.png" /> 1075893<br />\
    <img src="styles/legend/lokalplaner_3_50.png" /> 1075897<br />\
    <img src="styles/legend/lokalplaner_3_51.png" /> 1075900<br />\
    <img src="styles/legend/lokalplaner_3_52.png" /> 1075902<br />\
    <img src="styles/legend/lokalplaner_3_53.png" /> 1075905<br />\
    <img src="styles/legend/lokalplaner_3_54.png" /> 1075907<br />\
    <img src="styles/legend/lokalplaner_3_55.png" /> 1075908<br />\
    <img src="styles/legend/lokalplaner_3_56.png" /> 1076004<br />\
    <img src="styles/legend/lokalplaner_3_57.png" /> 1076010<br />\
    <img src="styles/legend/lokalplaner_3_58.png" /> 1076019<br />\
    <img src="styles/legend/lokalplaner_3_59.png" /> 1076041<br />\
    <img src="styles/legend/lokalplaner_3_60.png" /> 1076064<br />\
    <img src="styles/legend/lokalplaner_3_61.png" /> 1076086<br />\
    <img src="styles/legend/lokalplaner_3_62.png" /> 1076094<br />\
    <img src="styles/legend/lokalplaner_3_63.png" /> 1076107<br />\
    <img src="styles/legend/lokalplaner_3_64.png" /> 1076114<br />\
    <img src="styles/legend/lokalplaner_3_65.png" /> 1076115<br />\
    <img src="styles/legend/lokalplaner_3_66.png" /> 1076126<br />\
    <img src="styles/legend/lokalplaner_3_67.png" /> 1076129<br />\
    <img src="styles/legend/lokalplaner_3_68.png" /> 1076287<br />\
    <img src="styles/legend/lokalplaner_3_69.png" /> 1076379<br />\
    <img src="styles/legend/lokalplaner_3_70.png" /> 1076865<br />\
    <img src="styles/legend/lokalplaner_3_71.png" /> 1076868<br />\
    <img src="styles/legend/lokalplaner_3_72.png" /> 1076874<br />\
    <img src="styles/legend/lokalplaner_3_73.png" /> 1076892<br />\
    <img src="styles/legend/lokalplaner_3_74.png" /> 1076902<br />\
    <img src="styles/legend/lokalplaner_3_75.png" /> 1076939<br />\
    <img src="styles/legend/lokalplaner_3_76.png" /> 1076961<br />\
    <img src="styles/legend/lokalplaner_3_77.png" /> 1076968<br />\
    <img src="styles/legend/lokalplaner_3_78.png" /> 1077070<br />\
    <img src="styles/legend/lokalplaner_3_79.png" /> 1077082<br />\
    <img src="styles/legend/lokalplaner_3_80.png" /> 1077085<br />\
    <img src="styles/legend/lokalplaner_3_81.png" /> 1077086<br />\
    <img src="styles/legend/lokalplaner_3_82.png" /> 1077558<br />\
    <img src="styles/legend/lokalplaner_3_83.png" /> 1077565<br />\
    <img src="styles/legend/lokalplaner_3_84.png" /> 1078074<br />\
    <img src="styles/legend/lokalplaner_3_85.png" /> 1078075<br />\
    <img src="styles/legend/lokalplaner_3_86.png" /> 1078077<br />\
    <img src="styles/legend/lokalplaner_3_87.png" /> 1078184<br />\
    <img src="styles/legend/lokalplaner_3_88.png" /> 1078227<br />\
    <img src="styles/legend/lokalplaner_3_89.png" /> 1078229<br />\
    <img src="styles/legend/lokalplaner_3_90.png" /> 1078231<br />\
    <img src="styles/legend/lokalplaner_3_91.png" /> 1078248<br />\
    <img src="styles/legend/lokalplaner_3_92.png" /> 1078275<br />\
    <img src="styles/legend/lokalplaner_3_93.png" /> 1078279<br />\
    <img src="styles/legend/lokalplaner_3_94.png" /> 1078289<br />\
    <img src="styles/legend/lokalplaner_3_95.png" /> 1078346<br />\
    <img src="styles/legend/lokalplaner_3_96.png" /> 1078464<br />\
    <img src="styles/legend/lokalplaner_3_97.png" /> 1078465<br />\
    <img src="styles/legend/lokalplaner_3_98.png" /> 1078468<br />\
    <img src="styles/legend/lokalplaner_3_99.png" /> 1079122<br />\
    <img src="styles/legend/lokalplaner_3_100.png" /> 1079123<br />\
    <img src="styles/legend/lokalplaner_3_101.png" /> 1079666<br />\
    <img src="styles/legend/lokalplaner_3_102.png" /> 1079671<br />\
    <img src="styles/legend/lokalplaner_3_103.png" /> 1081381<br />\
    <img src="styles/legend/lokalplaner_3_104.png" /> 1084485<br />\
    <img src="styles/legend/lokalplaner_3_105.png" /> 1084491<br />\
    <img src="styles/legend/lokalplaner_3_106.png" /> 1084492<br />\
    <img src="styles/legend/lokalplaner_3_107.png" /> 1103890<br />\
    <img src="styles/legend/lokalplaner_3_108.png" /> 1109560<br />\
    <img src="styles/legend/lokalplaner_3_109.png" /> 1328884<br />\
    <img src="styles/legend/lokalplaner_3_110.png" /> 1359145<br />\
    <img src="styles/legend/lokalplaner_3_111.png" /> 1369547<br />\
    <img src="styles/legend/lokalplaner_3_112.png" /> 1374739<br />\
    <img src="styles/legend/lokalplaner_3_113.png" /> 1792902<br />\
    <img src="styles/legend/lokalplaner_3_114.png" /> 1869505<br />\
    <img src="styles/legend/lokalplaner_3_115.png" /> 2136388<br />\
    <img src="styles/legend/lokalplaner_3_116.png" /> 2186492<br />\
    <img src="styles/legend/lokalplaner_3_117.png" /> 2269185<br />\
    <img src="styles/legend/lokalplaner_3_118.png" /> 2641209<br />\
    <img src="styles/legend/lokalplaner_3_119.png" /> 2702963<br />\
    <img src="styles/legend/lokalplaner_3_120.png" /> 2702964<br />\
    <img src="styles/legend/lokalplaner_3_121.png" /> 2702965<br />\
    <img src="styles/legend/lokalplaner_3_122.png" /> 2702968<br />\
    <img src="styles/legend/lokalplaner_3_123.png" /> 2702969<br />\
    <img src="styles/legend/lokalplaner_3_124.png" /> 2702993<br />\
    <img src="styles/legend/lokalplaner_3_125.png" /> 2978253<br />\
    <img src="styles/legend/lokalplaner_3_126.png" /> 3016098<br />\
    <img src="styles/legend/lokalplaner_3_127.png" /> 3016099<br />\
    <img src="styles/legend/lokalplaner_3_128.png" /> 3016105<br />\
    <img src="styles/legend/lokalplaner_3_129.png" /> 3186913<br />\
    <img src="styles/legend/lokalplaner_3_130.png" /> 3188617<br />\
    <img src="styles/legend/lokalplaner_3_131.png" /> 3188619<br />\
    <img src="styles/legend/lokalplaner_3_132.png" /> 3812280<br />\
    <img src="styles/legend/lokalplaner_3_133.png" /> 3964626<br />\
    <img src="styles/legend/lokalplaner_3_134.png" /> 3964627<br />\
    <img src="styles/legend/lokalplaner_3_135.png" /> 3964812<br />\
    <img src="styles/legend/lokalplaner_3_136.png" /> 9419556<br />\
    <img src="styles/legend/lokalplaner_3_137.png" /> 9431987<br />\
    <img src="styles/legend/lokalplaner_3_138.png" /> 9431989<br />\
    <img src="styles/legend/lokalplaner_3_139.png" /> 9431990<br />\
    <img src="styles/legend/lokalplaner_3_140.png" /> 9431991<br />\
    <img src="styles/legend/lokalplaner_3_141.png" /> 9431992<br />\
    <img src="styles/legend/lokalplaner_3_142.png" /> 9431993<br />\
    <img src="styles/legend/lokalplaner_3_143.png" /> 9431994<br />\
    <img src="styles/legend/lokalplaner_3_144.png" /> 9690454<br />\
    <img src="styles/legend/lokalplaner_3_145.png" /> 9717080<br />\
    <img src="styles/legend/lokalplaner_3_146.png" /> 9731022<br />\
    <img src="styles/legend/lokalplaner_3_147.png" /> 9732835<br />\
    <img src="styles/legend/lokalplaner_3_148.png" /> 9732862<br />\
    <img src="styles/legend/lokalplaner_3_149.png" /> 9753254<br />\
    <img src="styles/legend/lokalplaner_3_150.png" /> 10353005<br />\
    <img src="styles/legend/lokalplaner_3_151.png" /> 10456675<br />\
    <img src="styles/legend/lokalplaner_3_152.png" /> 10478656<br />\
    <img src="styles/legend/lokalplaner_3_153.png" /> 10840028<br />\
    <img src="styles/legend/lokalplaner_3_154.png" /> 10900534<br />\
    <img src="styles/legend/lokalplaner_3_155.png" /> 10906517<br />\
    <img src="styles/legend/lokalplaner_3_156.png" /> 10985743<br />\
    <img src="styles/legend/lokalplaner_3_157.png" /> 11021467<br />\
    <img src="styles/legend/lokalplaner_3_158.png" /> 11126774<br />\
    <img src="styles/legend/lokalplaner_3_159.png" /> 11159816<br />\
    <img src="styles/legend/lokalplaner_3_160.png" /> 11176926<br />\
    <img src="styles/legend/lokalplaner_3_161.png" /> 11185105<br />\
    <img src="styles/legend/lokalplaner_3_162.png" /> 11198619<br />\
    <img src="styles/legend/lokalplaner_3_163.png" /> 11228193<br />\
    <img src="styles/legend/lokalplaner_3_164.png" /> 11240317<br />\
    <img src="styles/legend/lokalplaner_3_165.png" /> 11252419<br />\
    <img src="styles/legend/lokalplaner_3_166.png" /> 11307736<br />\
    <img src="styles/legend/lokalplaner_3_167.png" /> 11307768<br />\
    <img src="styles/legend/lokalplaner_3_168.png" /> 11317442<br />\
    <img src="styles/legend/lokalplaner_3_169.png" /> 11347122<br />\
    <img src="styles/legend/lokalplaner_3_170.png" /> <br />' });
var format_togstationer_4 = new ol.format.GeoJSON();
var features_togstationer_4 = format_togstationer_4.readFeatures(json_togstationer_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_togstationer_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_togstationer_4.addFeatures(features_togstationer_4);
var lyr_togstationer_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_togstationer_4, 
                style: style_togstationer_4,
                popuplayertitle: 'togstationer',
                interactive: true,
                title: '<img src="styles/legend/togstationer_4.png" /> togstationer'
            });
var format_StrandbeskyttelseHvidovre_5 = new ol.format.GeoJSON();
var features_StrandbeskyttelseHvidovre_5 = format_StrandbeskyttelseHvidovre_5.readFeatures(json_StrandbeskyttelseHvidovre_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_StrandbeskyttelseHvidovre_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_StrandbeskyttelseHvidovre_5.addFeatures(features_StrandbeskyttelseHvidovre_5);
var lyr_StrandbeskyttelseHvidovre_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_StrandbeskyttelseHvidovre_5, 
                style: style_StrandbeskyttelseHvidovre_5,
                popuplayertitle: 'Strandbeskyttelse Hvidovre',
                interactive: true,
                title: '<img src="styles/legend/StrandbeskyttelseHvidovre_5.png" /> Strandbeskyttelse Hvidovre'
            });

lyr_Voyagernolabelsretina_0.setVisible(true);lyr_folkeskoler_1.setVisible(true);lyr_kommuneplan_2.setVisible(true);lyr_lokalplaner_3.setVisible(true);lyr_togstationer_4.setVisible(true);lyr_StrandbeskyttelseHvidovre_5.setVisible(true);
var layersList = [lyr_Voyagernolabelsretina_0,lyr_folkeskoler_1,lyr_kommuneplan_2,lyr_lokalplaner_3,lyr_togstationer_4,lyr_StrandbeskyttelseHvidovre_5];
lyr_folkeskoler_1.set('fieldAliases', {'Skolenavn': 'Skolenavn', 'Adresse': 'Adresse', 'By': 'By', 'Hjemmeside': 'Hjemmeside', 'result_num': 'result_num', 'osm_id': 'osm_id', 'display_na': 'display_na', 'category': 'category', 'type': 'type', 'latlong': 'latlong', });
lyr_kommuneplan_2.set('fieldAliases', {});
lyr_lokalplaner_3.set('fieldAliases', {'planid': 'planid', 'plannr': 'plannr', 'plannavn': 'plannavn', 'anvgen': 'anvgen', 'datovedt': 'datovedt', 'doklink': 'doklink', });
lyr_togstationer_4.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_StrandbeskyttelseHvidovre_5.set('fieldAliases', {});
lyr_folkeskoler_1.set('fieldImages', {'Skolenavn': 'TextEdit', 'Adresse': 'TextEdit', 'By': 'TextEdit', 'Hjemmeside': 'TextEdit', 'result_num': 'Hidden', 'osm_id': 'Hidden', 'display_na': 'Hidden', 'category': 'Hidden', 'type': 'Hidden', 'latlong': 'Hidden', });
lyr_kommuneplan_2.set('fieldImages', {});
lyr_lokalplaner_3.set('fieldImages', {'planid': 'TextEdit', 'plannr': 'TextEdit', 'plannavn': 'TextEdit', 'anvgen': 'TextEdit', 'datovedt': 'TextEdit', 'doklink': 'TextEdit', });
lyr_togstationer_4.set('fieldImages', {'Name': 'TextEdit', 'description': 'Hidden', 'timestamp': 'Hidden', 'begin': 'Hidden', 'end': 'Hidden', 'altitudeMode': 'Hidden', 'tessellate': 'Hidden', 'extrude': 'Hidden', 'visibility': 'Hidden', 'drawOrder': 'Hidden', 'icon': 'Hidden', });
lyr_StrandbeskyttelseHvidovre_5.set('fieldImages', {});
lyr_folkeskoler_1.set('fieldLabels', {'Skolenavn': 'no label', 'Adresse': 'no label', 'By': 'no label', 'Hjemmeside': 'no label', });
lyr_kommuneplan_2.set('fieldLabels', {});
lyr_lokalplaner_3.set('fieldLabels', {'planid': 'inline label - always visible', 'plannr': 'inline label - always visible', 'plannavn': 'hidden field', 'anvgen': 'inline label - always visible', 'datovedt': 'inline label - always visible', 'doklink': 'inline label - always visible', });
lyr_togstationer_4.set('fieldLabels', {'Name': 'no label', });
lyr_StrandbeskyttelseHvidovre_5.set('fieldLabels', {});
lyr_StrandbeskyttelseHvidovre_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});