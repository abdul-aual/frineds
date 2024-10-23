import React, { useEffect, useState } from 'react';

const CurrentFriend = () => {
    const [currentf, setCurrentF] = useState(null);
    const bal = JSON.parse(localStorage.getItem('currentClickedFriend'));
    const id = bal?.id;

    useEffect(() => {
        if (id) {  // Ensure `id` exists before fetching data
            const url = 'https://jsonplaceholder.typicode.com/users';
            fetch(url)
                .then(res => res.json())
                .then(data => {
                    const currentFriend = data.find(fid => fid.id === id);
                    setCurrentF(currentFriend);
                })
                .catch(err => console.error('Failed to fetch friend data:', err));
        }
    }, [id]);

    return (
        <div className='single-friend-main-div'>
            {
                id ? (
                    currentf ? (
                        <div className='single-frined-second-div'>
                            <h2 style={{textAlign:'center'}}>Name: {currentf.name}</h2>
                            <p>Username: {currentf.username}</p>
                            <p>Email: {currentf.email}</p>
                            <p>Phone: {currentf.phone}</p>
                            <p>Zipcode: {currentf.address?.zipcode}</p>
                            <p>Website: {currentf.website}</p>
                            <p>Company: {currentf.company.name}</p>
                        </div>
                    ) : (
                        <p>Loading current friend data...</p>
                    )
                ) : (
                    <p>No current friend is available now</p>
                )
            }
        </div>
    );
};

export default CurrentFriend;
