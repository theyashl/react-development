import { useEffect, useState } from "react"
import ProjectCard from './card'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {userDataInitiate, userDataSuccess, userDataFailure, userDataReset} from "./redux/users/actions"


const Users = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    useEffect(() => {
        console.log("using effect");
        dispatch(userDataInitiate());
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => response.json())
            .then((data) => dispatch(userDataSuccess(data)))
            .catch((err) => dispatch(userDataFailure(err)));
    }, [])

    const navigateToUserDetails = (userId) => {
        navigate(`/users/details/${userId}`)
    }
    const userData = useSelector((state) => {
        return state.user.userData
    });
    if (useSelector((state) => state.user.loader)) {
        return <p>Loading...</p>
    }
    return (
        <div>
            {

                userData.map((project) => (

                    <div onClick={() => navigateToUserDetails(project.id)} key={ project.id }>
                        <ProjectCard
                            key={ project.id }
                            img_url="http://assets.stickpng.com/images/585e4bcdcb11b227491c3396.png"
                                name={project.name}
                                email={project.email}
                            />
                        </div>
                    
                ))
            }
        </div>
    );
}

export default Users;