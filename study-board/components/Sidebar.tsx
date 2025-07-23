import { Post } from '../types/post';

const posts: Post[] = [
  { id: 1, title: '리액트 공부할 사람 구함...', author: '양유진', category: '공지' },
  { id: 2, title: '1', author: 'a', category: '공지' },
  { id: 3, title: '2...', author: 'b', category: '공지' },
  { id: 4, title: '3..', author: 'c', category: '공지' },
];

export default function Sidebar() {
  return (
    <div className="bg-white p-4 w-64 shadow">
      <h2 className="text-xl font-bold mb-4">사이드바</h2>
      <ul className="space-y-2">
        {posts.map((post) => (
          <li key={post.id} className="flex justify-between bg-gray-100 p-2 rounded">
            <span className="truncate">{post.title}</span>
            <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full">S</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
