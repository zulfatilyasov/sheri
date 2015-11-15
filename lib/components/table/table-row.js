'use strict';

var React = require('react');
var TableRow = React.createClass({
  displayName: 'TableRow',

  render: function render() {
    var tableCells = [];
    for (var prop in this.props.headers) {
      if (this.props.headers[prop].show) {
        var cellClass = 'cell ' + prop;
        tableCells.push(React.createElement(
          'td',
          { key: prop, className: cellClass, 'data-title': this.props.headers[prop].name },
          React.createElement(
            'div',
            { className: 'cell-content' },
            React.createElement(
              'a',
              { href: 'javascript:void(0)', onClick: this.props.onRowClick },
              this.props.rowData[prop]
            )
          )
        ));
      }
    }

    var rowClassName = this.props.rowData['highlight'] ? 'highlight' : '';
    return React.createElement(
      'tr',
      { className: rowClassName },
      tableCells
    );
  }
});

module.exports = TableRow;