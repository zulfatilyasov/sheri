import React from 'react';
import Paper from 'material-ui/lib/paper';
import StylePropable from 'material-ui/lib/mixins/style-propable';

var Box = React.createClass({
  mixins: [StylePropable],

  render: function () {
    var boxStyle = this.mergeStyles({padding: 24}, this.props.style);

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
        </div>
      </Paper>
    );
  }
});

export default Box;
