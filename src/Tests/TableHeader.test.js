import React from 'react';
import {render, cleanup, fireEvent} from '@testing-library/react';
import TableHeader from './../Components/Core/TableHeader';
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
        assignedTo: 'Alex Coupe',
        priority: 'Normal',
        dueDate: '01-09-2019'
    },
    {
        id: 2,
        taskName: 'Review New Invoice',
        claimSpecNo: '5500000',
        type: 'Claim', 
        assignedTo: 'Alex Coupe',
        priority: 'Normal',
        dueDate: '01-09-2019'
    },
    {
        id: 3,
        taskName: 'Diary Review',
        claimSpecNo: '5500244',
        type: 'Claim', 
        assignedTo: 'Donald Duck',
        priority: 'Urgent',
        dueDate: '29-09-2019'
    },
    {
        id: 4,
        taskName: 'Loss Adjustor Report Received',
        claimSpecNo: '5500044',
        type: 'Claim', 
        assignedTo: 'Peter Parker',
        priority: 'Urgent',
        dueDate: '05-09-2019'
    },
]


test('TableHeader Renders To The Dom Without Spinner', () => {
    const {getByTestId} = render(<TableHeader taskList={taskList} fetchingTasks={false}/>);
    expect(getByTestId('tableHeader')).toMatchSnapshot();
});

test('Sorting Function Fires On Click', () => {
    const spy = jest.fn();
    let wrapper = shallow(<TableHeader taskList={taskList} fetchingTasks={false}/>);
    wrapper.instance().handleClick = spy;
    wrapper.instance().forceUpdate();
    wrapper.update();
    expect(wrapper.instance().handleClick).not.toHaveBeenCalled();
    wrapper.find('#id-0').simulate('click');
    expect(wrapper.instance().handleClick).toHaveBeenCalled();
});








