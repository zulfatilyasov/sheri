'use strict';

var React = require('react');
var TableRow = require('./table-row');
var classnames = require('classnames');
var ReactPaginate = require('react-paginate');

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
    var headers, k, v;
    headers = this.state.headers;
    for (k in headers) {
      v = headers[k];
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
        React.createElement(
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
                    this.state.headers[k].name,
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
                  )
                ) : '';
              }, this)
            )
          ),
          this.props.loading ? React.createElement(
            'tbody',
            { className: 'loading-message' },
            React.createElement(
              'tr',
              null,
              React.createElement(
                'td',
                null,
                React.createElement(
                  'div',
                  { className: 'loading-text' },
                  'Loading...'
                )
              )
            )
          ) : React.createElement(
            'tbody',
            null,
            this.props.tableData.map(function (rowData, i) {
              return React.createElement(TableRow, { key: i, headers: this.props.headers, rowData: rowData });
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