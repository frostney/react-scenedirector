import React, { Component, PropTypes } from 'react';

class SceneDirector extends Component {
  static propTypes = {
    scenes: PropTypes.object,
    initialScene: PropTypes.string,
  };

  static defaultProps = {
    scenes: {},
  }

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
    if (!this.state.scenes || Object.keys(this.state.scenes) === 0) {
      return null;
    }

    if (!this.state.currentScene) {
      return this.state.scenes[Object.keys(this.state.scenes)[0]];
    }

    const scene = this.state.scenes[this.state.currentScene];

    if (!scene) {
      return null;
    }

    React.createElement(scene, { switchToScene: this.switchToScene });
  }
}

export default SceneDirector;
