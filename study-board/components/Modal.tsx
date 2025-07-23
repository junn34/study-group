import { Post } from '../types/post';

interface ModalProps {
  post: Post;
  onClose: () => void;
}

export default function Modal({ post, onClose }: ModalProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-96 relative">
        <button onClick={onClose} className="absolute top-2 right-2 text-gray-600 hover:text-black">
          ✕
        </button>
        <h2 className="text-xl font-bold mb-2">{post.title}</h2>
        <p className="text-sm text-gray-600 mb-4">작성자: {post.author}</p>
        <p className="text-gray-700">내용</p>
      </div>
    </div>
  );
}
