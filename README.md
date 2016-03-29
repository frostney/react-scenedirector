# react-scenedirector
Managing scenes/screens in React projects

[![Build Status](https://travis-ci.org/frostney/react-scenedirector.svg?branch=master)](https://travis-ci.org/frostney/react-scenedirector) [![Dependency Status](https://david-dm.org/frostney/react-scenedirector.svg)](https://david-dm.org/frostney/react-scenedirector) [![devDependency Status](https://david-dm.org/frostney/react-scenedirector/dev-status.svg)](https://david-dm.org/frostney/react-scenedirector#info=devDependencies) [![codecov.io](https://codecov.io/github/frostney/react-scenedirector/coverage.svg?branch=master)](https://codecov.io/github/frostney/react-scenedirector?branch=master)


Modeled after [https://github.com/freezedev/lyria](freezedev/lyria).
The API is in the "figuring things out" mode.

## Usage
```javascript
import React from 'react';
import ReactDOM from 'react-dom';

import SceneDirector from 'react-scenedirector';

const Scene1 = ({ switchToScene }) => {
  const onClick = () => switchToScene('Scene2');

  return (
    <div>
      <button onClick={onClick}>Switch to Scene 2</button>
    </div>
  );
};

const Scene2 = ({ switchToScene }) => {
  const onClick = () => switchToScene('Scene1');

  return (
    <div>
      <button onClick={onClick}>Switch to Scene 1</button>
    </div>
  );
}

const App = () => (
  <SceneDirector
    scenes={{ Scene1, Scene2 }}
    initialScene="Scene1" />
);

ReactDOM.render(App, document.getElementBy('content'));
```

## Props
### `scenes`
Requires an object in the from `{ [String]: ReactNode }`.

### `initialScene`
The name of the initial scene that will be shown

#### Will this be available for React Native?
Yes, at some point... maybe. Not right now. But if you a pull request for that, I'd be eternally grateful.
