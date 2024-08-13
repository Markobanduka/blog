import React from "react";

interface BlogSlugProps {
  params: {
    slug: string;
  };
}

const blogs = [
  {
    title: "article-1",
    description: "This is content about article 1",
  },
  {
    title: "article-2",
    description: "This is content about article 2",
  },
];

const BlogSlug: React.FC<BlogSlugProps> = ({ params }) => {
  const blog = blogs.find((post) => params.slug === post.title);

  if (typeof blog === "undefined") {
    return <div>404 Not found</div>;
  }
  return (
    <>
      <div>{blog.title}</div>
      <div>{blog.description}</div>
    </>
  );
};

export default BlogSlug;
