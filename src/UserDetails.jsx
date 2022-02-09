import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const UserDetails = () => {
    const params = useParams();
    const userId = params.userId;
	const [userData, setUserData] = useState();
	debugger;
	useEffect(() => {
		const requestOptions = {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
			},
		}
		fetch(`https://reqres.in/api/users/${userId}`, requestOptions)
			.then((response) => response.json())
			.then((data) => setUserData(data.data))
			.catch((err) => console.log(err))
	}, [userId]);

	if (!userData) {
		return (
			<h3>Loading, Please Wait!!!</h3>
		);
    }
	return (
		<div>
			<div>
				<img src={userData.avatar}></img>
			</div>
			<div>
				<h1>{userData.first_name}</h1>
				<h3>{userData.last_name}</h3>
				<hr />
				<pre>{ userData.email }</pre>
			</div>
		</div>
	);
}

export default UserDetails;