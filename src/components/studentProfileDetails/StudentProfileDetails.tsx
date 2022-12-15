import {FC} from "react";
import {useParams} from "react-router-dom";
import {useQuery} from "react-query";
import {fetchStudentById} from "../../service/StudentService";
import {Box, Container, Typography} from "@mui/material";
import image from "../../assets/profile.jpg"
import classes from "./StudentProfileDetails.module.css";

const StudentProfileDetails: FC = () => {
    const {studentId} = useParams();
    const {isLoading, isError, error, data: student} = useQuery(
        process.env.REACT_APP_BASE_URL!,
        () => fetchStudentById(studentId!)
    );
    if (isLoading) {
        return <h1>Loading</h1>;
    } else if (isError) {
        return <h1>{(error as Error).message}</h1>;
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