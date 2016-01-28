import React, {Component} from 'react';

let sceneIndex = 0;

class Scene extends Component {
  static defaultProps = {
    name: `scene${sceneIndex++}`
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
