import {Route, Routes} from 'react-router';
import {FC} from "react";
import {Route as RouteModel} from "./model/Route";
import StudentsList from "../components/studentsList/StudentsList";

export const appRoutes: RouteModel[] = [
    {path: '/', component: <StudentsList/>},
    {path: '/studentList', component: <StudentsList/>},
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