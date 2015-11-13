var React  = require('react');
var Map = require('./Map.js');

var App = React.createClass({
  

  render: function () {

  	var cornwallData = {objects:[
{circle:{coordinates:[50.40,-4.66],tidal:"full",message:"boom boom"}},
{circle:{coordinates:[50.07,-5.70],tidal:"half",message:"badda bing!"}},
{circle:{coordinates:[50.26,-5.28],tidal:"quarter",message:"come on!"}},
{circle:{coordinates:[50.24,-5.02],tidal:"three-quarters",message:"badda bing!"}},
{circle:{coordinates:[41.29,-4.78],tidal:"full",message:"badda bing!"}}
]};


  var cornwallView = [50.40,-4.69];

  var mapProps = {
  	data: cornwallData,
  	setView: cornwallView
  }

    return (
      <div className="app-container">
        <h1>banter</h1>
        <div className="map-container">
        	<Map {...mapProps} />
        </div>
      </div>
    )

  }
});

module.exports = App;
