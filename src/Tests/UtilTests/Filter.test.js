import {filterBy} from '../../Components/Util/Filter'
const objectsToFilter = [
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

test('Filters Array To Return Only Selected Property', () => {
    objectsToFilter;
    let filtered = filterBy(objectsToFilter, 'assignedTo', 'Alex Coupe');
    expect(filtered).toEqual([
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
        
    ]);
});

