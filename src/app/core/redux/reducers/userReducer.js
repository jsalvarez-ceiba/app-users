import { GET_USERS } from "../constants/action-types";


const getInitialState = () => ({
    users: [],
});

const userReducer = (state = getInitialState(), action) => {
    switch (action.type) {

        case GET_USERS:
            return { ...state, users: action.users }
        default:
            return state;
    }

}

export default userReducer;