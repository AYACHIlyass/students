import {Button, Card, CardActions, CardContent, CardMedia, Grid, Typography} from "@mui/material";
import { FC } from "react";
import { Student as StudentModel } from "../../../model/Student";
import image from "../../../assets/profile.jpg"
import classes  from "./StudentListItem.module.css";

const StudentListItem: FC<StudentModel> = (student) => {
  return (
    <Grid item xs={6} sm={4} md={3} style={{height:'100%'}} >
        <Card>
            <CardMedia
                component="img"
                height="250"
                image={image}
                alt={student.id+" image"}
            />
            <CardContent className={classes.cardContent}>
                <Typography gutterBottom variant="h5" component="div">
                    {student.firstName} {student.lastName}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {student.description}
                </Typography>
            </CardContent>
            <CardActions>
                <Button>More details</Button>
            </CardActions>
        </Card>
    </Grid>
  );
};

export default StudentListItem;
