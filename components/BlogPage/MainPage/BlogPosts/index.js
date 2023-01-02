// import "./index.css";

import { api, getUpload } from "../../../../utils";
import { useState, useEffect, Fragment } from "react";

import Link from "next/link";
import BlogPost from "../BlogPost";
import ReactPaginate from "react-paginate";

import {
    BlogContainer,
    BlogHeader,
    BlogHeader2,
    BlogPostMain,
    BlogPostText,
    BlogPostImage,
    BlogPostsContainer,
    BackWrapper,
    BlogIcon,
    BlogBack,
    BlogPaginationContainer,
    BlogPaginationWrapper,
} from "./BlogPostsElements";

const BackIcon = "/images/Miscellaneous/back.png";

const BlogPosts = ({ posts }) => {

    // Create Routes (uncomment and copy from console for routes)
    // useEffect(() => {
    //     function createRoutes() {
    //         var routes = [];
    //         {Object.entries(posts).map(([key, value]) => { 
    //             routes.push('<url>' +
    //                             '<loc>https://www.payranked.com/blog/' + `${value.title.replace(/\s/g, '-').toLowerCase()}` + 
    //                             '</loc>' +
    //                             '<changefreq>weekly</changefreq>' +
    //                             '<priority>0.8</priority>' +
    //                             '<xhtml:link rel="alternate" hreflang="en" ' +
    //                             'href="https://www.payranked.com/blog/' + `${value.title.replace(/\s/g, '-').toLowerCase()}` + '"/>' +
    //                         '</url>') }
    //         )}
    //         return routes;
    //     }
    //     let routesList = createRoutes();
    //     console.log(routesList.join("\n"));
    // }, [posts]);
    
    // Top Post
    const [path1, setPath1] = useState("");
    const [post1, setPost1] = useState([{ title: "", image: "_" }]);

    // Specify top post here
    var title1 = "Mastering Common Behavioral Questions In Job Interviews";

    // Get featured posts
    useEffect(() => {
        const fetchPost = async () => {
            const response1 = await api.get("/posts/" + title1);
            setPost1(response1.data);
            setPath1(response1.data[0].title.replace(/\s/g, "-").toLowerCase());
        };
        fetchPost();
    }, []);

    // Get current URL (to decide whether to display featured post and header)
    const [currentLocation, setCurrentLocation] = useState({ href: "" });

    // Pagination ----------------------------------------------------------------------------
    const postsPerPage = 10;
    const pageCount = Math.ceil(posts.length / postsPerPage);

    const [pageNumber, setPageNumber] = useState(0);

    // Pass slice of posts to map into BlogPost (for current page)
    // Get current posts
    const indexOfFirstPost = pageNumber * postsPerPage;
    const indexOfLastPost = indexOfFirstPost + postsPerPage;
    const currentPosts = posts
        .slice(indexOfFirstPost, indexOfLastPost)
        .map((p, i) => <BlogPost key={i} post={p} />);
    // console.log(currentPosts)

    // Change page
    const changePage = ({ selected }) => {
        setPageNumber(selected);
    };

    // Scroll to top when page change
    useEffect(() => {
        window.scrollTo({ top: 0 });
    }, [currentPosts]);


    useEffect(() => {
        setCurrentLocation(window.location);
    }, []);

    return (
        <BlogContainer>
            {currentLocation.href.slice(currentLocation.href.length - 4) === "blog" ||
                currentLocation.href.slice(currentLocation.href.length - 5) ===
                "blog/" ? (
                <Fragment>
                    <Link
                        href={`/blog/${path1}`}
                        style={{ textDecoration: "none" }}
                        className="link"
                    >
                        <BlogPostMain>
                            <BlogPostText>{post1[0].title}</BlogPostText>
                            <BlogPostImage
                                src={getUpload(post1[0].image)}
                                alt={post1[0].image
                                    .split("_")[1]
                                    .replaceAll("-", " ")
                                    .slice(0, -4)}
                            />
                        </BlogPostMain>
                    </Link>
                    <BlogHeader2>Latest Posts</BlogHeader2>
                </Fragment>
            ) : (
                <Link href={`/blog`} style={{ textDecoration: "none" }}>
                    <BackWrapper>
                        <BlogIcon src={BackIcon} alt="Back Icon" />
                        <BlogBack>Back to All Posts</BlogBack>
                    </BackWrapper>
                </Link>
            )}
            <BlogPostsContainer>{currentPosts}</BlogPostsContainer>
            <BlogPaginationContainer>
                <BlogPaginationWrapper>
                    <ReactPaginate
                        previousLabel={"← Previous"}
                        nextLabel={"Next →"}
                        pageCount={pageCount}
                        onPageChange={changePage}
                        containerClassName={"paginationBtns"}
                        disabledClassName={"paginationDisabled"}
                        activeClassName={"paginationActive"}
                        pageRangeDisplayed={5}
                    />
                </BlogPaginationWrapper>
            </BlogPaginationContainer>
        </BlogContainer>
    );
};

export default BlogPosts;
