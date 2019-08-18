import Sorting from '../../Components/Util/Sorting'


const objectsToSort = [
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

test('Sorts Ascending By Input Property', () => {
    let sorted = objectsToSort;
    Sorting.sortAscending(sorted, 'taskName');
    expect(sorted).toEqual([
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
            id: 1,
            taskName: 'Review New Claim',
            claimSpecNo: '5500001',
            type: 'Claim', 
            assignedTo: 'Alex Coupe',
            priority: 'Normal',
            dueDate: '01-09-2019'
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
        {
            id: 3,
            taskName: 'Diary Review',
            claimSpecNo: '5500244',
            type: 'Claim', 
            assignedTo: 'Donald Duck',
            priority: 'Urgent',
            dueDate: '29-09-2019'
        },
    ]);
});

test('Sort Descending By Input Property', () => {
    let sorted = objectsToSort;
    sorted.sort(Sorting.sortDescending(sorted, 'taskName'));
    expect(sorted).toEqual([      
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

test('Sort Ascending By Dates', () => {
    let sorted = objectsToSort;
    sorted.sort(Sorting.sortAscending(sorted, 'dueDate'));
    expect(sorted).toEqual([   
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

test('Sort Descending By Dates', () => {
    let sorted = objectsToSort;
    sorted.sort(Sorting.sortDescending(sorted, 'dueDate'));
    expect(sorted).toEqual([   
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
            id: 4,
            taskName: 'Loss Adjustor Report Received',
            claimSpecNo: '5500044',
            type: 'Claim', 
            assignedTo: 'Peter Parker',
            priority: 'Urgent',
            dueDate: '05-09-2019'
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
    ]);
});
