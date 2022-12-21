import {useSelector} from "react-redux";
import {RootState} from "../../../store";
import {Box} from "@mui/material";
import {Spinner} from "../spinner/Spinner";
import classes from "./FullPageSpinner.module.css";

export const FullPageSpinner = () => {
    const isLoading: boolean = useSelector((state: RootState) => state.applicationState.isLoading);
    const activeClasses = `${classes.overLay}${!isLoading ? ` ${classes.hide}` : ""} `;
    return (
        <Box className={activeClasses}>
            <Box component="div" className={classes.spinnerContainer} >
                <Spinner/>
            </Box>
        </Box>
    );
};