import { Post } from '../types/post';

export default function PostCard({ post }: { post: Post }) {
  return (
    <div className="bg-red-200 w-40 h-40 p-4 rounded shadow hover:scale-105 transition-all cursor-pointer">
      <h3 className="font-bold text-gray-800">{post.title}</h3>
      <p className="text-sm text-gray-600 mt-2">{post.author}</p>
    </div>
  );
}
