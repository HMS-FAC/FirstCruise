var React  = require('react');
var ReactL =require('react-leaflet');
var Map  = ReactL.Map;
var TileLayer = ReactL.TileLayer;
var slipways =require('json!./slipways.json')
var d3 =require('d3');

var Mapping = React.createClass({

	render: function () {

  	var position = this.props.setView;

		// console.log(position)
    // console.log('Slipways',slipways)

    return (
       <Map center={position} zoom={12} className="map" id="map">
         <TileLayer url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'/>
  	   </Map>
    )
  }
});

module.exports = Mapping;
