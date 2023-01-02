import Link from "next/link";

import { Context } from "../../../../context/Context";
import { useState, useEffect, useContext, Fragment, useMemo, useCallback } from "react";

const Edit = "/images/Miscellaneous/edit.png";
const Delete = "/images/Miscellaneous/delete.png";
const Close = "/images/Miscellaneous/close.png";
const BackIcon = "/images/Miscellaneous/back.png";

import {
    SinglePageMainContainer,
    SinglePageContainer,
    SinglePageWrapper,
    BlogInfoContainer,
    TopInfoWrapper,
    BackWrapper,
    BlogIcon,
    BlogBack,
    BlogDate,
    BlogCategory,
    Divider,
    Divider2,
    BlogTitle,
    Icon,
    BottomInfoWrapper,
    AuthorWrapper,
    AuthorText,
    BlogAuthor,
    TimeWrapper,
    TimeText,
    BlogTime,
    SinglePageImage,
    BlogH2,
    BlogH3,
    BlogH4,
    BlogContent,
    BlogSubContent,
    BlogList,
    BlogLink,
    InputTitle,
    InputBody,
    SubmitButton,
    SinglePageContainer2,
    SubHeader,
    PostItem,
    PostImage,
    PostTitle,
    PostContent,
    PostDivider,
    PostRightWrapper,
    PostBottomWrapper,
} from "./BlogSinglePageElements";
import { PostBottom } from "../../MainPage/BlogPost/BlogPostElements";
import { useRouter } from "next/router";
import Head from "next/head";
import { api, getUpload } from "../../../../utils";

const SinglePageSection = () => {
    const router = useRouter();
    // User context to allow editing/deleting
    const { user } = useContext(Context);

    // State to get/edit post using
    const [post, setPost] = useState({ title: "", body: [""], image: "_" });
    const [body, setBody] = useState([]);
    const [updateMode, setUpdateMode] = useState(false);

    const [title2, setTitle2] = useState("");
    const [body2, setBody2] = useState("");
    const [bodyArray, setBodyArray] = useState([]);

    // Posts by current author
    const [posts, setPosts] = useState([]);

    // Delete post
    // const handleDelete = async () => {
    //     try {
    //         await api.delete("/posts/" + post._id, {
    //             data: { username: user.username },
    //         });
    //         router.replace("/blog");
    //     } catch (err) {
    //         console.log(err);
    //     }
    // };

    // Update post
    const handleUpdate = async () => {
        try {
            await api.put(`/posts/${post._id}`, {
                username: user.username,
                title: title2,
                body: bodyArray,
            });
            // await onFetchPost()
            // Get new path name in case changed
            const pathname = title2.replace(/\s/g, "-").toLowerCase();
            router.replace("/blog/" + pathname);
            setUpdateMode(false);
        } catch (err) {
            console.log(err);
        }
    };

    const exactImageUrl = (line) => {
        // Matches if there is any {{image}} syntax
        const curlyMatch = line.match(/{{(.*?)}}/)

        // If there is a match, {{image1}} - image1 will be at the index 1
        // And image1 | image2 | image3 are the properties of the post object
        if (curlyMatch && curlyMatch[1]) {
            return getUpload(post[curlyMatch[1]])
        }

        // If there is no match, return the previous direct image name syntax
        return getUpload(line.slice(6))
    }

    // For title formatting during update
    const handleTitle = (e) => {
        setTitle2(e.target.value.replace(/(^\w|\s\w)/g, (m) => m.toUpperCase()));
    };

    // For body formatting during update
    const handleBody = (e) => {
        setBody2(e.target.value);
        setBodyArray(e.target.value.split("\n"));
    };

    const onUpdatePost = useCallback(async () => {
        const query = (router.query.blogId || "")
            .replace(/-/g, " ")
            .replace(/(^\w|\s\w)/g, (m) => m.toUpperCase());

        const response = await api.get("/posts/" + query);
        setPost(response.data[0]);
        setBody(response.data[0].body);

        setTitle2(response.data[0].title);
        setBody2(response.data[0].body.join("\n"));
        setBodyArray(response.data[0].body);
    }, [router.query])
    
    const onFetchPost = useCallback(async () => {
        const query = (router.query.blogId || "")
            .replace(/-/g, " ")
            .replace(/(^\w|\s\w)/g, (m) => m.toUpperCase());
            
        const response = await api.get("/posts/" + query);
        setPost(response.data[0]);
        setBody(response.data[0].body);
    }, [router.query])

    // Get Post
    useEffect(() => {
        onFetchPost()
    }, []);
    
    // Update post
    useEffect(() => {
        onUpdatePost()
    }, [onUpdatePost]);
    
    // Get other posts by same author
    useEffect(() => {
        const getPost2 = async () => {
            let authorSearch = "?user=" + post.username;
            const response2 = await api.get("/posts" + authorSearch);
            setPosts(response2.data.reverse().slice(0,5));
        };
        getPost2();
    }, [post]);

    // Format date for display
    const date = new Date(post.createdAt);
    const dateFormatted =
        date.getDate() +
        " " +
        date.toLocaleString("default", { month: "short" }) +
        " " +
        date.getFullYear();

    for (const post of posts) {
        const date2 = new Date(post.createdAt);
        const dateFormatted2 =
            date2.getDate() +
            " " +
            date2.toLocaleString("default", { month: "short" }) +
            " " +
            date2.getFullYear();
        post.date = dateFormatted2;
    }

    return (
        <SinglePageMainContainer>
            <Head>
                <title>{post.title} | Payranked</title>
                <meta name="description" content={post.body[0]} />
                <meta
                    name="keywords"
                    content="blog, articles, jobs, interviews, salary, tech"
                />
                <link
                    rel="canonical"
                    href={`https://www.payranked.com/${router.pathname}`}
                />
            </Head>
            <SinglePageContainer>
                <SinglePageWrapper>
                    <BlogInfoContainer>
                        <TopInfoWrapper>
                            <Link href={`/blog`} style={{ textDecoration: "none" }}>
                                <BackWrapper>
                                    <BlogIcon src={BackIcon} alt="Back Icon" />
                                    <BlogBack>Back to Main Page</BlogBack>
                                </BackWrapper>
                            </Link>
                        </TopInfoWrapper>
                        <TopInfoWrapper>
                            <BlogDate>{dateFormatted}</BlogDate>
                            <Divider>︱</Divider>
                            <Link href={`/blog`} style={{ textDecoration: "none" }}>
                                <BlogCategory style={{ color: "#285ACC" }}>Blog</BlogCategory>
                            </Link>
                            <Divider2>➜</Divider2>
                            <Link
                                href={`/blog/?cat=${post.category}`}
                                style={{ textDecoration: "none" }}
                            >
                                {post.category === "Salary" ? (
                                    <BlogCategory>{post.category}</BlogCategory>
                                ) : post.category === "Jobs" ? (
                                    <BlogCategory style={{ color: "#F43F5E" }}>
                                        {post.category}
                                    </BlogCategory>
                                ) : post.category === "Interviews" ? (
                                    <BlogCategory style={{ color: "#35CC79" }}>
                                        {post.category}
                                    </BlogCategory>
                                ) : post.category === "Technology" ? (
                                    <BlogCategory style={{ color: "#0892D0" }}>
                                        {post.category}
                                    </BlogCategory>
                                ) : (
                                    <BlogCategory style={{ color: "black" }}>
                                        {post.category}
                                    </BlogCategory>
                                )}
                            </Link>
                            <Divider2>➜</Divider2>
                        </TopInfoWrapper>
                        {updateMode ? (
                            <InputTitle
                                placeholder="Blog Title"
                                autoFocus={true}
                                value={title2}
                                onChange={(e) => handleTitle(e)}
                            />
                        ) : (
                            <BlogTitle>{post.title}</BlogTitle>
                        )}
                        <BottomInfoWrapper>
                            <AuthorWrapper>
                                <AuthorText>Author</AuthorText>
                                <Link
                                    href={`/blog/?user=${post.username}`}
                                    style={{ textDecoration: "none" }}
                                >
                                    <BlogAuthor>{post.username}</BlogAuthor>
                                </Link>
                            </AuthorWrapper>

                            <TimeWrapper>
                                <TimeText>Time</TimeText>
                                <BlogTime>{post.time}</BlogTime>
                            </TimeWrapper>
                        </BottomInfoWrapper>

                        {/* Display only if logged in and is post creator (to edit/delete post) */}
                        {post.username === user?.username && (
                            <BottomInfoWrapper>
                                {updateMode ? (
                                    <>
                                        <Icon
                                            src={Close}
                                            onClick={() => setUpdateMode(false)}
                                        />
                                    </>
                                ) : (
                                    <>
                                        <Icon
                                            src={Edit}
                                            onClick={() => setUpdateMode(true)}
                                        />
                                        {/* Uncomment to add back delete button */}
                                        {/* <Icon src={Delete} onClick={handleDelete} /> */}
                                    </>
                                )}
                            </BottomInfoWrapper>
                        )}
                    </BlogInfoContainer>
                    <SinglePageImage
                        src={getUpload(post.image)}
                        alt={(post.image.split("_")[1] || "")
                            .replaceAll("-", " ")
                            .slice(0, -4)}
                    />
                    {updateMode ? (
                        <Fragment>
                            <InputBody
                                placeholder="Write your content here..."
                                type="text"
                                rows="10"
                                value={body2}
                                onChange={(e) => handleBody(e)}
                            />
                            <SubmitButton
                                variant="contained"
                                disableElevation
                                onClick={handleUpdate}
                            >
                                Confirm
                            </SubmitButton>
                        </Fragment>
                    ) : (
                        <Fragment>
                            {body.map((paragraph) => {
                                if (paragraph.slice(0, 3) === "## ") {
                                    return <BlogH2>{paragraph.slice(3)}</BlogH2>;
                                } else if (paragraph.slice(0, 4) === "### ") {
                                    return <BlogH3>{paragraph.slice(4)}</BlogH3>;
                                } else if (paragraph.slice(0, 5) === "#### ") {
                                    return <BlogH4>{paragraph.slice(5)}</BlogH4>;
                                } else if (paragraph.slice(0, 5) === "[img]") {
                                    return (
                                        <SinglePageImage
                                            src={exactImageUrl(paragraph)}
                                            alt={exactImageUrl(paragraph)
                                                ?.slice(6)
                                                ?.split("_")[1]
                                                ?.replaceAll("-", " ")
                                                ?.slice(0, -4)}
                                        />
                                    );
                                } else if (paragraph.slice(0, 2) === "- ") {
                                    paragraphArray = paragraph.slice(2).split("**");
                                    return (
                                        <BlogList>
                                            {paragraphArray.map((subParagraph) => {
                                                if (subParagraph.slice(0, 1) === "*") {
                                                    return (
                                                        <BlogSubContent style={{ fontWeight: "700" }}>
                                                            {subParagraph.slice(1)}
                                                        </BlogSubContent>
                                                    );
                                                } else {
                                                    return (
                                                        <BlogSubContent>{subParagraph}</BlogSubContent>
                                                    );
                                                }
                                            })}
                                        </BlogList>
                                    );
                                } else if (
                                    paragraph.includes("**") ||
                                    paragraph.includes("[link]")
                                ) {
                                    var paragraphArray = paragraph
                                        .split("**")
                                        .join("~")
                                        .split("[link]")
                                        .join("~")
                                        .split("~")
                                        .join("~")
                                        .split("~");
                                    // console.log(paragraphArray)
                                    return (
                                        <BlogContent>
                                            {paragraphArray.map((subParagraph) => {
                                                if (subParagraph.slice(0, 1) === "[") {
                                                    const paragraphLink = subParagraph.split("](");
                                                    // console.log(paragraphLink)
                                                    return (
                                                        <BlogLink
                                                            href={paragraphLink[1].slice(
                                                                0,
                                                                paragraphLink[1].length - 1
                                                            )}
                                                            target="_blank"
                                                        >
                                                            {paragraphLink[0].slice(1)}
                                                        </BlogLink>
                                                    );
                                                } else if (subParagraph.slice(0, 1) === "*") {
                                                    return (
                                                        <BlogSubContent style={{ fontWeight: "700" }}>
                                                            {subParagraph.slice(1)}
                                                        </BlogSubContent>
                                                    );
                                                } else {
                                                    return (
                                                        <BlogSubContent>{subParagraph}</BlogSubContent>
                                                    );
                                                }
                                            })}
                                        </BlogContent>
                                    );
                                } else {
                                    if (paragraph === "") {
                                        return;
                                    } else {
                                        return <BlogContent>{paragraph}</BlogContent>;
                                    }
                                }
                            })}
                        </Fragment>
                    )}
                </SinglePageWrapper>
            </SinglePageContainer>
            <SinglePageContainer2>
                <SubHeader>More from {post.username} 🎉</SubHeader>
                {posts.map((post, index) => {
                    const pathname = post.title.replace(/\s/g, "-").toLowerCase();
                    return (
                        <Fragment key={index}>
                            <Link
                                href={`/blog/${pathname}`}
                                style={{ textDecoration: "none" }}
                                className="link"
                            >
                                <PostItem>
                                    <PostRightWrapper>
                                        <PostTitle>{post.title}</PostTitle>
                                        <PostContent>{post.body[0]}</PostContent>
                                        <PostBottomWrapper>
                                            {post.category === "Salary" ? (
                                                <div style={{ color: "#8144FF" }}>{post.category}</div>
                                            ) : post.category === "Jobs" ? (
                                                <div style={{ color: "#F43F5E" }}>{post.category}</div>
                                            ) : post.category === "Interviews" ? (
                                                <div style={{ color: "#35CC79" }}>{post.category}</div>
                                            ) : post.category === "Technology" ? (
                                                <div style={{ color: "#0892D0" }}>{post.category}</div>
                                            ) : (
                                                <div style={{ color: "black" }}>{post.category}</div>
                                            )}
                                            <div style={{ fontWeight: "400", color: "#dbdbdb" }}>
                                                ︱
                                            </div>

                                            <div style={{ fontWeight: "400" }}>{post.date}</div>
                                        </PostBottomWrapper>
                                    </PostRightWrapper>
                                    {post.image === "" ? (
                                        <></>
                                    ) : (
                                        <PostImage
                                            src={getUpload(post.image)}
                                            alt={(post.image.split("_")[1] || "")
                                                .replaceAll("-", " ")
                                                .slice(0, -4)}
                                        />
                                    )}
                                </PostItem>
                            </Link>
                            {index !== posts.length - 1 ? <PostDivider /> : null}
                        </Fragment>
                    );
                })}
            </SinglePageContainer2>
        </SinglePageMainContainer>
    );
};

export default SinglePageSection;
