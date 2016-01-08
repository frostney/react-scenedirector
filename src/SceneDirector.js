import React, {Component} from 'react';

class SceneDirector extends Component {

  render() {
    return (
      <div className={`scene scene-${this.props.name}`}>
        {this.props.children}
      </div>
    );
  }
}

export default SceneDirector;
