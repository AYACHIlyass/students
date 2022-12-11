import { Student } from "./../model/Student";
import axios from "axios";
export const fetchStudents = async (): Promise<Student[]> => {
  const response = await axios.get<Promise<Student[]>>(
    process.env.REACT_APP_BASE_URL!
  );
  return response.data;
};
