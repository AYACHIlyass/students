import {Route, Routes} from 'react-router';
import {FC} from "react";
import {Route as RouteModel} from "./model/Route";
import StudentsList from "../components/studentsList/StudentsList";
import StudentProfileDetails from "../components/studentProfileDetails/StudentProfileDetails";

export const appRoutes: RouteModel[] = [
    {path: '/', component: <StudentsList/>},
    {path: '/studentList', component: <StudentsList/>},
    {path: '/studentList/:studentId', component: <StudentProfileDetails/>},
];
export const CustomRoutes: FC = () => {
    return <Routes>
        {appRoutes.map(
            (route: RouteModel, key) =>
                <Route path={route.path} element={route.component} key={key}/>
        )
        }
    </Routes>
}