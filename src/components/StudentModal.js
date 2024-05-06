
import React from 'react';
import ReactDOM from 'react-dom';
import { useStudentContext } from '../StudentContext';

export const StudentModal = () => {

    const {modalOpen , setModalOpen , selectedStudent } = useStudentContext();

    if(!modalOpen) return null;

  return ReactDOM.createPortal(
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={() => setModalOpen(false)}>
        </span>
      </div>
    </div>,
    document.getElementById('modal-root')
  )
}

export default StudentModal;