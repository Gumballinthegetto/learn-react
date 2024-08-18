import { useEffect, useState } from "react";
import AllNotes from './AllNotes';
import CreateNote from "./CreateNote";
import SuccessfullyAddedModal from "./SuccessfullyAddedModal";
import SuccessfullyDeletedModal from "./SuccessfullyDeletedModal";
import { onSnapshot, addDoc, doc, deleteDoc, getDoc, updateDoc, Timestamp } from "firebase/firestore";
import { notesCollection, db } from "../firebaseConfig";

export default function Main() {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState(null);
  const [deletedNote, setDeletedNote] = useState(null);
  const [addBtnClicked, setAddBtnClicked] = useState(false);
  const [addedSuccessfully, setAddedSuccessfully] = useState(false);
  const [deletedSuccessfully, setDeletedSuccessfully] = useState(false);

  useEffect(() => {
    const unsubscribe = onSnapshot(notesCollection, (snapshot) => {
      const notesArr = snapshot.docs.map(doc => ({
        ...doc.data(),
        id: doc.id,
      })); 
      setNotes(notesArr);
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAddedSuccessfully(false);
      setDeletedSuccessfully(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, [notes]);

  async function handleAddNote(newNote) {
    setNewNote(newNote);
    await addDoc(notesCollection, newNote)
    setAddBtnClicked(false);
  }

  async function handleEditNote(id, newFormData, lastEdited) {
    const docRef = doc(db, "notes", id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      await updateDoc(docRef, {
        title: newFormData.title,
        message: newFormData.message,
        lastEdited: lastEdited,
        updatedAt: Timestamp.now(),
      });

      setNotes(prevNotes => {
        const updatedArr = prevNotes.map(note => 
          note.id === id ? { ...note, title: newFormData.title, message: newFormData.message, lastEdited: lastEdited } : note
        );
        const editedNote = updatedArr.find(note => note.id === id);
        const otherNotes = updatedArr.filter(note => note.id !== id);
        return [editedNote, ...otherNotes];
      });
    }
  }

  async function handleDeleteNote(id) {
    const noteToBeDeleted = notes.find((note) => note.id === id);

    if (noteToBeDeleted) {
      setDeletedNote(noteToBeDeleted);
      const docRef = doc(db, "notes", id);
      await deleteDoc(docRef);
    }
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="w-[90%] max-w-md">
        { addedSuccessfully && <SuccessfullyAddedModal note={newNote} /> }
        { deletedSuccessfully && <SuccessfullyDeletedModal note={deletedNote} /> }
        <div className="border border-gray-400 rounded-xl py-5 px-4">
          <div className="flex items-center justify-between space-x-10">
            <div className="flex items-center">
              <img className="max-w-full h-auto w-12" src="/images/note-logo.png" alt="Logo" />
              <h3 className="font-[400]">Note</h3>
            </div>
            <div>
              <button className="text-[0.8rem] border border-gray-400 rounded-md w-[100px] py-2" type="button" onClick={() => setAddBtnClicked(true)}>Add Note</button>
            </div>
          </div>
        </div>
        { addBtnClicked && 
          <CreateNote 
            onSave={handleAddNote} 
            onBtnClicked={setAddBtnClicked}
            onSuccessfullyAdded={setAddedSuccessfully} /> }
        { notes.length > 0 && 
          <AllNotes 
            notes={notes} 
            onEdit={handleEditNote} 
            onDelete={handleDeleteNote} 
            onSuccessfullyDeleted={setDeletedSuccessfully} /> }
      </div>
    </div>
  );
}