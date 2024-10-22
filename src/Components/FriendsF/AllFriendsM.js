import React, { useEffect, useState } from 'react';
import AllFriendsC from './AllFriendsC';

const AllFriendsM = () => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [data, setData] = useState(null);

    useEffect(() => {
        const url = 'https://jsonplaceholder.typicode.com/users';
        fetch(url)
            .then((res) => {
                if (!res.ok) {
                    throw new Error('Fetching Data Failed');
                }
                return res.json();
            })
            .then((data) => {
                setData(data);
                setLoading(false);
            })
            .catch((error) => {
                setError(error.message);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div>
            {data && data.map((user,index) => (
                <AllFriendsC  allData={user} key={index}></AllFriendsC>
            ))}
        </div>
    );
};

export default AllFriendsM;
