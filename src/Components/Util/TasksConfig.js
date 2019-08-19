const filterOptions = 
[
    {
        header: 'Name',
        body: [
            '',
            'Review New Claim',
            'Review New Invoice',
            'Diary Review',
            'Loss Adjustor Report Received'
        ]
    },

    {
        header: 'Type',
        body: [
            '',
            'Claim',
            'Specialisation'
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
    {
        header: 'Due Date',
        body: [
            '',
            'Next 7 Days',
            'Next 14 Days',
            'Next Month',
            'Custom'
        ]
    },
]

const tableOptions = [
    'Name', 'Spec/Claim No', 'Type', 'Assigned To', 'Priority', 'Due Date'
]

module.exports = {
    filterOptions:filterOptions,
    tableOptions:tableOptions
}