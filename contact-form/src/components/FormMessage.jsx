export default function FormMessage({ onClosed }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-8 rounded shadow-lg">
        <p>Your form has been submitted!</p>
        <button
          onClick={onClosed}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
          >
          Close
        </button>
      </div>
    </div>
  );
}