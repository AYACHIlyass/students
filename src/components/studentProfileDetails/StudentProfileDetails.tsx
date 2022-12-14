import {FC} from "react";
import {useParams} from "react-router-dom";
import {Box, Container, Typography} from "@mui/material";
import image from "../../assets/profile.jpg"
import classes from "./StudentProfileDetails.module.css";
import {useFetchStudentById} from "./hooks/useFetchStudentById";
import {useManageSpinnerState} from "../../hooks/useManageSpinnerState";

const StudentProfileDetails: FC = () => {
    const {studentId} = useParams();
    const {isLoading, isError, error, data: student, isSuccess} = useFetchStudentById(studentId!)
    useManageSpinnerState(isLoading, isSuccess);
    if (isError) {
        return <div>{(error as Error).message}</div>
    }
    return <Container maxWidth={false} className={classes.customContainer}>
        <Box className={classes.boxContainer}>
            <Box component="img" src={image}/>
            <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: "center"}}>
                <Typography gutterBottom variant="h5" component="div">
                    First name: {student?.firstName}
                </Typography>
                <Typography gutterBottom variant="h5" component="div">
                    Last name: {student?.lastName}
                </Typography>
                <Typography gutterBottom variant="h5" component="div">
                    Age: {student?.age}
                </Typography>
                <Typography gutterBottom variant="h5" component="div">
                    Description: {student?.description}
                </Typography>
            </Box>
        </Box>
    </Container>
};
export default StudentProfileDetails;