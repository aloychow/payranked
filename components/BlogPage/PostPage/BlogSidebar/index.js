import Link from "next/link";

import { api, getUpload } from '../../../../utils'
import { Context } from "../../../../context/Context";
import { useState, useEffect, useContext, useMemo } from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

import {
    SidebarContainer,
    SidebarSubContainer,
    SidebarHeader,
    SidebarHeader2,
    Divider,
    SidebarFeaturedItem,
    SidebarFeaturedImage,
    SidebarFeaturedTitle,
    SidebarFeaturedRightWrapper,
    SidebarFeaturedBottomWrapper,
    SidebarList,
    SidebarListSubContainer,
    SidebarListItems,
    SidebarListArrow,
    SidebarListItems2,
    SocialMediaIcons,
    SocialMediaIconLink,
    NavLinks,
} from "./BlogSidebarElements";

const RightArrow = "/images/Miscellaneous/right-arrow.png";

const BlogSidebar = () => {
    const { user } = useContext(Context);

    const [cats, setCats] = useState([]);

    const [path1, setPath1] = useState("");
    const [post1, setPost1] = useState([{ title: "", image: "_" }]);

    const [path2, setPath2] = useState("");
    const [post2, setPost2] = useState([{ title: "", image: "_" }]);

    const [path3, setPath3] = useState("");
    const [post3, setPost3] = useState([{ title: "", image: "_" }]);

    // Specify featured posts here
    var title1 =
        "4 Important Factors To Look For In Your Next Job Besides Compensation";
    var title2 = "What Is Pay Transparency And Why We Should Strive For It";
    var title3 = "Mastering Common Behavioral Questions In Job Interviews";

    // Get featured posts
    useEffect(() => {
        const fetchPost = async () => {
            const response1 = await api.get("/posts/" + title1);
            setPost1(response1.data);
            setPath1(response1.data[0].title.replace(/\s/g, "-").toLowerCase());

            const response2 = await api.get("/posts/" + title2);
            setPost2(response2.data);
            setPath2(response2.data[0].title.replace(/\s/g, "-").toLowerCase());

            const response3 = await api.get("/posts/" + title3);
            setPost3(response3.data);
            setPath3(response3.data[0].title.replace(/\s/g, "-").toLowerCase());
        };
        fetchPost();
    }, []);

    // Get categories
    useEffect(() => {
        const getCats = async () => {
            const response = await api.get("/categories");
            setCats(response.data);
            // console.log(response.data)
        };
        getCats();
    }, []);

    // Format featured posts dates
    const date1 = new Date(post1[0].createdAt);
    const dateFormatted1 =
        date1.getDate() +
        " " +
        date1.toLocaleString("default", { month: "short" }) +
        " " +
        date1.getFullYear();

    const date2 = new Date(post2[0].createdAt);
    const dateFormatted2 =
        date2.getDate() +
        " " +
        date2.toLocaleString("default", { month: "short" }) +
        " " +
        date2.getFullYear();

    const date3 = new Date(post3[0].createdAt);
    const dateFormatted3 =
        date3.getDate() +
        " " +
        date3.toLocaleString("default", { month: "short" }) +
        " " +
        date3.getFullYear();

    return (
        <SidebarContainer>
            <SidebarSubContainer>
                <SidebarHeader>Featured Posts</SidebarHeader>

                <Link
                    href={`/blog/${path1}`}
                    style={{ textDecoration: "none" }}
                    className="link"
                >
                    <SidebarFeaturedItem>
                        <SidebarFeaturedRightWrapper>
                            <SidebarFeaturedTitle>{post1[0].title}</SidebarFeaturedTitle>
                            <SidebarFeaturedBottomWrapper>
                                {post1[0].category === "Salary" ? (
                                    <div style={{ color: "#8144FF" }}>{post1[0].category}</div>
                                ) : post1[0].category === "Jobs" ? (
                                    <div style={{ color: "#F43F5E" }}>{post1[0].category}</div>
                                ) : post1[0].category === "Interviews" ? (
                                    <div style={{ color: "#35CC79" }}>{post1[0].category}</div>
                                ) : (
                                    <div style={{ color: "black" }}>{post1[0].category}</div>
                                )}
                                <div style={{ fontWeight: "400", color: "#dbdbdb" }}>︱</div>
                                <div style={{ fontWeight: "400" }}>{dateFormatted1}</div>
                            </SidebarFeaturedBottomWrapper>
                        </SidebarFeaturedRightWrapper>
                        {post1[0].image === "" ? (
                            <></>
                        ) : (
                            <SidebarFeaturedImage
                                src={getUpload(post1[0].image)}
                                alt={post1[0].image
                                    .split("_")[1]
                                    .replaceAll("-", " ")
                                    .slice(0, -4)}
                            />
                        )}
                    </SidebarFeaturedItem>
                </Link>

                <Divider />

                <Link
                    href={`/blog/${path2}`}
                    style={{ textDecoration: "none" }}
                    className="link"
                >
                    <SidebarFeaturedItem>
                        <SidebarFeaturedRightWrapper>
                            <SidebarFeaturedTitle>{post2[0].title}</SidebarFeaturedTitle>
                            <SidebarFeaturedBottomWrapper>
                                {post2[0].category === "Salary" ? (
                                    <div style={{ color: "#8144FF" }}>{post2[0].category}</div>
                                ) : post2[0].category === "Jobs" ? (
                                    <div style={{ color: "#F43F5E" }}>{post2[0].category}</div>
                                ) : post2[0].category === "Interviews" ? (
                                    <div style={{ color: "#35CC79" }}>{post2[0].category}</div>
                                ) : (
                                    <div style={{ color: "black" }}>{post2[0].category}</div>
                                )}
                                <div style={{ fontWeight: "400", color: "#dbdbdb" }}>︱</div>
                                <div style={{ fontWeight: "400" }}>{dateFormatted2}</div>
                            </SidebarFeaturedBottomWrapper>
                        </SidebarFeaturedRightWrapper>
                        {post2[0].image === "" ? (
                            <></>
                        ) : (
                            <SidebarFeaturedImage
                                src={getUpload(post2[0].image)}
                                alt={post2[0].image
                                    .split("_")[1]
                                    .replaceAll("-", " ")
                                    .slice(0, -4)}
                            />
                        )}
                    </SidebarFeaturedItem>
                </Link>

                <Divider />

                <Link
                    href={`/blog/${path3}`}
                    style={{ textDecoration: "none" }}
                    className="link"
                >
                    <SidebarFeaturedItem>
                        <SidebarFeaturedRightWrapper>
                            <SidebarFeaturedTitle>{post3[0].title}</SidebarFeaturedTitle>
                            <SidebarFeaturedBottomWrapper>
                                {post3[0].category === "Salary" ? (
                                    <div style={{ color: "#8144FF" }}>{post3[0].category}</div>
                                ) : post3[0].category === "Jobs" ? (
                                    <div style={{ color: "#F43F5E" }}>{post3[0].category}</div>
                                ) : post3[0].category === "Interviews" ? (
                                    <div style={{ color: "#35CC79" }}>{post3[0].category}</div>
                                ) : (
                                    <div style={{ color: "black" }}>{post3[0].category}</div>
                                )}
                                <div style={{ fontWeight: "400", color: "#dbdbdb" }}>︱</div>
                                <div style={{ fontWeight: "400" }}>{dateFormatted3}</div>
                            </SidebarFeaturedBottomWrapper>
                        </SidebarFeaturedRightWrapper>
                        {post3[0].image === "" ? (
                            <></>
                        ) : (
                            <SidebarFeaturedImage
                                src={getUpload(post3[0].image)}
                                alt={post3[0].image
                                    .split("_")[1]
                                    .replaceAll("-", " ")
                                    .slice(0, -4)}
                            />
                        )}
                    </SidebarFeaturedItem>
                </Link>
            </SidebarSubContainer>

            <SidebarSubContainer>
                <SidebarHeader>Explore Topics</SidebarHeader>

                <SidebarList>
                    {cats.map((cat, index) => (
                        <>
                            <SidebarListSubContainer>
                                <SidebarListArrow src={RightArrow} alt="Right arrow symbol" />
                                <Link
                                    href={`/blog/?cat=${cat.name}`}
                                    style={{
                                        textDecoration: "none",
                                        flexGrow: 1,
                                        marginRight: "0.5rem",
                                    }}
                                >
                                    <SidebarListItems>{cat.name}</SidebarListItems>
                                </Link>
                            </SidebarListSubContainer>

                            {index !== cats.length - 1 ? <Divider /> : null}
                        </>
                    ))}
                </SidebarList>
            </SidebarSubContainer>

            <SidebarSubContainer>
                <SidebarHeader2>Follow Us</SidebarHeader2>

                <SocialMediaIcons>
                    <SocialMediaIconLink
                        style={{ color: "#0B82E8" }}
                        href="https://www.facebook.com/payranked"
                        target="_blank"
                        aria-label="Facebook"
                    >
                        <FaFacebook />
                    </SocialMediaIconLink>

                    <SocialMediaIconLink
                        style={{ color: "#ED4D4F" }}
                        href="https://www.instagram.com/payranked"
                        target="_blank"
                        aria-label="Instagram"
                    >
                        <FaInstagram />
                    </SocialMediaIconLink>

                    <SocialMediaIconLink
                        style={{ color: "#0170AD" }}
                        href="https://www.linkedin.com/company/payranked"
                        target="_blank"
                        aria-label="LinkedIn"
                    >
                        <FaLinkedin />
                    </SocialMediaIconLink>
                </SocialMediaIcons>

                {/* Display only if logged in (admin) */}
                {user ? (
                    <>
                        <SidebarHeader2>Admin Dashboard</SidebarHeader2>

                        <SidebarList>
                            <NavLinks
                                className="link"
                                href="/blog/admin/create"
                                smooth={true}
                                duration={1000}
                                spy={true}
                                exact="true"
                                offset={-80}
                            >
                                <SidebarListItems2>Write An Article</SidebarListItems2>
                            </NavLinks>
                        </SidebarList>
                    </>
                ) : null}
            </SidebarSubContainer>
        </SidebarContainer>
    );
};

export default BlogSidebar;
