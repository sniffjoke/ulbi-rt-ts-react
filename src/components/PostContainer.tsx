import React, {useState} from 'react';
import {postAPI} from "../services/PostService";
import PostItem from "./PostItem";
import {IPost} from "../models/IPost";

const PostContainer = () => {
    const [limit, setLimit] = useState(10)
    const {data: posts, error, isLoading, refetch} = postAPI.useFetchAllPostsQuery(limit,
        // {
        // pollingInterval: 1000
    // }
    )

    const [createPost, {error: createError}] = postAPI.useCreatePostMutation()

    const handleCreate = async () => {
        const title = prompt()
        await createPost({title, body: title} as IPost)

    }

    return (
        <div>
            <div className={'post__list'}>
                <button onClick={handleCreate}>Add new post</button>
                {/*<button onClick={() => refetch()}>REFETCH</button>*/}
                {isLoading && <h1>Идет загрузка...</h1>}
                {error && <h1>Произошла ошибка</h1>}
                {posts && posts.map(post =>
                    <PostItem key={post.id} post={post}/>
                )}
            </div>
        </div>
    );
};

export default PostContainer;
