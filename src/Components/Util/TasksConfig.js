const tasksFilterOptions = 
[
    
    {
        header: 'Type',
        body: [
            '',
            'Claim',
            'Specification'
        ]
    },
    {
        header: 'Assigned',
        body: [
            '',
            'Alex Coupe',
            'Donald Duck',
            'Peter Parker'
        ]
    },

    {
        header: 'Priority',
        body: [
            '',
            'Normal',
            'Urgent'
        ]
    },
   
]

const tasksTableOptions = [
    'Name', 'Spec/Claim No', 'Type', 'Assigned', 'Priority', 'Due Date'
]

module.exports = {
    tasksFilterOptions:tasksFilterOptions,
    tasksTableOptions:tasksTableOptions
}