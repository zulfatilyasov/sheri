'use strict';

var React = require('react');
var TableRow = require('./table-row');
var classnames = require('classnames');

var Table = React.createClass({
  displayName: 'Table',

  getInitialState: function getInitialState() {
    this.skip = 0;
    return {
      headers: this.props.headers
    };
  },
  handlePageClick: function handlePageClick(page) {
    this.skip = page.selected * this.props.limit;
    return this.loadData();
  },
  loadData: function loadData() {
    return this.props.onLoadData(this.skip, this.column, this.direction);
  },
  handleHeaderClick: function handleHeaderClick(header) {
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
  render: function render() {
    var className;
    className = classnames({
      'table-responsive-vertical': this.props.responsive
    });

    return React.createElement(
      'div',
      null,
      React.createElement(
        'div',
        { className: 'up-table ' + className },
        this.props.loading ? React.createElement(
          'div',
          { className: 'loading-message' },
          React.createElement(
            'div',
            { className: 'loading-text' },
            'Loading...'
          )
        ) : React.createElement(
          'table',
          { id: 'table', className: 'sortable table table-hover table-mc-light-blue' },
          React.createElement(
            'thead',
            null,
            React.createElement(
              'tr',
              null,
              Object.keys(this.state.headers).map(function (k) {
                return this.state.headers[k].show ? React.createElement(
                  'th',
                  { key: k, onClick: this.handleHeaderClick.bind(this, k) },
                  React.createElement(
                    'div',
                    { className: 'header-name' },
                    React.createElement(
                      'div',
                      { className: 'header-text' },
                      this.state.headers[k].name
                    ),
                    this.state.headers[k].disableSort !== true ? React.createElement(
                      'div',
                      { className: 'icon' },
                      this.state.headers[k].sort === true ? React.createElement(
                        'div',
                        { className: 'asc header-icon' },
                        React.createElement('i', { className: 'icon-sort' })
                      ) : '',
                      this.state.headers[k].sort === false ? React.createElement(
                        'div',
                        { className: 'desc header-icon' },
                        React.createElement('i', { className: 'icon-sort' })
                      ) : ''
                    ) : ''
                  )
                ) : '';
              }, this)
            )
          ),
          React.createElement(
            'tbody',
            null,
            this.props.tableData.map(function (rowData, i) {
              return React.createElement(TableRow, { key: i,
                onRowClick: this.props.onRowClick,
                headers: this.props.headers,
                rowData: rowData });
            }, this)
          )
        ),
        this.props.showPagination ? React.createElement(
          'div',
          null,
          React.createElement(ReactPaginate, { previousLabel: "<",
            nextLabel: ">",
            breakLabel: React.createElement(
              'li',
              { className: 'break' },
              React.createElement(
                'a',
                { href: '' },
                '...'
              )
            ),
            pageNum: this.props.pageCount || 1,
            marginPagesDisplayed: 2,
            pageRangeDisplayed: 5,
            clickCallback: this.handlePageClick,
            containerClassName: "pagination",
            subContainerClassName: "pages pager",
            activeClass: "active" })
        ) : ''
      )
    );
  }
});

module.exports = Table;