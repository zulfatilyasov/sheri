import React from 'react'
import Box from '../box';
import BoxTitle from '../box-title/box-title';

class TitledBox extends React.Component {
  static contextTypes = {
    router: React.PropTypes.object.isRequired,
  };

  constructor(props, context) {
    super(props, context);
  }

  handleGoBack = () => this.context.router && this.context.router.goBack();

  render() {
    return (
      <Box
        className={this.props.className}
        title={<BoxTitle
            title={this.props.title}
            style={this.props.titleStyle}
            hideBackButton={this.props.hideBackButton}
            actions={this.props.actions}
            onGoBack={this.props.onGoBack || this.handleGoBack}
          />}
        style={this.props.style}
      >
        {this.props.children}
      </Box>
    );
  }
}

export default TitledBox;
