const filterOptions = 
[
    {
        header: 'Tasks',
        body: [
            'My Tasks',
            'Team Tasks'
        ]
    },

    {
        header: 'Status',
        body: [
            'Reviewed',
            'Unreviewed'
        ]
    },

    {
        header: 'Priority',
        body: [
            'Normal',
            'Urgent'
        ]
    },
    {
        header: 'Date',
        body: [
            'Last Week',
            'Last Two Weeks',
            'Last Month',
            'Custom'
        ]
    },
]

const tableOptions = [
    'Task Name', 'Spec/Claim No', 'Type', 'Assigned To', 'Priority', 'Due Date'
]

module.exports = {
    filterOptions:filterOptions,
    tableOptions:tableOptions
}