import Sorting from '../../Components/Util/Sorting'

test('SortByString sorts ascending', () => {
    let objectsToSort = [
        {
            id: 1,
            taskName: 'Review New Claim',
            claimSpecNo: 5500001,
            type: 'Claim', 
            assignedTo: 'Alex Coupe',
            priority: 'Normal',
            dueDate: '01-09-2019'
        },
        {
            id: 2,
            taskName: 'Review New Invoice',
            claimSpecNo: 5500000,
            type: 'Claim', 
            assignedTo: 'Alex Coupe',
            priority: 'Normal',
            dueDate: '01-09-2019'
        },
       
    ]
    let sorted = objectsToSort;
    Sorting.sortAscending(sorted, 'taskName');
    expect(sorted).toEqual([
        {
            id: 2,
            taskName: 'Review New Invoice',
            claimSpecNo: 5500000,
            type: 'Claim', 
            assignedTo: 'Alex Coupe',
            priority: 'Normal',
            dueDate: '01-09-2019'
        },
        {
            id: 1,
            taskName: 'Review New Claim',
            claimSpecNo: 5500001,
            type: 'Claim', 
            assignedTo: 'Alex Coupe',
            priority: 'Normal',
            dueDate: '01-09-2019'
        },
    ]);
});

test('SortByString sorts descending', () => {
    let objectsToSort = [
       
        {
            id: 2,
            taskName: 'Review New Invoice',
            claimSpecNo: 5500000,
            type: 'Claim', 
            assignedTo: 'Alex Coupe',
            priority: 'Normal',
            dueDate: '01-09-2019'
        },
        {
            id: 1,
            taskName: 'Review New Claim',
            claimSpecNo: 5500001,
            type: 'Claim', 
            assignedTo: 'Alex Coupe',
            priority: 'Normal',
            dueDate: '01-09-2019'
        },
    ];
    let sorted = objectsToSort;
    sorted.sort(Sorting.sortDescending(sorted, 'taskName'));
    expect(sorted).toEqual([      
        {
            id: 1,
            taskName: 'Review New Claim',
            claimSpecNo: 5500001,
            type: 'Claim', 
            assignedTo: 'Alex Coupe',
            priority: 'Normal',
            dueDate: '01-09-2019'
        }, 
        {
            id: 2,
            taskName: 'Review New Invoice',
            claimSpecNo: 5500000,
            type: 'Claim', 
            assignedTo: 'Alex Coupe',
            priority: 'Normal',
            dueDate: '01-09-2019'
        },
    ]);
});
