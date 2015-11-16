var React     = require('react');
var ReactL    = require('react-leaflet');
var Map       = ReactL.Map;
var TileLayer = ReactL.TileLayer;
// var slipways  = require('json!./slipways.json');
var d3        = require('d3');
var D3chart   = require('./D3chart.js');

var Mapping   = React.createClass({

	// componentDidMount: function () {
	//
	// }

	render: function () {

  	var position = this.props.setView;

		// console.log(position)
    // console.log('Slipways',slipways)

    return (
       <Map center={position} zoom={8} className="map" id="map">
         <TileLayer url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'/>
				 <D3chart/>
  	   </Map>
    )
  }
});

module.exports = Mapping;
