import React, { Component } from 'react';

class Sidebar extends Component {
    render() {
        return (
            <div className="col-md-4 sidebar">
                 <div className="sidebar-header">
                    {'Users'}
                 </div>
                 <ul className="sidenav">
                     <li><a href=''> <i className="fa fa-user" aria-hidden="true"></i>All Users</a></li>
                     <li><a href=''><i className="fa fa-star" aria-hidden="true"></i>Favorites</a></li>
                     <li><a href=''><i className="fa fa-tools" aria-hidden="true"></i>Administrator</a></li>
                     <li><a href=''><i className="fa fa-users-cog" aria-hidden="true"></i>Non-Admins</a></li>
                     <li><a href=''><i className="fa fa-file-archive" aria-hidden="true"></i>Archived</a></li>
                 </ul>
            </div>
        );
    }
}

export default Sidebar;
