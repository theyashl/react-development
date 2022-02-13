import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom"
import BlogCard from "./BlogCard";
import { blogDataFailure, blogDataInitiate, blogDataSuccess } from "./redux/blog/actions";

const Blogs = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(blogDataInitiate());
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then((response) => response.json())
            .then((data) => dispatch(blogDataSuccess(data)))
            .then((err) => dispatch(blogDataFailure(err)))
    }, []);

    const navigateToBlogDetails = (blogId) => {
        navigate(`/blogs/${blogId}`)
    }

    const blogData = useSelector((state) => {
        return state.blog.blogData
    });

    if (useSelector((state) => state.blog.loader)) {
        return <p>Loading...</p>
    }

    return (
        <>
            <div>
                <h1>Blogs</h1>
            </div>
            <hr />
            <div>
            {
                blogData.map((blog) => (
                    <div onClick={() => navigateToBlogDetails(blog.id)} key={blog.id}>
                        <BlogCard
                            key={blog.id}
                            id={blog.id}
                            title={blog.title}
                            body={blog.body}
                        />
                    </div>
                    ))
            }
            </div>
        </ >
        )
}


export default Blogs;