const messagesFilterOptions = 
[
    
    {
        header: 'Status',
        body: [
            '',
            'Read',
            'Unread'
        ]
    },
    {
        header: 'Sender',
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

const messagesTableOptions = [
    'From', 'Subject', 'Status', 'Priority', 'Sent Date'
]

module.exports = {
    messagesFilterOptions:messagesFilterOptions,
    messagesTableOptions: messagesTableOptions
}