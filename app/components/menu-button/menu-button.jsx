var React = require('react');

var MenuButton = React.createClass({
  render: function () {
      return(
        <div className="menu-button" onClick={this.props.onClick}>
          <i className="icon icon-menu"></i>
        </div>
      );
  }
});

module.exports = MenuButton