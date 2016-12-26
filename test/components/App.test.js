import React from 'react'
import ReactDOM from 'react-dom'
import { shallow } from 'enzyme' // shallow=>shallow, full=>mount, static=>render
import { expect } from 'chai' // assert or expect

import App from '../../src/js/components/App'
import PageFooter from '../../src/js/components/PageFooter'
import ModalCommon from '../../src/js/containers/ModalCommon'

describe('(Component) App', () => {

  let wrapper;

  beforeEach(() => {
    // wrapper = document.createElement('div');
    wrapper = shallow(<App />);
  });


  it('renders without crashing', () => {
    expect(wrapper).to.have.length(1);
  });

  it('should render a <PageFooter />', () => {
    expect(wrapper.find(PageFooter)).to.have.length(1);
  });

  it('should render a <ModalCommon />', () => {
    expect(wrapper.find(ModalCommon)).to.have.length(1);
  });
});
