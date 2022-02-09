import { useEffect, useState } from "react"
import ProjectCard from './card'
import { useNavigate } from 'react-router-dom'


const Users = () => {
    let [userData, setUserData] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        const requestOptions = {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        }
        fetch("https://reqres.in/api/users", requestOptions)
            .then((response) => response.json())
            .then((data) => setUserData(data.data))
            .catch((err) => console.log(err))
    }, [])

    const navigateToUserDetails = (userId) => {
        navigate(`/details/${userId}`)
    }
    return (
        <div>
            {
                userData.map((project) => (
                    
                        <div onClick={() => navigateToUserDetails(project.id)}>
                            <ProjectCard
                                img_url={project.avatar}
                                name={project.first_name}
                                description={project.email}
                                img_alt_text={project.last_name}
                            />
                        </div>
                    
                ))
            }
        </div>
    );
}

export default Users;