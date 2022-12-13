import {Container, Grid, Stack} from "@mui/material";
import {FC} from "react";
import {useQuery} from "react-query";
import {fetchStudents} from "../../service/StudentService";
import StudentListItem from "./studentListItem/StudentListItem";
import classes from "./StudentsList.module.css";

const StudentsList: FC = () => {
    const {
        isLoading,
        error,
        isError,
        data: students,
    } = useQuery(process.env.REACT_APP_GET_STUDENTS_REQUEST_ID!, fetchStudents);
    if (isLoading) {
        return <h1>Loading</h1>;
    } else if (isError) {
        return <h1>{(error as Error).message}</h1>;
    }
    return (
        <Container maxWidth={false} className={classes.customContainer} >
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
