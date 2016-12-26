import React from 'react'
import ReactDOM from 'react-dom'
import { shallow } from 'enzyme' // shallow, mount, render
import { expect } from 'chai' // assert, expect
import sinon from 'sinon';

import MediaItemMid from '../../src/js/components/MediaItemMid'


describe('(Component) MediaItemMid', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<MediaItemMid />);
  });


  it('renders without crashing', () => {
    expect(wrapper).to.have.length(1);
  });

  it('has a button that simulates click events', () => {
    const onButtonClick = sinon.spy();
    const wrapperTweaked = shallow(
      <MediaItemMid buttonClickHandler={onButtonClick} />
    );
    wrapperTweaked.find('button').simulate('click');
    expect(onButtonClick.calledOnce).to.be.true;
  });

  it('has a button labelled "Pick this out?"', () => {
    const onButtonClick = sinon.spy();
    const wrapperTweaked = shallow(
      <MediaItemMid buttonClickHandler={onButtonClick} />
    );
    expect(wrapperTweaked.find('button').text()).to.equal('Pick this out?');
  });

  it('has a button labelled "Picked!" when isSelected is true', () => {
    const onButtonClick = sinon.spy();
    const wrapperTweaked = shallow(
      <MediaItemMid buttonClickHandler={onButtonClick} isSelected={true} />
    );
    expect(wrapperTweaked.find('button').text()).to.equal('Picked!');
  });

});
