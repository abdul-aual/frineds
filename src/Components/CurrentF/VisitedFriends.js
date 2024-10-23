import React, { useEffect, useState } from 'react';
import './visited.css';

const VisitedFriends = () => {
    const [friend, setFriends] = useState([]);

    useEffect(() => {
        const storedFriends = JSON.parse(localStorage.getItem('visitedFriends')) || [];
        setFriends(storedFriends);
    }, []);

    return (
        <div>
            {friend.length ? (
                friend.map((f, index) => (
                    <div className='visited-friends-main-div' key={index}>
                        <div className='visited-friends-second-div'>    
                        <p>Name: {f.name}</p>
                        <p>Phone: {f.phone}</p>
                        </div>
                    </div>
                ))
            ) : (
                <p>No friend visited yet</p>
            )}
        </div>
    );
};

export default VisitedFriends;
