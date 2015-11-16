var React  = require('react')

var Header = React.createClass({

  render: function () {

    return (
      <header>
         <link rel="stylesheet" href="http://cdn.leafletjs.com/leaflet/v0.7.7/leaflet.css" />
   	     <script src="http://d3js.org/d3.v3.min.js"></script>
   	     <script src="http://cdn.leafletjs.com/leaflet-0.7/leaflet.js"></script>
      </header>
    )
  }
});

module.exports = Header;
