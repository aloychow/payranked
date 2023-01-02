import Link from "next/link";

import { api, getUpload } from "../../../utils";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

import {
    BlogContainer,
    BlogPost,
    BlogPostText,
    BlogPostImage,
    BlogGridWrapper,
} from "./GridPageElements";

const BlogGrid = () => {
    const router = useRouter()

    const [posts, setPosts] = useState([{ title: "", image: "_" }]);

    useEffect(() => {
        const fetchPosts = async () => {
            const response = await api.get("/posts", {
                params: router.query
            });
            setPosts(response.data.reverse());
        };
        fetchPosts();
    }, [router.query]);

    return (
        <BlogContainer>
            <BlogGridWrapper>
                {posts.map((post, index) => (
                    <Link
                        key={index}
                        style={{ textDecoration: "none" }}
                        href={`/blog/${post.title.replace(/\s/g, "-").toLowerCase()}`}
                    >
                        <div className="link">
                            <BlogPost>
                                <BlogPostText>{post.title}</BlogPostText>
                                <BlogPostImage
                                    src={getUpload(post.image)}
                                    alt={post.image
                                        .split("_")[1]
                                        .replaceAll("-", " ")
                                        .slice(0, -4)}
                                />
                            </BlogPost>
                        </div>
                    </Link>
                ))}
            </BlogGridWrapper>
        </BlogContainer>
    );
};

export default BlogGrid;
