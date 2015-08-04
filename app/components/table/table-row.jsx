var React = require('react');
var TableRow = React.createClass({
  render: function() {
    var tableCells = [];
    for (var prop in this.props.headers) {
      if (this.props.headers[prop].show) {
        tableCells.push(
          <td key={prop} data-title={this.props.headers[prop].name}>{this.props.rowData[prop]}</td>
        );
      }
    }
    return (
      <tr>{tableCells}</tr>
    );
  }
});

module.exports = TableRow;
