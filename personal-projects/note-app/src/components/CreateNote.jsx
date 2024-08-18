import { useEffect, useState } from "react";
import { Timestamp } from "firebase/firestore";

export default function CreateNote({ onSave, onBtnClicked, onSuccessfullyAdded }) {
  const [formData, setFormData] = useState({
    title: '',
    message: '',
  });
  const [isFilled, setIsFilled] = useState(false);

  useEffect(() => {
    const checkIsFilled = Object.values(formData).every(val => val.trim() !== '');
    setIsFilled(checkIsFilled);
  }, [formData]);

  function handleSave() {
    const newNote = {
      title: formData.title,
      message: formData.message,
      createdDate: new Date().toLocaleString(),
      createdAt: Timestamp.now(),
      updatedAt: Timestamp.now(),
    }
    
    onSuccessfullyAdded(true);
    onSave(newNote);
    setFormData({
      title: '',
      message: '',
    });
  }

  function handleOnChange(e) {
    e.preventDefault();
    const { name, value } = e.target
    setFormData(prevFormData => {
      return {
        ...prevFormData,
        [name]: value
      }
    });
  }

  return (
    <div className="border border-gray-400 rounded-lg px-5 py-4 flex flex-col mt-5">
      <label htmlFor="title" className="text-[0.9rem]">Title</label>
      <input 
        type="text"
        id="title"
        name="title"
        className="text-[0.8rem] font-[300] text-justify px-6 py-3 mb-4 mt-1 border border-gray-400 rounded-lg w-full"
        value={formData.title}
        onChange={handleOnChange}
        placeholder="Type your title here" />
      <label htmlFor="message" className="text-[0.9rem]">Message</label>
      <textarea 
        id="message"
        className="text-[0.8rem] font-[300] text-justify px-6 py-4 mb-4 mt-1 border border-gray-400 rounded-lg w-full"
        name="message"
        value={formData.message}
        onChange={handleOnChange}
        placeholder="Type your message here" />
      <div className="flex justify-between w-full">
        <button className="text-[0.8rem] border border-gray-400 rounded-lg w-[100px] py-2" type="button" onClick={() => onBtnClicked(false)}>Cancel</button>
        <button className={`text-[0.8rem] border border-gray-400 rounded-lg w-[100px] py-2 ${!isFilled && 'opacity-50'}`} disabled={!isFilled} type="button" onClick={handleSave}>Save Note</button>
      </div>
    </div>
  );
}