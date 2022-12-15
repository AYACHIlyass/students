import {Student} from "./../model/Student";
import axios from "axios";

export const fetchStudents = async (): Promise<Student[]> => {
    const response = await axios.get(
        process.env.REACT_APP_BASE_URL!
    );
    return response.data
};

export const fetchStudentById = async (studentId: string): Promise<Student> => {
    const response = await axios.get(
        `${process.env.REACT_APP_BASE_URL!}/${studentId}`
    );

    return response.data
};
