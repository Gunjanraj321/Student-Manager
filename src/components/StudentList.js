import React from "react";
import { useStudentContext } from "../StudentContext";

const StudentList = () => {
    const { students, editStudent, deleteStudent } = useStudentContext();

    return (
        <ul>
            {students.map((student) => (
                <li key={student.id}>
                    <div>{student.name}</div>
                    <div>{student.mobile}</div>
                    <div>{student.address}</div>
                    <button onClick={() => editStudent(student)}>Edit</button>
                    <button onClick={() => deleteStudent(student.id)}>Delete</button>
                </li>
            ))}
        </ul>
    )
}

export default StudentList;
