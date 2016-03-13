import React, { Component, PropTypes } from 'react';

class SceneDirector extends Component {
  static propTypes = {
    name: PropTypes.string,
    scenes: PropTypes.object,
    initialScene: PropTypes.string,
  };

  constructor(props) {
    super(props);

    this.state = {
      currentScene: this.props.initialScene,
    };
  }

  switchToScene = scene => {
    this.setState({
      currentScene: scene,
    });
  };

  render() {
    const scene = this.state.scenes[this.state.currentScene];

    if (!scene) {
      return null;
    }

    React.createElement(scene, { switchToScene: this.switchToScene });
  }
}

export default SceneDirector;
