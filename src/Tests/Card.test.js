import React from 'react'
import {shallow, configure,} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {Card,CardTitle, CardBody} from '../Components/Core'

configure({adapter: new Adapter()});

describe('Card Component Behaves As Expected', () => {
    test('Card should render to DOM', () => {
        let wrapper = shallow(<Card />);
        expect(wrapper.html).toMatchSnapshot();
    });

    test('Card should render to DOM with CardTitle nested', () => {
        let wrapper = shallow(<Card> <CardTitle title="My Card" /> </Card>);
        expect(wrapper.html).toMatchSnapshot();
    });

    test('Card should render to DOM with full nesting', () => {
        let wrapper = shallow(<Card> <CardTitle title="My Card" /><CardBody /> </Card>);
        expect(wrapper.html).toMatchSnapshot();
    });

});
