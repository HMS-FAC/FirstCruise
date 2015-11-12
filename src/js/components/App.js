var React  = require('react');
var Map = require('./Map.js');

var App = React.createClass({
  render: function () {

    return (
      <div className="app-container">
        <h1>banter</h1>
      <Map />
      </div>
    )

  }
});

module.exports = App;
