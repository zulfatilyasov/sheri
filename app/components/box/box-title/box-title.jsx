import React from 'react';
import IconButton from 'material-ui/lib/icon-button';
import Back from 'material-ui/lib/svg-icons/hardware/keyboard-arrow-left';

class BoxTitle extends React.Component {
  render() {
    return (
      <div className="box-title">
        <If condition={!this.props.hideBackButton}>
          <IconButton
            iconStyle={{ fill: '#fff' }}
            onClick={this.props.onGoBack || void(0)}
            touch
          >
            <Back/>
          </IconButton>
        </If>
        <div className={`${this.props.hideBackButton ? 'pad' : ''} title-text`}>
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
