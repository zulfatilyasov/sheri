var React = require('react');
var TableRow = require('./table-row');
var classnames = require('classnames');
var ReactPaginate = require('react-paginate');

var Table = React.createClass({
  getInitialState: function () {
    this.skip = 0;
    return {
      headers: this.props.headers
    };
  },
  handlePageClick: function (page) {
    this.skip = page.selected * this.props.limit;
    return this.loadData();
  },
  loadData: function () {
    return this.props.onLoadData(this.skip, this.column, this.direction);
  },
  handleHeaderClick: function (header) {
    var headers = this.state.headers;
    if (headers[header] && headers[header].disableSort) {
      return;
    }
    for (var k in headers) {
      if (header === k) {
        headers[k].sort = !headers[k].sort;
        this.column = header;
        this.direction = headers[k].sort;
      } else {
        headers[k].sort = null;
      }
    }
    this.loadData();
    return this.setState({
      headers: headers
    });
  },
  render: function () {
    var className;
    className = classnames({
      'table-responsive-vertical': this.props.responsive
    });


    return (
      <div>
        <div className={'up-table ' + className}>
          <If condition={this.props.loading}>
            <div className="loading-message">
              <div className="loading-text">Loading...</div>
            </div>
            <Else/>
            <table id="table" className="sortable table table-hover table-mc-light-blue">
              <thead>
              <tr>
                <For each="k" of={Object.keys(this.state.headers)}>
                  <If condition={this.state.headers[k].show}>
                    <th key={k} onClick={this.handleHeaderClick.bind(this, k)}>
                      <div className="header-name">
                        <div className="header-text">
                          {this.state.headers[k].name}
                        </div>
                        <If condition={this.state.headers[k].disableSort !== true}>
                          <div className="icon">
                            <If condition={this.state.headers[k].sort === true}>
                              <div className="asc header-icon">
                                <i className="icon-sort"></i>
                              </div>
                            </If>
                            <If condition={this.state.headers[k].sort === false}>
                              <div className="desc header-icon">
                                <i className="icon-sort"></i>
                              </div>
                            </If>
                          </div>
                        </If>
                      </div>
                    </th>
                  </If>
                </For>
              </tr>
              </thead>
              <tbody>
              <For each="rowData" index="i" of={this.props.tableData}>
                <TableRow key={i} headers={this.props.headers} rowData={rowData}/>
              </For>
              </tbody>
            </table>
          </If>
          <If condition={this.props.showPagination}>
            <div>
              <ReactPaginate previousLabel={"<"}
                             nextLabel={">"}
                             breakLabel={<li className="break"><a href="">...</a></li>}
                             pageNum={this.props.pageCount || 1}
                             marginPagesDisplayed={2}
                             pageRangeDisplayed={5}
                             clickCallback={this.handlePageClick}
                             containerClassName={"pagination"}
                             subContainerClassName={"pages pager"}
                             activeClass={"active"}/>
            </div>
          </If>
        </div>
      </div>
    );
  }
});

module.exports = Table;
