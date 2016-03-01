import React, { Component, PropTypes } from 'react';

import Scene from './Scene';

class SceneDirector extends Component {
  static propTypes = {
    name: PropTypes.string,
    children: PropTypes.node,
    initialScene: PropTypes.string,
  };

  constructor() {
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
    React.Children.forEach(this.props.children, child => {
      if (child.type === Scene) {

      }
    });

    if (!this.state.currentScene) {

    }

    return this.state.mountedScene;
  }
}

export default SceneDirector;
