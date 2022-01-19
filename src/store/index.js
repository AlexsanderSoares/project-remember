import {createStore} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

const persistConfig = {
    key: 'rootPassManager',
    storage : AsyncStorage,
}

const INITIAL_STATE = {
    data: [],
}

function passwords(state = INITIAL_STATE, action){
    switch(action.type){

        case 'ADD_PASSWORD':
            return {...state, data: [...state.data, action.password]};

        case 'UPDATE_PASSWORD':
            return {...state, data: state.data.map(password => {
                return password.id === action.id ? action.password : password
            })};

        case 'REMOVE_PASSWORD':
            return {...state, data: state.data.filter(password => {
                return password.id !== action.id;
            })};

        case 'RESTORE_BACKUP':
            return {...state, data: action.data};

        default:
            return state;
    }
}


const persistedReducer = persistReducer(persistConfig, passwords);

const store = createStore(persistedReducer);
const persistor = persistStore(store);

export {store, persistor};