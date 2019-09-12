import {Spinner} from '../Components/Core'
import React from 'react'
import {shallow, configure,} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

test('Spinner component renders to the DOM', () => {
    let wrapper = shallow(<Spinner />);
    expect(wrapper.html()).toMatchSnapshot();
});