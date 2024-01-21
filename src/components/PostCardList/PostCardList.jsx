import { useContext } from "react";
import PostCard from "../PostCard";
import PostCardContext from "../../providers/PostsProvider"

function PostCardList() {

    const { posts } = useContext(PostCardContext);

    return ((posts.length == 0) ?
        "loading...." :
        posts.map((post) => <PostCard
            content={post.text}
            image={post.image}
            authorFirstName={post.owner.firstName}
            key={post.id}
        />)
    );
}

export default PostCardList;