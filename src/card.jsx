import {
    Card,
    CardBody,
    CardTitle,
    CardSubtitle,
    CardText,
    Button,
    CardImg,
} from "reactstrap";


const ProjectCard = (props) => {

    const { img_url, name, email, img_alt_text } = props
    return (
        <>
        <Card>
        <CardImg
                    alt={img_alt_text}
                    src={img_url}
            style={{
                width: '100px',
                height: '100px',
            }}
            width="100%"
        />
        <CardBody>
            <CardTitle tag="h5">
                {name}
            </CardTitle>
            <CardText>
                {email}
            </CardText>

        </CardBody>
    </Card>
        </>
    )
};

export default ProjectCard;