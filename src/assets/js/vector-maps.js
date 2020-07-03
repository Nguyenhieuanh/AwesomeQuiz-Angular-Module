!function(o){function e(a){if(r[a])return r[a].exports;var t=r[a]={i:a,l:!1,exports:{}};return o[a].call(t.exports,t,t.exports,e),t.l=!0,t.exports}var r={};e.m=o,e.c=r,e.d=function(o,r,a){e.o(o,r)||Object.defineProperty(o,r,{configurable:!1,enumerable:!0,get:a})},e.n=function(o){var r=o&&o.__esModule?function(){return o.default}:function(){return o};return e.d(r,"a",r),r},e.o=function(o,e){return Object.prototype.hasOwnProperty.call(o,e)},e.p="",e(e.s=42)}({42:function(o,e,r){o.exports=r(43)},43:function(o,e){!function(o){o.fn.tkVectorWorldMapGDP=function(){if(this.length){var o=window.jVectorMapGdpData;void 0!==o&&this.vectorMap({map:"world_mill_en",zoomOnScroll:!1,backgroundColor:"#fff",series:{regions:[{values:o,scale:[colors["primary-color"],colors["info-color"]],normalizeFunction:"polynomial"}]},onLabelShow:function(e,r,a){r.html(r.html()+" (GDP - "+o[a]+")")}})}},o.fn.tkVectorWorldMapMarkers=function(){this.length&&this.vectorMap({map:"world_mill_en",regionStyle:{initial:{fill:colors["grey-300"]}},zoomOnScroll:!1,normalizeFunction:"polynomial",hoverOpacity:.7,hoverColor:!1,markerStyle:{initial:{fill:colors["primary-color"],stroke:"#fff"}},backgroundColor:"#fff",markers:[{latLng:[41.9,12.45],name:"Vatican City"},{latLng:[43.73,7.41],name:"Monaco"},{latLng:[-.52,166.93],name:"Nauru"},{latLng:[-8.51,179.21],name:"Tuvalu"},{latLng:[43.93,12.46],name:"San Marino"},{latLng:[47.14,9.52],name:"Liechtenstein"},{latLng:[7.11,171.06],name:"Marshall Islands"},{latLng:[17.3,-62.73],name:"Saint Kitts and Nevis"},{latLng:[3.2,73.22],name:"Maldives"},{latLng:[35.88,14.5],name:"Malta"},{latLng:[12.05,-61.75],name:"Grenada"},{latLng:[13.16,-61.23],name:"Saint Vincent and the Grenadines"},{latLng:[13.16,-59.55],name:"Barbados"},{latLng:[17.11,-61.85],name:"Antigua and Barbuda"},{latLng:[-4.61,55.45],name:"Seychelles"},{latLng:[7.35,134.46],name:"Palau"},{latLng:[42.5,1.51],name:"Andorra"},{latLng:[14.01,-60.98],name:"Saint Lucia"},{latLng:[6.91,158.18],name:"Federated States of Micronesia"},{latLng:[1.3,103.8],name:"Singapore"},{latLng:[1.46,173.03],name:"Kiribati"},{latLng:[-21.13,-175.2],name:"Tonga"},{latLng:[15.3,-61.38],name:"Dominica"},{latLng:[-20.2,57.5],name:"Mauritius"},{latLng:[26.02,50.55],name:"Bahrain"},{latLng:[.33,6.73],name:"So Tom and Prncipe"}]})},o.fn.tkVectorUSAUnemployment=function(){if(this.length){var e=this;o.getJSON("assets/data/vector-maps/data/us-unemployment.json",function(o){var r=jvm.values.apply({},jvm.values(o.states)),a=Array.prototype.concat.apply([],jvm.values(o.metro.population)),t=Array.prototype.concat.apply([],jvm.values(o.metro.unemployment));e.vectorMap({map:"us_aea_en",markers:o.metro.coords,backgroundColor:"#fff",zoomOnScroll:!1,series:{markers:[{attribute:"fill",scale:[colors["danger-color"]],values:o.metro.unemployment[2009],min:jvm.min(t),max:jvm.max(t)},{attribute:"r",scale:[5,20],values:o.metro.population[2009],min:jvm.min(a),max:jvm.max(a)}],regions:[{scale:[colors["primary-color"],colors["info-color"]],attribute:"fill",values:o.states[2009],min:jvm.min(r),max:jvm.max(r)}]},onMarkerLabelShow:function(e,r,a){r.html("<b>"+o.metro.names[a]+"</b><br/><b>Population: </b>"+o.metro.population[2009][a]+"</br><b>Unemployment rate: </b>"+o.metro.unemployment[2009][a]+"%")},onRegionLabelShow:function(e,r,a){r.html("<b>"+r.html()+"</b></br><b>Unemployment rate: </b>"+o.states[2009][a]+"%")}})})}},o.fn.tkVectorRegionSelection=function(){if(this.length){var o=this,e=new jvm.Map({container:o,map:"de_merc_en",regionsSelectable:!0,markersSelectable:!0,backgroundColor:"#fff",zoomOnScroll:!1,markers:[{latLng:[52.5,13.39],name:"Berlin"},{latLng:[53.56,10],name:"Hamburg"},{latLng:[48.13,11.56],name:"Munich"},{latLng:[50.95,6.96],name:"Cologne"},{latLng:[50.11,8.68],name:"Frankfurt am Main"},{latLng:[48.77,9.17],name:"Stuttgart"},{latLng:[51.23,6.78],name:"Dusseldorf"},{latLng:[51.51,7.46],name:"Dortmund"},{latLng:[51.45,7.01],name:"Essen"},{latLng:[53.07,8.8],name:"Bremen"}],markerStyle:{initial:{fill:colors["danger-color"]},selected:{fill:colors["success-color"]}},regionStyle:{initial:{fill:colors["primary-color"]},selected:{fill:colors["default-color"]}},series:{markers:[{attribute:"r",scale:[5,15],values:[887.7,755.16,310.69,405.17,248.31,207.35,217.22,280.71,210.32,325.42]}]},onRegionSelected:function(){window.localStorage&&window.localStorage.setItem("jvectormap-selected-regions",JSON.stringify(e.getSelectedRegions()))},onMarkerSelected:function(){window.localStorage&&window.localStorage.setItem("jvectormap-selected-markers",JSON.stringify(e.getSelectedMarkers()))}});e.setSelectedRegions(JSON.parse(window.localStorage.getItem("jvectormap-selected-regions")||"[]")),e.setSelectedMarkers(JSON.parse(window.localStorage.getItem("jvectormap-selected-markers")||"[]"))}},o.fn.tkVectorFranceElections=function(){this.length&&o.getJSON("assets/data/vector-maps/data/france-elections.json",function(e){new jvm.Map({map:"fr_merc_en",backgroundColor:"#fff",container:o("#france-2007"),zoomOnScroll:!1,series:{regions:[{scale:{1:colors["primary-color"],2:colors["danger-color"]},attribute:"fill",values:e.year2007.results}]}}),new jvm.Map({map:"fr_merc_en",container:o("#france-2012"),backgroundColor:"#fff",zoomOnScroll:!1,series:{regions:[{scale:{1:colors["primary-color"],2:colors["danger-color"]},attribute:"fill",values:e.year2012.results}]}})})};var e,r=[colors["danger-color"],colors["primary-color"],colors["success-color"],colors["warning-color"],colors["info-color"],colors["secondary-color"]],a=function(){var o,a={};for(o in e.regions)a[o]=r[Math.floor(Math.random()*r.length)];return a};o.fn.tkVectorRandomColors=function(){this.length&&(e=new jvm.Map({map:"es_merc_en",backgroundColor:"#fff",container:this,zoomOnScroll:!1,series:{regions:[{attribute:"fill"}]}}),e.series.regions[0].setValues(a()),o("#update-colors-button").click(function(o){o.preventDefault(),e.series.regions[0].setValues(a())}))},o.fn.tkVectorMallMap=function(){this.length&&this.vectorMap({map:"mall",backgroundColor:"#fff",zoomOnScroll:!1,markers:[{coords:[60,110],name:"Escalator 1",style:{fill:colors["danger-color"],stroke:"#fff"}},{coords:[260,95],name:"Escalator 2",style:{fill:colors["danger-color"],stroke:"#fff"}},{coords:[434,95],name:"Escalator 3",style:{fill:colors["danger-color"],stroke:"#fff"}},{coords:[634,110],name:"Escalator 4",style:{fill:colors["danger-color"],stroke:"#fff"}}],series:{regions:[{values:{F102:"SPORTS & OUTDOOR",F103:"HOME DECOR",F105:"FASHION",F106:"OTHER",F108:"BEAUTY & SPA",F109:"FASHION",F110:"BEAUTY & SPA",F111:"URBAN FAVORITES",F114:"SERVICES",F166:"DINING",F167:"FASHION",F169:"DINING",F170:"ENTERTAINMENT",F172:"DINING",F174:"DINING",F115:"KIDS STUFF",F117:"LIFESTYLE",F118:"URBAN FAVORITES",F119:"FASHION",F120:"FASHION",F122:"KIDS STUFF",F124:"KIDS STUFF",F125:"KIDS STUFF",F126:"KIDS STUFF",F128:"KIDS STUFF",F129:"LIFESTYLE",F130:"HOME DECOR",F132:"DINING",F133:"SPORTS & OUTDOOR",F134:"KIDS STUFF",F135:"LIFESTYLE",F136:"LIFESTYLE",F139:"KIDS STUFF",F153:"DINING",F155:"FASHION",F156:"URBAN FAVORITES",F157:"URBAN FAVORITES",F158:"LINGERIE & UNDERWEAR",F159:"FASHION",F160:"FASHION",F162:"FASHION",F164:"FASHION",F165:"FASHION",FR01:"REST ROOMS",FR02:"REST ROOMS",FR03:"REST ROOMS",FR04:"REST ROOMS",FFC:"DINING"},scale:{FASHION:"#2761ad","LINGERIE & UNDERWEAR":"#d58aa3","BEAUTY & SPA":colors["info-color"],"URBAN FAVORITES":colors["red-300"],"SPORTS & OUTDOOR":colors["info-color"],"KIDS STUFF":colors["purple-500"],ENTERTAINMENT:colors["success-color"],"HOME DECOR":colors["grey-400"],LIFESTYLE:colors["warning-color"],DINING:colors["success-color"],"REST ROOMS":colors["grey-200"],SERVICES:colors["grey-300"],OTHER:colors["grey-500"]}}]},onRegionLabelShow:function(o,e,r){""===e.html()&&o.preventDefault()}})},o.fn.tkVectorProjectionMap=function(){if(this.length){var e,r=0,a={};e=new jvm.Map({map:"us_lcc_en",zoomOnScroll:!1,regionStyle:{initial:{fill:colors["primary-color"]}},backgroundColor:"#fff",markerStyle:{initial:{fill:"red"}},container:this,onMarkerLabelShow:function(o,r,t){e.label.text(a[t].lat.toFixed(2)+", "+a[t].lng.toFixed(2))},onMarkerClick:function(o,r){e.removeMarkers([r]),e.label.hide()}}),e.container.click(function(t){var n=e.pointToLatLng(t.offsetX,t.offsetY),l=o(t.target).attr("class");n&&(!l||l&&-1===o(t.target).attr("class").indexOf("jvectormap-marker"))&&(a[r]=n,e.addMarker(r,{latLng:[n.lat,n.lng]}),r+=1)})}},o('[data-toggle="vector-world-map-gdp"]').tkVectorWorldMapGDP(),o('[data-toggle="vector-world-map-markers"]').tkVectorWorldMapMarkers(),o('[data-toggle="vector-usa-unemployment"]').tkVectorUSAUnemployment(),o('[data-toggle="vector-region-selection"]').tkVectorRegionSelection(),o('[data-toggle="vector-france-elections"]').tkVectorFranceElections(),o('[data-toggle="vector-random-colors"]').tkVectorRandomColors(),o('[data-toggle="vector-mall-map"]').tkVectorMallMap(),o('[data-toggle="vector-projection-map"]').tkVectorProjectionMap()}(jQuery)}});