import React from 'react';

const SearchResult = (props) => {



    return(
        <div className="resultrow"> 
            <div className="userimage"> <img src={props.userList.avatar} alt="user image" /></div>
            <div className="username">{props.userList.first_name +' '+ props.userList.last_name}</div>
            <div className="userDate"> {props.userList.date}</div>
            <div className="creationDate">{props.userList.creation_date}</div>
            <div className="option">
                <button className="ml-2 navbar-toggler">
                    <i className="fa fa-bars" aria-hidden="true"></i>
                </button>
            </div>
           
        </div>
         
    )
}

export default SearchResult;