/* eslint react/no-multi-comp:0 */
/* eslint react/jsx-no-bind:0 */

import test from 'ava';

import React, { Component, PropTypes } from 'react';
import SceneDirector from './SceneDirector';
import sinon from 'sinon';

import { render, mount } from 'enzyme';

test('is instantiable', t => {
  const wrapper = render(<SceneDirector />);

  t.ok(wrapper);
});

test('shows initial scene', t => {
  const scenes = {
    scene: () => (
      <div className="scene">
        <div>Scene</div>
      </div>
    ),
  };

  const wrapper = render(<SceneDirector scenes={scenes} initialScene="scene" />);

  const wrapperLength = wrapper.find('.scene').length;
  const wrapperText = wrapper.text();

  t.is(wrapperLength, 1);
  t.is(wrapperText, 'Scene');
});

test('does not allow invalid configurations', t => {
  const scenes = {
    scene: null,
  };

  const wrapper = render(<SceneDirector scenes={scenes} initialScene="scene2" />);

  t.ok(wrapper);
});

test('initial scene is implicit', t => {
  const scenes = {
    scene: () => (
      <div className="scene">
        <div>Scene</div>
      </div>
    ),
  };

  const wrapper = render(<SceneDirector scenes={scenes} />);

  const wrapperLength = wrapper.find('.scene').length;
  const wrapperText = wrapper.text();

  t.is(wrapperLength, 1);
  t.is(wrapperText, 'Scene');
});

test.cb('switch to different scene (props)', t => {
  class Scene2 extends Component {
    componentDidMount() {

    }

    render() {
      return <div>Scene 2</div>;
    }
  }

  class Scene1 extends Component {
    static propTypes = {
      switchToScene: PropTypes.func,
    };

    componentDidMount() {
      this.props.switchToScene('Scene2');
    }

    render() {
      return <div>Scene 1</div>;
    }
  }

  const scenes = {
    Scene1,
    Scene2,
  };

  sinon.spy(Scene1.prototype, 'componentDidMount');
  sinon.spy(Scene2.prototype, 'componentDidMount');

  mount(<SceneDirector scenes={scenes} onSwitchScene={scene => {
    if (scene === 'Scene1') {
      t.is(Scene1.prototype.componentDidMount.calledOnce, true);
    }

    if (scene === 'Scene2') {
      t.is(Scene2.prototype.componentDidMount.calledOnce, true);

      t.end();
    }
  } }
  />);
});

test.cb('switch to invalid scene (props)', t => {
  class Scene1 extends Component {
    static propTypes = {
      switchToScene: PropTypes.func,
    };

    componentDidMount() {
      this.props.switchToScene('Scene3');
    }

    render() {
      return <div>Scene 1</div>;
    }
  }

  const scenes = {
    Scene1,
  };

  sinon.spy(Scene1.prototype, 'componentDidMount');

  mount(<SceneDirector scenes={scenes} onSwitchScene={scene => {
    if (scene === 'Scene1') {
      t.is(Scene1.prototype.componentDidMount.calledOnce, true);
    }

    if (scene === 'Scene3') {
      t.end();
    }
  } }
  />);
});

test.cb('switch to different scene (context)', t => {
  class Scene2 extends Component {
    componentDidMount() {

    }

    render() {
      return <div>Scene 2</div>;
    }
  }

  class Scene1 extends Component {
    static contextTypes = {
      switchToScene: PropTypes.func,
    };

    componentDidMount() {
      this.context.switchToScene('Scene2');
    }

    render() {
      return <div>Scene 1</div>;
    }
  }

  const scenes = {
    Scene1,
    Scene2,
  };

  sinon.spy(Scene1.prototype, 'componentDidMount');
  sinon.spy(Scene2.prototype, 'componentDidMount');

  mount(<SceneDirector scenes={scenes} onSwitchScene={scene => {
    if (scene === 'Scene1') {
      t.is(Scene1.prototype.componentDidMount.calledOnce, true);
    }

    if (scene === 'Scene2') {
      t.is(Scene2.prototype.componentDidMount.calledOnce, true);

      t.end();
    }
  } }
  />);
});

test.cb('switch to invalid scene (context)', t => {
  class Scene1 extends Component {
    static contextTypes = {
      switchToScene: PropTypes.func,
    };

    componentDidMount() {
      this.context.switchToScene('Scene3');
    }

    render() {
      return <div>Scene 1</div>;
    }
  }

  const scenes = {
    Scene1,
  };

  sinon.spy(Scene1.prototype, 'componentDidMount');

  mount(<SceneDirector scenes={scenes} onSwitchScene={scene => {
    if (scene === 'Scene1') {
      t.is(Scene1.prototype.componentDidMount.calledOnce, true);
    }

    if (scene === 'Scene3') {
      t.end();
    }
  } }
  />);
});
