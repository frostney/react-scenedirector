import React, { Component, PropTypes } from 'react';

class SceneDirector extends Component {
  static propTypes = {
    scenes: PropTypes.object,
    initialScene: PropTypes.string,
    onSwitchScene: PropTypes.func,
  };

  static childContextTypes = {
    switchToScene: React.PropTypes.func,
  };

  static defaultProps = {
    scenes: {},
  };

  constructor(props) {
    super(props);

    this.state = {
      currentScene: this.getInitialScene(),
    };
  }

  getChildContext() {
    return { switchToScene: this.switchToScene };
  }

  componentDidMount() {
    if (this.areScenesValid()) {
      if (this.props.onSwitchScene) {
        this.props.onSwitchScene(this.getInitialScene());
      }
    }
  }

  getInitialScene = () => {
    if (this.props.initialScene) {
      return this.props.initialScene;
    }

    return Object.keys(this.props.scenes)[0];
  };

  areScenesValid = () => {
    if (!this.props.scenes || Object.keys(this.props.scenes).length === 0) {
      return false;
    }

    if (!this.state.currentScene) {
      return false;
    }

    return true;
  };

  switchToScene = scene => {
    this.setState({
      currentScene: scene,
    }, () => {
      if (this.props.onSwitchScene) {
        this.props.onSwitchScene(scene);
      }
    });
  };

  render() {
    if (!this.areScenesValid()) {
      return null;
    }

    const scene = this.props.scenes[this.state.currentScene];

    if (!scene) {
      return null;
    }

    return React.createElement(scene, { switchToScene: this.switchToScene });
  }
}

export default SceneDirector;
