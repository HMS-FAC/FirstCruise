var React  = require('react');
var ReactL =require('react-leaflet');
var Map  = ReactL.Map;
var TileLayer = ReactL.TileLayer;


var Mapping = React.createClass({

	render: function () {

  	var position = this.props.setView;

    return (

       <Map center={position} zoom={12} className="map">
     
    	   <TileLayer url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'/>		
  	   </Map>
  	
    )
  }
});

module.exports = Mapping;
