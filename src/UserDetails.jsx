import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { userDataFailure, userDataInitiate, userDataSuccess, userDataReset } from './redux/users/actions';

const UserDetails = () => {
	const userId = useParams().userId;
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(userDataInitiate());
		fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
			.then((response) => response.json())
			.then((data) => dispatch(userDataSuccess([data])))
			.catch((err) => dispatch(userDataFailure(err)));
	}, [userId]);

	const userData = useSelector((state) => state.user.userData[0]);

	if (useSelector((state) => state.user.loader)) {
		return (
			<h3>Loading, Please Wait!!!</h3>
		);
    }
	return (
		<div>
			<div>
				<img height="100px" src="http://assets.stickpng.com/images/585e4bcdcb11b227491c3396.png"></img>
			</div>
			<div>
				<h1>{userData.name}</h1>
				<h3><i>Username: </i>{userData.username}</h3>
				<hr />
				<pre><i>Email: </i>{userData.email}</pre>
				<pre><i>Address: </i>{JSON.stringify(userData.address)}</pre>
				<pre><i>Phone: </i>{userData.phone}</pre>
				<pre><i>Website: </i>{userData.website}</pre>
				<pre><i>Company: </i>{JSON.stringify(userData.company)}</pre>
				<hr />
			</div>
		</div>
	);
}

export default UserDetails;