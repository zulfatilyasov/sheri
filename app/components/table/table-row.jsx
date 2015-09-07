var React = require('react');
var TableRow = React.createClass({
  render: function () {
    var tableCells = [];
    for (var prop in this.props.headers) {
      if (this.props.headers[prop].show) {
        var cellClass = 'cell ' + prop;
        tableCells.push(
          <td key={prop} className={cellClass} data-title={this.props.headers[prop].name}>
            <div className="cell-content">
              {this.props.rowData[prop]}
            </div>
          </td>
        );
      }
    }
    
    var rowClassName = this.props.rowData['hightlight'] ? 'hightlight' : '';
    return (
      <tr className={rowClassName}>{tableCells}</tr>
    );
  }
});

module.exports = TableRow;
