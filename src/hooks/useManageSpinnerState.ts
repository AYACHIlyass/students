import {useEffect} from "react";
import {applicationStatusActions} from "../store/slice/ApplicationStatusSlice";
import {useDispatch} from "react-redux";
import {AppDispatch} from "../store";

export const useManageSpinnerState = (isLoading: boolean, isSuccess: boolean) => {
    const dispatcher = useDispatch<AppDispatch>();
    return useEffect(() => {
        if (isLoading) {
            dispatcher(applicationStatusActions.startSpinner())
        } else if (isSuccess) {
            // the timeout just to display the spinner
            setTimeout(() => dispatcher(applicationStatusActions.stopSpinner()), 1000)
        }
    }, [isLoading, isSuccess]);
}