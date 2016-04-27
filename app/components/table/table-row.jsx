var React = require('react');

var areEqual = function(objA, objB){
  if (objA === objB) {
    return true;
  }

  if (typeof objA !== 'object' || objA === null || typeof objB !== 'object' || objB === null) {
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
    if (!bHasOwnProperty(keysA[i]) || (objA[keysA[i]] !== objB[keysA[i]] && typeof objB[keysA[i]] !== 'object')) {
      return false;
    }
  }

  return true;
}

var TableRow = React.createClass({
  shouldComponentUpdate(nextProps) {
    return !areEqual(this.props.rowData, nextProps.rowData) || !areEqual(this.props.headers, nextProps.headers);
  },

  render: function () {
    var tableCells = [];
    for (var prop in this.props.headers) {
      if (this.props.headers[prop].show) {
        var cellClass = 'cell ' + prop;
        tableCells.push(
          <td key={prop} className={cellClass} data-title={this.props.headers[prop].name}>
            <div className="cell-content">
              <If condition={prop === 'name'}>
                <a href="javascript:void(0)" onClick={this.props.onRowClick.bind(null, this.props.rowData)}>
                  {this.props.rowData[prop]}
                </a>
                <Else />
                {this.props.rowData[prop]}
              </If>
            </div>
          </td>
        );
      }
    }

    var rowClassName = this.props.rowData['highlight'] ? 'highlight' : '';
    return (
      <tr className={rowClassName}>{tableCells}</tr>
    );
  }
});

module.exports = TableRow;
