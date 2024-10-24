import Comments from '@/app/components/Comments';
import getPostComment from '@/lib/getPostComment';
import getPost from '@/lib/getPost';
import React, { Suspense } from 'react';
import getAllPosts from '@/lib/getAllPosts';

export async function generateMetadata({ params }) {
    const { id } = params;
    const post = await getPost(id);

    return {
        title: post.title,
        description: post.body,
    };
}

export default async function PostPage({ params }) {
    const { id } = params;
    const postPromise = getPost(id);
    const commentPromise = getPostComment(id);

    // Await the post data
    const post = await postPromise;

    return (
        <div className='mt-6'>
            <h2 className='text-blue-500'>{post.title}</h2>
            <p className='mt-3'>{post.body}</p>
            <hr />

            {/* Wrap the Comments component with Suspense */}
            <Suspense fallback={<h1>Loading comments .....</h1>}>
                <Comments promise={commentPromise} />
            </Suspense>
        </div>
    );
}

export async function generateStaticParams() {
    const posts = await getAllPosts();
   
    return posts.map((post) => ({
      id: post.id.toString(),
    }))
  }