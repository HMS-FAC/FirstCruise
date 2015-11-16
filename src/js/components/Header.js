// components/Header.jsx
var React = require('react')

var Header = React.createClass({
  render: function () {
    return (
      <header>
         <link rel="stylesheet" href="http://cdn.leafletjs.com/leaflet/v0.7.7/leaflet.css" />
         <script src="http://cdnjs.cloudflare.com/ajax/libs/d3/3.3.13/d3.js"></script>
      </header>
    )
  }
});

module.exports = Header;
