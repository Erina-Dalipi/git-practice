function PostCard({ post }) {
    return (
        <div style={{
            border: "1px solid #ccc",
            padding: "10px",
            margin: "10px",
            borderRadius: "8px"
        }}>
            <p><b>ID:</b> {post.id}</p>
            <p><b>User ID:</b> {post.userId}</p>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
        </div>
    );
}

export default PostCard;