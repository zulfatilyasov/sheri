'use strict';

var React = require('react');
var TableRow = React.createClass({
  displayName: 'TableRow',

  render: function render() {
    var tableCells = [];
    for (var prop in this.props.headers) {
      if (this.props.headers[prop].show) {
        var cellClass = 'cell ' + this.props.headers[prop].name;
        tableCells.push(React.createElement(
          'td',
          { key: prop, className: cellClass, 'data-title': this.props.headers[prop].name },
          React.createElement(
            'div',
            { className: 'cell-content' },
            this.props.rowData[prop]
          )
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