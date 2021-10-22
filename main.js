import 'core-js';
import 'ol/ol.css';
import 'ol-layerswitcher/dist/ol-layerswitcher.css';
import Map from 'ol/Map';
import OSM from 'ol/source/OSM';
import TileLayer from 'ol/layer/Tile';
import View from 'ol/View';
import LayerSwitcher from 'ol-layerswitcher';
import LayerGroup from 'ol/layer/Group';
import Stamen from 'ol/source/Stamen';
// import 'whatwg-fetch';
// import '@babel/polyfill';

const osm = new TileLayer({
    title: 'OSM',
    type: 'base',
    visible: true,
    source: new OSM()
});

const watercolor = new TileLayer({
    title: 'Water color',
    type: 'base',
    visible: true,
    source: new Stamen({
        layer: 'watercolor'
    })
});

const baseMaps = new LayerGroup({
    title: 'Base maps',
    layers: [watercolor, osm]
});

const map = new Map({
    layers: [
        baseMaps
    ],
    target: 'map',
    view: new View({
        center: [0, 0],
        zoom: 2,
    }),
});

const layerSwitcher = new LayerSwitcher({
    reverse: true,
    groupSelectStyle: 'group'
});
map.addControl(layerSwitcher);