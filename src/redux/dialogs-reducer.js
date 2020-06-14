const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
    dialogs: [
        {id: 1, name: 'Soldier'},
        {id: 2, name: 'Nick'},
        {id: 3, name: 'Dawn'},
        {id: 4, name: 'Jasreen'},
        {id: 5, name: 'Smily'},
        {id: 6, name: 'Milad'}
    ],
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'Helloooo'},
        {id: 3, message: 'Somebody answer me!'},
        {id: 4, message: 'Yo'},
        {id: 5, message: 'Okay'},
        {id: 6, message: 'Bye'}
    ]
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let body = action.newMessageBody;
            return {
                ...state,
                messages: [...state.messages, {id: 6, message: body}]
            };
        default:
            return state;
    }
}

export const sendMessageCreator = (newMessageBody) => ({type: SEND_MESSAGE, newMessageBody})


export default dialogsReducer;