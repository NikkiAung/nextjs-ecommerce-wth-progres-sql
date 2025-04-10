import { getPosts } from "@/server/actions";

import BlogCard from "@/components/blog-card";

export default async function Home() {
  const { error, success } = await getPosts();

  if (error) {
    throw new Error(error);
  }
  console.log(success);

  return (
    <div>
      <h1 className="text-title">Recent Blogs</h1>
      {success?.length === 0 && <p>No posts found</p>}
      {success?.map((post, index) => (
        <BlogCard key={index} id={post.id} title={post.title} />
      ))}
    </div>
  );
}
