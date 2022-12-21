import {useQuery} from "react-query";
import {fetchStudentById} from "../../../service/StudentService";

export const useFetchStudentById=(studentId:string)=> {
    return  useQuery(
        process.env.REACT_APP_BASE_URL!,
        () => fetchStudentById(studentId!), {
            refetchOnWindowFocus:false,
        }
    );
}