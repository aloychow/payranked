import moment from 'moment'

import { api } from "../utils";
import { useCallback, useEffect, useMemo, useState } from "react";

const useFeaturedPosts = () => {
	const [posts, setPosts] = useState([]);

	const onFetchFeaturedPosts = useCallback(async () => {
		api.get("/posts/featured").then(({ data }) => {
			setPosts(data);
		})
	}, [])

	const featuredPosts = useMemo(() => {
		return posts.map(post => {
			return {
				...post,
				datetime: moment(post.createdAt).format("DD MMM YYYY")
			}
		})
	}, [posts])

	useEffect(() => {
		onFetchFeaturedPosts()
	}, [onFetchFeaturedPosts])

	return { featuredPosts }
}

export { useFeaturedPosts }