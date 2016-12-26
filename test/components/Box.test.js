import React from 'react'
import ReactDOM from 'react-dom'
import { shallow } from 'enzyme' // shallow=>shallow, full=>mount, static=>render
import { expect } from 'chai' // assert or expect

import Box from '../../src/js/components/Box'


describe('(Component) Box', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Box />);
  });


  it('renders without crashing', () => {
    expect(wrapper).to.have.length(1);
  });

  it('should render children when passed in', () => {
    const wrapperTweaked = shallow(
      <Box>
        <div className="test" />
      </Box>
    );
    expect(wrapperTweaked.contains(<div className="test" />)).to.be.true;
  });

});
