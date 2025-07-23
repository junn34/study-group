import { useState } from 'react';

interface Props {
  onClose: () => void;
  onSubmit: (title: string, author: string) => void;
}

export default function FormModal({ onClose, onSubmit }: Props) {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-96 relative">
        <button onClick={onClose} className="absolute top-2 right-2 text-gray-600 hover:text-black">
          ✕
        </button>
        <h2 className="text-xl font-bold mb-4">포스트잇 작성</h2>
        <input
          type="text"
          placeholder="제목"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full border px-3 py-2 rounded mb-2"
        />
        <input
          type="text"
          placeholder="작성자"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          className="w-full border px-3 py-2 rounded mb-4"
        />
        <button
          onClick={() => {
            onSubmit(title, author);
            onClose();
          }}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          등록
        </button>
      </div>
    </div>
  );
}
