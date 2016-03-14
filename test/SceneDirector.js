import React from 'react';
import { expect } from 'chai';
import SceneDirector from 'react-scenedirector';

import { render } from 'enzyme';

describe('<SceneDirector />', () => {
  it('is instantiable', () => {
    const wrapper = render(<SceneDirector />);
    expect(wrapper).to.not.equal(null);
    expect(() => {
      /* eslint new-cap: 0 */
      SceneDirector();
    }).to.throw(TypeError);
  });
});
