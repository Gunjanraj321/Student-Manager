import React, { createContext, useState, useContext } from "react";

const StudentContext = createContext();

export const useStudentContext = () => useContext(StudentContext);

export const StudentProvider = ({ children }) => {
  const [students, setStudents] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState(null);

  const addStudent = (newStudent) => {
    setStudents([...students, newStudent]);
  };

  const editStudent = (student) => {
    setSelectedStudent(student);
    setModalOpen(true);
  };

  const updateStudent = (updatedStudent) => {
    const updatedStudents = students.map((student) =>
      student.id === updatedStudent.id ? updatedStudent : student
    );
    setStudents(updatedStudents);
    setSelectedStudent(null);
    setModalOpen(false);
  };

  const deleteStudent = (id) => {
    const updatedStudents = students.filter((student) => student.id !== id);
    setStudents(updatedStudents);
  };

  return (
    <StudentContext.Provider
      value={{
        students,
        modalOpen,
        selectedStudent,
        setModalOpen,
        addStudent,
        editStudent,
        updateStudent,
        deleteStudent,
      }}
    >
      {children}
    </StudentContext.Provider>
  );
};
