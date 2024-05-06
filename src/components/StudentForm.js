import React, { useState } from "react";
import { useStudentContext } from "../StudentContext";
const StudentForm = () => {
    const { addStudent, updateStudent, selectedStudent } = useStudentContext();
    const [name, setName] = useState(selectedStudent ? selectedStudent.name : "");
  const [mobile, setMobile] = useState(
    selectedStudent ? selectedStudent.mobile : ""
  );
  const [address, setAddress] = useState(
    selectedStudent ? selectedStudent.address : ""
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    if(selectedStudent){
        updateStudent({id:selectedStudent.id,name,mobile,address})
    }else{
        addStudent({id:new Date().getTime(),name,mobile,address})
    }
    setName('');
    setMobile('');
    setAddress('');
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name:"
          value={name}
          onChange={(e)=>setName(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Mobile:"
          value={mobile}
          onChange={(e)=>setMobile(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Address:"
          value={address}
          onChange={(e)=>setAddress(e.target.value)}
          required
        />
        <button type="submit">{selectedStudent ? 'Update' :'Add' }</button>
      </form>
    </div>
  );
};
export default StudentForm;
