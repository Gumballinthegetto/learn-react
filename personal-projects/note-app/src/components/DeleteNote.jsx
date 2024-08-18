import { useState } from "react";

export default function DeleteNote({ id, title, onDelete, onDeleteBtnClicked, onSuccessfullyDeleted }) {
  const [isChecked, setIsChecked] = useState(false);

  function handleDelete() {
    onDelete(id);
    onSuccessfullyDeleted(true);
  }

  return (
    <div className="flex flex-col items-center justify-center text-[0.8rem] py-4">
      <h1 className="text-[0.9rem]">Are you sure you want to delete <span className="underline font-bold text-black text-[0.9rem]">{title}</span> ?</h1>
      <div className="border border-gray-400 rounded-xl py-2 px-4 text-center my-5 w-full">
        <h2 className="py-2"><span className="">WARNING:</span> This action cannot be undone once deleted.</h2>
        <div className="flex items-center justify-center py-4">
          <input 
            type="checkbox"
            id="confirmedDeletion"
            name="confirmedDeletion"
            value={isChecked}
            onChange={() => setIsChecked(prevState => !prevState)} />
          <label className="pl-4" htmlFor="confirmedDeletion">I understand and want to proceed with deletion.</label>
        </div>
      </div>
      <div className="flex items-center justify-between w-full">
        <button className="text-[0.8rem] border border-gray-400 rounded-lg w-[80px] py-2" type="button" onClick={() => onDeleteBtnClicked(false)}>Cancel</button>
        <button type="button" className={ `border border-gray-400 rounded-lg w-[80px] py-2 ${!isChecked && "opacity-30" }` } disabled={ !isChecked } onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
}