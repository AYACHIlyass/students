import {createBrowserRouter} from "react-router-dom";
import StudentsList from "../components/studentsList/StudentsList";
import StudentProfileDetails from "../components/studentProfileDetails/StudentProfileDetails";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <StudentsList/>
    },
    {
        path: "/studentList",
        element: <StudentsList/>
    },
    {
        path: "/studentList/:studentId",
        element: <StudentProfileDetails/>
    }
]);
