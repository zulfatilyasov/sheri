var React = require('react');
var MenuButton = require('../menu-button/menu-button');
var mui = require('material-ui'),
  Avatar = mui.Avatar,
  IconButton = mui.IconButton;

var TopNav = React.createClass({
  render: function () {
    this.userName = this.props.userFirstName + ' ' + this.props.userLastName;
    this.userAbbr = this.props.userFirstName.substr(0, 1) + '' + this.props.userLastName.substr(0, 1);

    var style = {
      padding: '13px'
    };

    var iconStyle = {
      iconHoverColor: '#212121',
      fontSize: '24px',
      color: '#bdbdbd'
    };

    var iconButtonStyle = {
      padding: 0
    };

    return (
      <nav className="fixed-nav-bar">
        <MenuButton onClick={this.props.onMenuIconClick}/>
        <If condition={this.props.logo}>
          {this.props.logo}
        </If>

        <div className="exit">
          <IconButton style={style}
                      onClick={this.props.onLock}
                      iconStyle={iconStyle}
                      iconClassName="icon icon-lock"
                      tooltip="Log out">
          </IconButton>
        </div>
        <IconButton style={iconButtonStyle}
                    onClick={this.props.onProfileClick}
                    className="avatar"
                    tooltip={this.userName}>
          <Avatar>{this.userAbbr}</Avatar>
        </IconButton>
        <If condition={this.props.controls}>
          <div className="controls">
            {this.props.controls}
          </div>
        </If>
      </nav>
    );
  }
});

module.exports = TopNav;
