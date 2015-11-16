var React  = require('react');
var Mapping = require('./Mapping.js');
var Header = require('./Header.js');
var D3chart= require('./D3chart.js');

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
  var mappingProps = {
  	data: cornwallData,
  	setView: cornwallView
  }
  
    return (
      <div>
        <Header/>
        <h1>banter</h1>
        	<Mapping {...mappingProps} />
          <D3chart/>
      </div>
    )
  }
});

module.exports = App;
