import Note from "./Note";

export default function AllNotes({ notes, onEdit, onDelete, onSuccessfullyDeleted }) {

  const sortedNote = [...notes].sort((a, b) => b.updatedAt.toDate() - a.updatedAt.toDate());

  return (
    <div className="border border-gray-400 mt-5 px-5 py-6 space-y-5 rounded-xl">
      {sortedNote.map((note, index) => {
        return (
          <div key={note.id}>
            <Note  
              id={note.id}
              title={note.title}
              message={note.message}
              createdDate={note.createdDate}
              lastEdited={note.lastEdited}
              onEdit={onEdit}
              onDelete={onDelete}
              onSuccessfullyDeleted={onSuccessfullyDeleted} />
            { index < notes.length - 1 && <hr className="mt-3" /> }
          </div>
        );
      })}
    </div>
  );
}