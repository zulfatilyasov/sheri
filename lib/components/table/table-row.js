'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

var React = require('react');

var areEqual = function areEqual(objA, objB) {
  if (objA === objB) {
    return true;
  }

  if ((typeof objA === 'undefined' ? 'undefined' : _typeof(objA)) !== 'object' || objA === null || (typeof objB === 'undefined' ? 'undefined' : _typeof(objB)) !== 'object' || objB === null) {
    return false;
  }

  var keysA = Object.keys(objA);
  var keysB = Object.keys(objB);

  if (keysA.length !== keysB.length) {
    return false;
  }

  // Test for A's keys different from B.
  var bHasOwnProperty = hasOwnProperty.bind(objB);
  for (var i = 0; i < keysA.length; i++) {
    if (!bHasOwnProperty(keysA[i]) || objA[keysA[i]] !== objB[keysA[i]] && _typeof(objB[keysA[i]]) !== 'object') {
      return false;
    }
  }

  return true;
};

var TableRow = React.createClass({
  displayName: 'TableRow',
  shouldComponentUpdate: function shouldComponentUpdate(nextProps) {
    return !areEqual(this.props.rowData, nextProps.rowData) || !areEqual(this.props.headers, nextProps.headers);
  },


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