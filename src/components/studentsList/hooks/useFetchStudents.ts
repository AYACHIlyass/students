import {useQuery} from "react-query";
import {fetchStudents} from "../../../service/StudentService";

export const useFetchStudents = () => {
    return useQuery(process.env.REACT_APP_GET_STUDENTS_REQUEST_ID!, fetchStudents, {refetchOnWindowFocus: false});
}