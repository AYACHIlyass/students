import {Container, Grid} from "@mui/material";
import {FC} from "react";
import StudentListItem from "./studentListItem/StudentListItem";
import classes from "./StudentsList.module.css";
import {useFetchStudents} from "./hooks/useFetchStudents";
import {useManageSpinnerState} from "../../hooks/useManageSpinnerState";

const StudentsList: FC = () => {
    const {
        isLoading,
        error,
        isError,
        data: students,
        isSuccess
    } = useFetchStudents()
    useManageSpinnerState(isLoading, isSuccess);
    if (isError) {
        return <h1>{(error as Error).message}</h1>;
    }
    return (
        <Container maxWidth={false} className={classes.customContainer}>
            <Grid
                container
                spacing={2}
                direction="row"
                justifyContent="center"
                alignItems="center"
            >
                {students?.map((student) => {
                    return <StudentListItem key={student.id} {...student}></StudentListItem>;
                })}
            </Grid>
        </Container>
    );
};

export default StudentsList;
