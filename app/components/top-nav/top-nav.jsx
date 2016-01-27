import React from 'react';
import MenuButton from '../menu-button/menu-button';
import Avatar from 'material-ui/lib/avatar';
import IconButton from 'material-ui/lib/icon-button';

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
          <Avatar src={this.props.profileImageUrl}/>
        </IconButton>
        <div className="chat">
          <IconButton style={style}
                      onClick={this.props.onChat}
                      iconStyle={iconStyle}
                      iconClassName="icon icon-comment">
          </IconButton>
        </div>
        <div className="notifications">
          <IconButton style={style}
                      onClick={this.props.onNotifcationsClick}
                      iconStyle={iconStyle}
                      iconClassName="icon icon-notifications">
          </IconButton>
        </div>
        <If condition={this.props.controls}>
          <div className="controls">
            {this.props.controls}
          </div>
        </If>
      </nav>
    );
  }
});

export default TopNav;
