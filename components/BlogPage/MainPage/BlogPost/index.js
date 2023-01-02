import React from "react";
import Link from "next/link";
import { getUpload } from "../../../../utils";

import {
    BlogPostContainer,
    PostImage,
    PostInfo,
    PostCategory,
    PostTitle,
    PostContent,
    PostBottom,
    PostLength,
    PostDate,
} from "./BlogPostElements";

const BlogPost = ({ post }) => {
    // Format date for display
    const date = new Date(post.createdAt);
    const dateFormatted =
        date.getDate() +
        " " +
        date.toLocaleString("default", { month: "short" }) +
        " " +
        date.getFullYear();

    // Format title into pathname
    const pathname = post.title.replace(/\s/g, "-").toLowerCase();

    return (
        <Link
            href={`/blog/${pathname}`}
            style={{ textDecoration: "none" }}
            className="link"
        >
            <BlogPostContainer>
                <PostImage
                    src={getUpload(post.image)}
                    alt={(post.image.split("_")[1] || "")
                        .replaceAll("-", " ")
                        .slice(0, -4)}
                />
                <PostInfo>
                    {post.category === "Salary" ? (
                        <PostCategory>{post.category}</PostCategory>
                    ) : post.category === "Jobs" ? (
                        <PostCategory style={{ color: "#F43F5E" }}>
                            {post.category}
                        </PostCategory>
                    ) : post.category === "Interviews" ? (
                        <PostCategory style={{ color: "#35CC79" }}>
                            {post.category}
                        </PostCategory>
                    ) : post.category === "Technology" ? (
                        <PostCategory style={{ color: "#0892D0" }}>
                            {post.category}
                        </PostCategory>
                    ) : (
                        <PostCategory style={{ color: "black" }}>
                            {post.category}
                        </PostCategory>
                    )}

                    <PostTitle>{post.title}</PostTitle>
                    <PostContent>{post.body[0]}</PostContent>

                    <PostBottom>
                        <PostLength>{post.time} read</PostLength>
                        <PostDate>{dateFormatted}</PostDate>
                    </PostBottom>
                </PostInfo>
            </BlogPostContainer>
        </Link>
    );
};

export default BlogPost;
