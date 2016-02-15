import React from 'react';
import FontIcon from 'material-ui/lib/font-icon';
import Paper from 'material-ui/lib/paper';
import IconButton from 'material-ui/lib/icon-button';
import StylePropable from 'material-ui/lib/mixins/style-propable';

var Box = React.createClass({

  mixins: [StylePropable],

  render: function () {
    var boxMenu = '';
    if (this.props.showBoxMenu) {
      var iconStyle = {
        color: '#fff',
        fontSize: 20
      };

      var style = {
        padding: 11,
        height: 40,
        width: 40
      };

      boxMenu = <div className="tools">
        <IconButton
          iconStyle={iconStyle}
          style={style}
          onClick={this.props.onBoxMenuClick}
          iconClassName="icon-settings"/>
      </div>;
    }

    var boxControls = '';
    if(this.props.boxControls){
      boxControls = <div className="tools">
        {this.props.boxControls}
      </div>
    }

    // var boxStyle = {
    //   padding: this.props.contentPadding || 24,
    //   paddingBottom: this.props.contentPadding || 24
    //   paddingBottom: this.props.paddingTop || 24
    // };

    var boxStyle = this.mergeStyles({padding: 24}, this.props.style);

    return (
      <Paper className={this.props.className} zDepth={1}>
        <div className="box">
          <If condition={this.props.title}>
            <div className="title">
              <div className="title-text">
                <If condition={this.props.titleIcon}>
                  <FontIcon className={"icon " + this.props.titleIcon}/>
                </If>
                {this.props.title}
              </div>
              {boxMenu}
              {boxControls}
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