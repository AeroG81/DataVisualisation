var vg_1 = "js/f1_geomap.vg.json";
vegaEmbed("#F1map", vg_1).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

var vg_2 = "js/f1_constructor.vg.json";
vegaEmbed("#F1constructor", vg_2).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

console.log("Newer version 4");