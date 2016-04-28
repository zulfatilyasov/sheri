import React from 'react'
import Box from '../box.jsx'
import BoxTitle from '../box-title/box-title.jsx';

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
        title={<BoxTitle
            title={this.props.title}
            style={this.props.titleStyle}
            onGoBack={this.props.onGoBack || this.handleGoBack}
          />}
        style={this.props.style}
      />
    );
  }
}

export default TitledBox;
