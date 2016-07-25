import React from 'react';
import Paper from 'material-ui/Paper';
import { mergeStyles } from 'material-ui/utils/styles';

var Box = React.createClass({
  render: function () {
    var boxStyle = mergeStyles({padding: 24}, this.props.style);

    return (
      <Paper className={this.props.className} zDepth={1}>
        <div className="box">
          <If condition={this.props.title}>
            <div className="title">
              {this.props.title}
            </div>
          </If>

          <div style={boxStyle} className="box-body">
            {this.props.children}
          </div>

          <If style={this.props.footerStyle} condition={this.props.footer}>
            <div className="footer">
              {this.props.footer}
            </div>
          </If>
        </div>
      </Paper>
    );
  }
});

export default Box;
