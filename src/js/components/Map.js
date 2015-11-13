var React  = require('react');
var ReactL =require('react-leaflet');
var Canvas = ReactL.Map;
var TileLayer = ReactL.TileLayer;
var tileLayer;

var Map = React.createClass({

	render: function () {

  	var position = this.props.setView;

    return (
       <Canvas center={position} zoom={12}>
    	  <TileLayer url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'/>		
  	   </Canvas>
    )
  }
});

module.exports = Map;
