require('./box-title.styl');
import React from 'react';
import IconButton from 'material-ui/lib/icon-button';
import Back from 'material-ui/lib/svg-icons/hardware/keyboard-backspace';

class BoxTitle extends React.Component {
  render() {
    return (
      <div className="box-title">
        <IconButton
          iconStyle={{ fill: '#fff' }}
          onClick={this.props.onGoBack || void(0)}
          touch
        >
          <Back/>
        </IconButton>
        <div className="title-text">
          {this.props.title}
        </div>
        <If condition={this.props.actions}>
          <div className="title-actions">
            {this.props.actions}
          </div>
        </If>
      </div>
    );
  }
}

export default BoxTitle
