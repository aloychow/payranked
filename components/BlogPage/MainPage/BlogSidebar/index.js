import Link from "next/link";

import { Context } from "../../../../context/Context";
import { useFeaturedPosts } from "../../../../hooks";
import { useState, useEffect, useContext, Fragment } from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { api, categoryColors, getUpload, slugify } from "../../../../utils";

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
	const [cats, setCats] = useState([]);

	const { user } = useContext(Context);
	const { featuredPosts } = useFeaturedPosts();

	// Get categories
	useEffect(() => {
		api.get("/categories").then(({ data }) => {
			setCats(data);
		})
	}, []);

	return (
		<SidebarContainer>
			<SidebarSubContainer>
				<SidebarHeader>Featured Posts</SidebarHeader>
				{featuredPosts.map((post, index) => (
					<Fragment key={index}>
						<Link href={`/blog/${slugify(post.title)}`}>
							<SidebarFeaturedItem>
								<SidebarFeaturedRightWrapper>
									<SidebarFeaturedTitle>{post.title}</SidebarFeaturedTitle>
									<SidebarFeaturedBottomWrapper>
										<div
											style={{
												color: categoryColors[post.category] || "black",
											}}
										>
											{post.category}
										</div>
										<div style={{ fontWeight: "400", color: "#dbdbdb" }}>
											︱
										</div>
										<div style={{ fontWeight: "400" }}> {post.datetime}</div>
									</SidebarFeaturedBottomWrapper>
								</SidebarFeaturedRightWrapper>
								{post.image && (
									<SidebarFeaturedImage
										src={getUpload(post.image)}
										alt={post.image
											.split("_")[1]
											.replaceAll("-", " ")
											.slice(0, -4)}
									/>
								)}
							</SidebarFeaturedItem>
						</Link>
						{index > 0 && <Divider />}
					</Fragment>
				))}
			</SidebarSubContainer>
			<SidebarSubContainer>
				<SidebarHeader>Explore Topics</SidebarHeader>
				<SidebarList>
					{cats.map((cat, index) => (
						<Fragment key={index}>
							<SidebarListSubContainer>
								<SidebarListArrow src={RightArrow} alt="Right arrow symbol" />
								<Link
									href={`/blog/?cat=${cat.name}`}
									style={{
										flexGrow: 1,
										textDecoration: "none",
										marginRight: "0.5rem",
									}}
								>
									<SidebarListItems>{cat.name}</SidebarListItems>
								</Link>
							</SidebarListSubContainer>
							{index !== cats.length - 1 ? <Divider /> : null}
						</Fragment>
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
					<Fragment>
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
					</Fragment>
				) : null}
			</SidebarSubContainer>
		</SidebarContainer>
	);
};

export default BlogSidebar;
