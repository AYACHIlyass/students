import { FC } from "react";
import { useQuery } from "react-query";
import { fetchStudents } from "../../service/StudentService";
import Student from "./student/Student";
const Students: FC = () => {
  const {
    isLoading,
    error,
    isError,
    data: students,
  } = useQuery(process.env.REACT_APP_GET_STUDENTS_REQUEST_ID!, fetchStudents);
  if (isLoading) {
    return <h1>Loading</h1>;
  } else if (isError) {
    return <h1>{(error as Error).message}</h1>;
  }
  console.log(students);
  return (
    <>
      {students?.map((student) => {
        return <Student key={student.id} {...student}></Student>;
      })}
    </>
  );
};

export default Students;
