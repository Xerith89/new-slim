import React from 'react';
import {render, cleanup} from '@testing-library/react';
import FilterBar from './../Components/Core/FilterBar';
import {shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

afterEach(cleanup);

const  taskList = [
    {
        id: 1,
        taskName: 'Review New Claim',
        claimSpecNo: '5500001',
        type: 'Claim', 
        assigned: 'Alex Coupe',
        priority: 'Normal',
        dueDate: '01-09-2019'
    },
    {
        id: 2,
        name: 'Review New Invoice',
        claimSpecNo: '5500000',
        type: 'Claim', 
        assigned: 'Alex Coupe',
        priority: 'Normal',
        dueDate: '01-09-2019'
    },
    {
        id: 3,
        name: 'Diary Review',
        claimSpecNo: '5500244',
        type: 'Claim', 
        assigned: 'Donald Duck',
        priority: 'Urgent',
        dueDate: '29-09-2019'
    },
    {
        id: 4,
        name: 'Loss Adjustor Report Received',
        claimSpecNo: '5500044',
        type: 'Claim', 
        assigned: 'Peter Parker',
        priority: 'Urgent',
        dueDate: '05-09-2019'
    },
]

test('TableHeader Renders To The Dom Without Spinner', () => {
    const {getByTestId} = render(<FilterBar taskList={taskList} fetchingTasks={false}/>);
    expect(getByTestId('filterBar')).toMatchSnapshot();
});

test('Sorting Function Fires On Task Name Click', () => {
    const spy = jest.fn();
    let wrapper = shallow(<TableHeader taskList={taskList} fetchingTasks={false}/>);
    wrapper.instance().handleClick = spy;
    wrapper.instance().doSort = spy;
    wrapper.instance().forceUpdate();
    wrapper.update();
    expect(wrapper.instance().handleClick).not.toHaveBeenCalled();
    wrapper.find('#id-0').simulate('click');
    expect(wrapper.instance().handleClick).toHaveBeenCalled();
    expect(wrapper.instance().handleClick).toHaveBeenCalledTimes(1);
    expect(wrapper.instance().doSort).toHaveBeenCalled();
    wrapper.unmount();
});

test('Sorting Function Fires On Spec/Claim No Click', () => {
    const spy = jest.fn();
    let wrapper = shallow(<TableHeader taskList={taskList} fetchingTasks={false}/>);
    wrapper.instance().handleClick = spy;
    wrapper.instance().doSort = spy;
    wrapper.instance().forceUpdate();
    wrapper.update();
    expect(wrapper.instance().handleClick).not.toHaveBeenCalled();
    wrapper.find('#id-1').simulate('click');
    expect(wrapper.instance().handleClick).toHaveBeenCalled();
    expect(wrapper.instance().handleClick).toHaveBeenCalledTimes(1);
    expect(wrapper.instance().doSort).toHaveBeenCalled();
    wrapper.unmount();
});

test('Sorting Function Fires On Type Click', () => {
    const spy = jest.fn();
    let wrapper = shallow(<TableHeader taskList={taskList} fetchingTasks={false}/>);
    wrapper.instance().handleClick = spy;
    wrapper.instance().doSort = spy;
    wrapper.instance().forceUpdate();
    wrapper.update();
    expect(wrapper.instance().handleClick).not.toHaveBeenCalled();
    wrapper.find('#id-2').simulate('click');
    expect(wrapper.instance().handleClick).toHaveBeenCalled();
    expect(wrapper.instance().handleClick).toHaveBeenCalledTimes(1);
    expect(wrapper.instance().doSort).toHaveBeenCalled();
    wrapper.unmount();
});

test('Sorting Function Fires On Assigned To Click', () => {
    const spy = jest.fn();
    let wrapper = shallow(<TableHeader taskList={taskList} fetchingTasks={false}/>);
    wrapper.instance().handleClick = spy;
    wrapper.instance().doSort = spy;
    wrapper.instance().forceUpdate();
    wrapper.update();
    expect(wrapper.instance().handleClick).not.toHaveBeenCalled();
    wrapper.find('#id-3').simulate('click');
    expect(wrapper.instance().handleClick).toHaveBeenCalled();
    expect(wrapper.instance().handleClick).toHaveBeenCalledTimes(1);
    expect(wrapper.instance().doSort).toHaveBeenCalled();
    wrapper.unmount();
});

test('Sorting Function Fires On Priority Click', () => {
    const spy = jest.fn();
    let wrapper = shallow(<TableHeader taskList={taskList} fetchingTasks={false}/>);
    wrapper.instance().handleClick = spy;
    wrapper.instance().doSort = spy;
    wrapper.instance().forceUpdate();
    wrapper.update();
    expect(wrapper.instance().handleClick).not.toHaveBeenCalled();
    wrapper.find('#id-4').simulate('click');
    expect(wrapper.instance().handleClick).toHaveBeenCalled();
    expect(wrapper.instance().handleClick).toHaveBeenCalledTimes(1);
    expect(wrapper.instance().doSort).toHaveBeenCalled();
    wrapper.unmount();
});

test('Sorting Function Fires On Due Date Click', () => {
    const spy = jest.fn();
    let wrapper = shallow(<TableHeader taskList={taskList} fetchingTasks={false}/>);
    wrapper.instance().handleClick = spy;
    wrapper.instance().doSort = spy;
    wrapper.instance().forceUpdate();
    wrapper.update();
    expect(wrapper.instance().handleClick).not.toHaveBeenCalled();
    wrapper.find('#id-4').simulate('click');
    expect(wrapper.instance().handleClick).toHaveBeenCalled();
    expect(wrapper.instance().handleClick).toHaveBeenCalledTimes(1);
    expect(wrapper.instance().doSort).toHaveBeenCalled();
    wrapper.unmount();
});