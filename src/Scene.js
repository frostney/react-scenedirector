import React, { Component, PropTypes } from 'react';

let sceneIndex = 0;

class Scene extends Component {
  static propTypes = {
    name: PropTypes.string,
    children: PropTypes.node,
  }

  static defaultProps = {
    name: `scene${sceneIndex++}`,
    initialScene: '',
  };

  render() {
    return (
      <div className={`scene scene-${this.props.name}`}>
        {this.props.children}
      </div>
    );
  }
}

export default Scene;
