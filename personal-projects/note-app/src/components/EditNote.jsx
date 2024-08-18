import { useEffect, useState } from "react";

export default function EditNote({ id, title, message, onSave, onEditBtnClicked }) {
  const [editedFormData, setEditedFormData] = useState({
    title: title,
    message: message, 
  });
  const [isFilled, setIsFilled] = useState(false);
  const [isChanged, setIsChanged] = useState(false);

  useEffect(() => {
    const checkIsFilled = Object.values(editedFormData).every(val => val.trim() !== '');
    setIsFilled(checkIsFilled);

    const checkIsChanged = editedFormData.title !== title || editedFormData.message !== message;
    setIsChanged(checkIsChanged);
  }, [editedFormData, title, message]);

  function handleOnChange(e) {
    e.preventDefault();
    const { name, value } = e.target;
    setEditedFormData(prevFormData => {
      return {
        ...prevFormData,
        [name]: value,
      };
    });
  }

  function handleSave() {
    if (isChanged) {
      onSave(id, editedFormData, new Date().toLocaleString());
    }
  }

  return (
    <div className="flex flex-col py-2 text-[0.9rem]">
      <hr className="w-full" />
      <label htmlFor="editedTitle" className="pt-2">Title</label>
      <input 
        className="border border-gray-400 text-[0.8rem] font-[300] rounded-lg mt-1 mb-4 py-2 px-4 w-full"
        type="text"
        id="editedTitle"
        name="title"
        value={editedFormData.title} 
        onChange={handleOnChange} />
      <label htmlFor="editedMessage">Message</label>
      <textarea
        id="editedMessage"
        className="border border-gray-400 text-[0.8rem] font-[300] rounded-lg mt-1 mb-4 py-4 px-4 w-full"
        value={editedFormData.message}
        name="message"
        onChange={handleOnChange} />
      <div className="flex items-center justify-between w-full">
        <button className="text-[0.8rem] border border-gray-400 rounded-lg w-[80px] py-2" type="button" onClick={() => onEditBtnClicked(false)}>Cancel</button>
        <button className={`text-[0.8rem] border border-gray-400 rounded-lg w-[80px] py-2 ${(!isChanged || !isFilled) ? 'opacity-50' : ''}`} disabled={(!isChanged || !isFilled)} type="button" onClick={handleSave}>Save Note</button>
      </div>
  </div>
  );
}