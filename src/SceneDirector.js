import React, { Component, PropTypes } from 'react';

class SceneDirector extends Component {
  static propTypes = {
    name: PropTypes.string,
    children: PropTypes.node,
  };

  render() {
    return (
      <div className={`scene scene-${this.props.name}`}>
        {this.props.children}
      </div>
    );
  }
}

export default SceneDirector;
