'use strict';

var React = require('react');
var TableRow = React.createClass({
  displayName: 'TableRow',

  render: function render() {
    var tableCells = [];
    for (var prop in this.props.headers) {
      if (this.props.headers[prop].show) {
        tableCells.push(React.createElement(
          'td',
          { key: prop, 'data-title': this.props.headers[prop].name },
          this.props.rowData[prop]
        ));
      }
    }
    return React.createElement(
      'tr',
      null,
      tableCells
    );
  }
});

module.exports = TableRow;