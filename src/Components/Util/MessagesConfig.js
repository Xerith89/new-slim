const messagesFilterOptions = 
[
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
        header: 'Status',
        body: [
            '',
            'Read',
            'Unread'
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
    'From', 'Subject', 'Status', 'Priority', 'Sent'
]

module.exports = {
    messagesFilterOptions:messagesFilterOptions,
    messagesTableOptions: messagesTableOptions
}