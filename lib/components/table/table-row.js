'use strict';

var React = require('react');
var PureRenderMixin = require('react-addons-pure-render-mixin');

var TableRow = React.createClass({
  displayName: 'TableRow',

  mixins: [PureRenderMixin],

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
            prop === 'name' ? React.createElement(
              'a',
              { href: 'javascript:void(0)', onClick: this.props.onRowClick.bind(null, this.props.rowData) },
              this.props.rowData[prop]
            ) : this.props.rowData[prop]
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