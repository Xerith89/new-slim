import React from 'react';

import Pagination from './../Components/Core/Pagination';
import {shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

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


test('Clicking Next Page Calls Handle Change', () => {
    const spy = jest.fn();
    let wrapper = shallow(<Pagination data={taskList} totalRecords={taskList.length} recordsPerPage={3} />);
    wrapper.instance().handleChange = spy;
    wrapper.instance().forceUpdate();
    expect(wrapper.instance().handleChange).not.toHaveBeenCalled();
    wrapper.find('#nextPage').simulate('click');
    expect(wrapper.instance().handleChange).toHaveBeenCalled();
    expect(wrapper.instance().handleChange).toHaveBeenCalledTimes(1);
    wrapper.unmount();
});