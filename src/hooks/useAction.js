import { useDispatch } from "react-redux";
import actionCreator from "../pages/store/actionCreator/actionCreator";
import { useMemo } from "react";

const useAction = () => {
    const dispatch = useDispatch();

    return useMemo(() => {
        const actionBoundCreators = {};
        Object.keys(actionCreator).forEach((key) => {
            actionBoundCreators[key] = (...args) => dispatch(actionCreator[key](...args));
        });
        return actionBoundCreators;
    }, [dispatch]);
};

export default useAction;
