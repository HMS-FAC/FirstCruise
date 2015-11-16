var React  = require('react');

var Canvas = React.createClass({
  render: function () {
    return (
      <svg>{this.props.children}</svg>
    )
  }
});

module.exports = Canvas;
