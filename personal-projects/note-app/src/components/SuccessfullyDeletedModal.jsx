export default function SuccessfullyDeletedModal({ note }) {
  return (
    <div className="border border-gray-400 my-5 px-5 text-[0.9rem] text-center py-4 rounded-xl">
      <h1><span className="text-[0.9rem] underline text-black font-bold">{note.title}</span> has been deleted.</h1>
    </div>
  );
}