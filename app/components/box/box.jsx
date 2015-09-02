var React = require('react');
var {FontIcon, Paper, IconButton} = require('material-ui');

var Box = React.createClass({
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

    var boxStyle = {
      padding: this.props.contentPadding || 24,
      paddingBottom: this.props.contentPadding || 24
    };

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

module.exports = Box;