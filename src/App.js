import React from "react";
import StudentForm from "./components/StudentForm";
import StudentList from './components/StudentList';
import StudentModal from "./components/StudentModal";
import { StudentProvider } from "./StudentContext";

const App = () => {
    return (
        <StudentProvider>
            <div className="container">
                <h1>Student Manager</h1>
                <StudentForm />
                <StudentList />
                <StudentModal />
            </div>
        </StudentProvider>
    )
}

export default App;