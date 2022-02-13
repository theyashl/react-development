import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom"
import { Card, CardBody, CardTitle, CardSubtitle, CardText, Button } from "reactstrap";
import { blogDataFailure, blogDataInitiate, blogDataSuccess } from "./redux/blog/actions";

const BlogDetails = () => {
    const blogId = useParams().blogId;
    const dispatch = useDispatch();
    let authorName = "";
    useEffect(() => {
        dispatch(blogDataInitiate());
        fetch(`https://jsonplaceholder.typicode.com/posts/${blogId}`)
            .then((response) => response.json())
            .then((data) => dispatch(blogDataSuccess([data])))
            .then((err) => dispatch(blogDataFailure(err)));
    }, [blogId]);

    const blogData = useSelector((state) => state.blog.blogData)[0];

    if (!blogData) {
        return (
            <h3>Loading, Please Wait...!</h3>
            )
    }
    return (
        <div>
            <h1>{blogData.title}</h1>
            <h3><i>ID: </i>{blogData.id}</h3>
                <hr />
                <pre><i>Content: </i>{blogData.body}</pre>
                <hr />
            </div>
        )
}

export default BlogDetails;