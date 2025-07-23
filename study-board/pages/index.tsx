'use client';

import { useState } from 'react';
import Modal from '../components/Modal';
import Sidebar from '../components/Sidebar';
import FormModal from '../components/FormModal'; 
import { Post } from '../types/post';



export default function Home() {
  const [posts, setPosts] = useState<Post[]>([]);

  const [selectedPost, setSelectedPost] = useState<Post | null>(null);
  const [isFormOpen, setIsFormOpen] = useState(false); 

  // 글쓰기 폼 제출
  const handleAddPost = (title: string, author: string) => {
    const newPost: Post = {
      id: posts.length + 1,
      title,
      author,
      category: '자유',
    };
    setPosts([newPost, ...posts]);
  };

  return (
    <main className="flex min-h-screen bg-gray-400 p-8">
      <Sidebar />

      <div className="flex-1 p-4">
        
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold">게시판</h1>
          <button
            onClick={() => setIsFormOpen(true)}
            className="bg-green-600 text-white px-4 py-2 rounded"
          >
            글쓰기
          </button>
        </div>

       
        <div className="grid grid-cols-3 gap-4">
          {posts.map((post) => (
            <div
              key={post.id}
              onClick={() => setSelectedPost(post)}
              className="bg-red-200 w-40 h-40 p-4 rounded shadow hover:scale-105 transition-all cursor-pointer"
            >
              <h3 className="font-bold text-gray-800">{post.title}</h3>
              <p className="text-sm text-gray-600 mt-2">{post.author}</p>
            </div>
          ))}
        </div>
      </div>

    
      {selectedPost && (
        <Modal post={selectedPost} onClose={() => setSelectedPost(null)} />
      )}
      {isFormOpen && (
        <FormModal
          onClose={() => setIsFormOpen(false)}
          onSubmit={handleAddPost}
        />
      )}
    </main>
  );
}
