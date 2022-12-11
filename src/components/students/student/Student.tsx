import { FC } from "react";
import { Student as StudentModel } from "../../../model/Student";

const Student: FC<StudentModel> = (student) => {
  return (
    <div>
      <p>{student.id}</p>
      <p>{student.firstName}</p>
      <p>{student.lastName}</p>
      <p>{student.age}</p>
      <p>{student.description}</p>
    </div>
  );
};

export default Student;
