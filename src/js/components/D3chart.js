var React  = require('react');
var Canvas = require('./Canvas.js')
var Point =require('./Point.js');

var D3chart = React.createClass({
  render: function () {
    return (
      <Canvas>
        <Point/>
      </Canvas>

    )
  }
});




module.exports = D3chart;
