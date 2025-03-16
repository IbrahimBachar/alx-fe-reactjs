// import { useQuery } from 'react-query';
import { useQuery } from "@tanstack/react-query";

const fetchPosts = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    if(!res.ok) {
        throw new Error('Network response was not ok');
    }
    return res.json();
};

const PostsComponent = () => {
   const { data, isError, isLoading, refetch } = useQuery({
        queryKey: ["posts"],
        queryFn: fetchPosts,
        staleTime: 5000,
        cacheTime: 60000,
        refetchOnWindowFocus: false,
        keepPreviousData: true,
    });

    if (isLoading) return <div>Loading posts...</div>;
    if (isError) return <div>Error: {error.message}</div>;

    return (
        <div>
            <button onClick={() => refetch()}>Refetch</button>
            <ul>
                {data.slice(0, 10).map((post) => (
                    <li key={post.id}>
                        <h3>{post.title}</h3>
                        <p>{post.body}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PostsComponent;