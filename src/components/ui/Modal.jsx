function Modal({ open, close }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black-50 flex items-center justify-center">
      
      <div className="bg-white p-7 rounded-lg w-80 text-center">
        <p className="text-lg mb-5">Modal Component implemented successfully!</p>

        <button
          onClick={close}
          className="bg-red-500 text-white px-4 py-2 rounded"
        >
          Close
        </button>
      </div>

    </div>
  );
}

export default Modal;