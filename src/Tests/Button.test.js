import {Button} from '../Components/Core'
import React from 'react'
import {shallow, configure,} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

describe('Button Component Behaves As Expected', () => {

    test('Button component renders to the DOM with correct text', () => {
        let wrapper = shallow(<Button><h1>My Button</h1></Button>);
        expect(wrapper.html()).toMatchSnapshot();
    });

    test('Clicking button triggers onClick function', () => {
        const spy = jest.fn();
        let wrapper = shallow(<Button text="MyButton" name="test" onClick={spy}/>);
        wrapper.find({name: 'test'}).simulate('click');
        expect(spy).toHaveBeenCalled();
    });
    
})

