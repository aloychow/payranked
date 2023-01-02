import SinglePageSection from "../../components/BlogPage/PostPage/BlogSinglePage";
import { BlogLayout } from "../../layouts";

const BlogSingle = () => {
	return <SinglePageSection />
};

BlogSingle.getLayout = (page) => {
	return (
		<BlogLayout>
			{page}
		</BlogLayout>
	)
}

export default BlogSingle;
