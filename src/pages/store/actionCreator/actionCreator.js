import * as authActions from "../reducers/authReducer/actions";
import * as userActions from "../reducers/userReduser/actions";

const actionCreator = {
    ...authActions,
    ...userActions
};

export default actionCreator;