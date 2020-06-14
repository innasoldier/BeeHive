import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you?', likesCount: 12},
                {id: 2, message: 'It\'s my first post', likesCount: 11},
                {id: 3, message: 'Have a great day everyone', likesCount: 11},
                {id: 4, message: 'Follow me', likesCount: 11}
            ],
            newPostText: 'Welcome to BeHive'
        },
        dialogsPage: {
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
                {id: 5, message: 'Okay'}
            ],
            newMessageBody: ""
        },
        sidebar: {}
    },
    _callSubscriber() {
        console.log('State changed');
    },

    getState() {
        debugger;
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;  // observer
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);
    }
}


export default store;
window.store = store;
// store - OOP