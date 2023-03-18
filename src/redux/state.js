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
            { id: '1', name: 'Polina', avatar: 'https://i.pinimg.com/75x75_RS/c5/0e/24/c50e24ba9836d8584fe7023489388bcb.jpg' },
            { id: '2', name: 'Sasha', avatar: 'https://p.kindpng.com/picc/s/736-7367385_cat-circle-cat-icon-png-transparent-png.png' },
            { id: '3', name: 'Andrey', avatar: 'https://cs8.pikabu.ru/avatars/2317/x2317513-1017058689.png' }
        ],

        messages: [
            { id: '1', message: 'Hi' },
            { id: '2', message: 'How is you?' },
            { id: '3', message: 'Yo!' }
        ]
    }
}

 export let addPost = (postMessage) => {
    debugger;
    let newPost = {
        id: 5,
        message: postMessage,
        likesCount: 0
    };
    
    state.profilePages.posts.push(newPost);
}

export default state;