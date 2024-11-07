import React from 'react';
import { addNote } from '../utils/api'
import NoteInput from '../component/NoteInput';
import { useNavigate } from 'react-router-dom';
 
function AddNotePage() {
    const navigate = useNavigate();

    async function onAddNoteHandler(note) {
      await addNote(note);
      navigate('/')
  }
 
  return (
    <section>
      <NoteInput addNote={onAddNoteHandler} />
    </section>
  )
}
 
export default AddNotePage;