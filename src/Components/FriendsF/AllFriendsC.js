import React from 'react';
import './allFriendsC.css';
import { Link } from 'react-router-dom';

const AllFriendsC = (props) => {
    const { id, name, username, email, address, phone, website, company } = props.allData;
    const handleClick= ()=>{
        localStorage.setItem('currentClickedFriend', JSON.stringify({id}));
        let clickedFriends = JSON.parse(localStorage.getItem('visitedFriends')) || [];
        const frinedExits = clickedFriends.some(friend=>friend.name ===name);
        if(!frinedExits){
            clickedFriends.push({name,phone});
        }
        localStorage.setItem('visitedFriends', JSON.stringify(clickedFriends));
        
    }
    return (
        <div className='all-friends-child-main-div'>
            <div className="all-friends-child-second-div">
                <h2 style={{textAlign: 'center'}}>
                    <Link to={'/friends/' + name + '/' + id}  onClick={handleClick} >{name}</Link>
                </h2>
                <p>Username: {username}</p>
                <p>Email: {email}</p>
                <p>Phone: {phone}</p>
                <p>Zipcode: {address.zipcode}</p>
                <p>Website: {website}</p>
                <p>Company: {company.name}</p>
            </div>
        </div>
    );
};

export default AllFriendsC;
