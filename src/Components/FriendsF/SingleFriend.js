import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './singleFrined.css';

const SingleFriend = () => {
    const [frined, setFriend] = useState(null);
    const { id } = useParams();
    const Nid = Number(id);
    useEffect(() => {
        const url = 'https://jsonplaceholder.typicode.com/users';
        fetch(url)
            .then(res => res.json())
            .then(data => {
                const frinedDetails = data.find(fid => fid.id === Nid)
                setFriend(frinedDetails);
            })

    }, [Nid]);

    return (
        <div className='single-friend-main-div'>
            {frined ? (
                <div className="single-frined-second-div">
                    <h2 style={{textAlign:'center'}} >{frined.name}</h2>
                        <p>Username: {frined.username}</p>
                <p>Email: {frined.email}</p>
                <p>Phone: {frined.phone}</p>
                <p>Zipcode: {frined.address?.zipcode}</p>
                <p>Website: {frined.website}</p>
                <p>Company: {frined.company?.name}</p>

                </div>
            ) : (
                <p>Currently no freind is added in queue...</p>
            )}

        </div>
    );
};

export default SingleFriend;