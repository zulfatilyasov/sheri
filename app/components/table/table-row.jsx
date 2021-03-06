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
