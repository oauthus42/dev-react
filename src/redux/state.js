let state = {
    profilePages: {
        posts: [
            { id: '1', message: 'Hi, how are you?', likesCount: '12' },
            { id: '2', message: "It's my first post", likesCount: '10' },
            { id: '3', message: 'Marina Z', likesCount: 'лучше всех' },
        ]
    },

    dialogsPages: {
        dialogs: [
            { id: '1', name: 'Polina' },
            { id: '2', name: 'Sasha' },
            { id: '3', name: 'Andrey' }
        ],

        messages: [
            { id: '1', message: 'Hi' },
            { id: '2', message: 'How is you?' },
            { id: '3', message: 'Yo!' }
        ]
    }
}


export default state;