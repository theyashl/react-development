import { Card, CardBody, CardTitle, CardSubtitle, CardText } from "reactstrap";

const BlogCard = (props) => {
	const { id, title, body } = props;
	return (
        <div>
            <Card body>
                <CardBody>

                    <CardSubtitle
                        className="mb-2 text-muted"
                        tag="h6"
                    >
                        {id}
                    </CardSubtitle>
                    <CardTitle tag="h5">
                        {title}
                    </CardTitle>
                    <CardText>
                        {body.slice(0,15)+'...'}
                    </CardText>
                </CardBody>
            </Card>
        </div>
		)
}

export default BlogCard;