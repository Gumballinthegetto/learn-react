import { useState } from "react";
import EditNote from "./EditNote";
import DeleteNote from "./DeleteNote";

export default function Note({ id, title, message, createdDate, lastEdited, onEdit, onDelete, onSuccessfullyDeleted }) {
  const [dropBtnClicked, setDroppBtnClicked] = useState(false);
  const [editBtnClicked, setEditBtnClicked] = useState(false);
  const [deleteBtnClicked, setDeleteBtnClicked] = useState(false);

  function handleSave(id, newFormData, lastEdited) {
    onEdit(id, newFormData, lastEdited);
    setEditBtnClicked(false);
  }

  return (
    <div className="w-full">
      <h1 className="text-[1rem] font-[450]">{title}</h1>
      <span>{createdDate}</span>
      <div className={ (!editBtnClicked && !deleteBtnClicked) ? "flex items-center justify-between w-full py-3" : "hidden" }>
        <div className="hidden xs:flex xs:items-center xs:space-x-3">
          <button className="text-[0.8rem] w-[60px] py-2 border border-gray-400 rounded-lg" type="button" onClick={() => setEditBtnClicked(true)}>Edit</button>
          <button className="text-[0.8rem] w-[60px] py-2 border border-gray-400 rounded-lg" type="button" onClick={() => setDeleteBtnClicked(true)}>Delete</button>
        </div>
        <div className="flex xs:hidden">
        <div className="relative overflow-visible">
          <button 
            type="button" 
            className={`flex items-center text-[0.8rem] w-[90px] px-2 justify-between py-2 border border-gray-400 rounded-lg ${ dropBtnClicked && 'rounded-b-none border-b-0' }`}
            onClick={() => setDroppBtnClicked(prevState => !prevState)}>
            <span className="text-black font-[400]">Options</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={18} height={18} color={"#000000"} fill={"none"}>
              <path d="M18 9.00005C18 9.00005 13.5811 15 12 15C10.4188 15 6 9 6 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          { dropBtnClicked && (
            <div className="absolute text-start w-[90px] flex flex-col items-start justify-start py-2 border border-gray-400 bg-white rounded-b-lg font-[400]">
              <button className="text-[0.8rem] p-2" type="button" onClick={() => setEditBtnClicked(true)}>Edit</button>
              <button className="text-[0.8rem] p-2" type="button" onClick={() => setDeleteBtnClicked(true)}>Delete</button>
            </div>
          )}
          </div>  
        </div>
        { lastEdited && (
          <div className="flex flex-col items-end">
            <h3 className="text-[0.9rem]">Last Edited</h3>
            <span>{lastEdited}</span>
          </div>
        )}
      </div>
      <div className={ (!editBtnClicked && !deleteBtnClicked) ? "pt-3" : "" }>
        { editBtnClicked ? (
          <EditNote
            id={id}
            title={title}
            message={message}
            onSave={handleSave}
            onEditBtnClicked={setEditBtnClicked} />
        ) : deleteBtnClicked ? (
          <DeleteNote
            id={id}
            title={title}
            onDelete={onDelete}
            onDeleteBtnClicked={setDeleteBtnClicked}
            onSuccessfullyDeleted={onSuccessfullyDeleted} />
        ) : (
          <p className="text-black font-[300] text-justify text-[0.9rem]">{message}</p>
        )}
      </div>
    </div>
  );
}