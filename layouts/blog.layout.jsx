import styled from "styled-components";
import BlogSidebar from "../components/BlogPage/MainPage/BlogSidebar";

const Layout = styled.div`
  background: #f4f9ff;
  padding: 4rem 0;
`;

const Container = styled.div`
  width: 100%;
  max-width: 80rem;
  margin: 0 auto;

  display: grid;
  grid-template-columns: 3fr 1.3fr;
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: flex-start;

  @media screen and (max-width: 768px) {
    grid-gap: 1rem;
    grid-template-columns: 1fr;
  }
`;

const BlogLayout = ({ children }) => {
	return (
		<Layout>
			<Container>
				<div>{children}</div>
				<BlogSidebar />
			</Container>
		</Layout>
	);
};

export { BlogLayout };
