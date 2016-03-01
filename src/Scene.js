import React, { Component, PropTypes } from 'react';

let sceneIndex = 0;

class Scene extends Component {
  static propTypes = {
    name: PropTypes.string,
    children: PropTypes.node,
    director: PropTypes.object,
  };

  static defaultProps = {
    name: `scene${sceneIndex++}`,
  };

  render() {
    return React.createElement(this.props.children, this.props);
  }
}

export default Scene;
