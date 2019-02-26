import React, { Component } from 'react';
import { connect } from 'react-redux';
import { filter } from 'lodash';
import { fetchUsers } from '../actions/UserAcrion'
import Sidebar from './sidebar';
import Search from './search';




class Main extends Component{
    
    constructor(props){
        super(props);

        this.state = {
            searchTerm: ''
        }
        this.filterUsers= [];
        this._filterList = this._filterList.bind(this);

    }
    componentWillMount(){
        this.props.dispatch(fetchUsers());
    }

    _filterList(event){
        this.setState({
            searchTerm: event.target.value
        });
    }
    _filterResults() {
        var input = this.state.searchTerm;
        var resultsFiltered = [...this.props.users].map((user) => {
            
        })
        return resultsFiltered;

        console
    }


    render(){
        const userList = this.props.users.users;
        const filterTerm = this.state.searchTerm;
        if(filterTerm){
            this.filterUsers = filter(userList, (user) => {
                if(user.first_name.toLowerCase().indexOf(filterTerm.toLowerCase()) > -1 || user.last_name.toLowerCase().indexOf(filterTerm.toLowerCase()) > -1){
                    return user;
                }
            });
        }else{
            this.filterUsers = userList;
        }


        return(
            <main role="main">
                <div className="container-fluid">
                    <div className="row">
                        <Sidebar />
                        <div className="col-md-8 searchsection">
                            <div className="main-header">
                                <h2 className="ml2">All Users</h2>
                                <div className="ml-auto settingicon">
                                    <button className="ml-2 navbar-toggler">
                                        <i className="fa fa-cog"></i>
                                    </button>
                                    <button className="ml-2 navbar-toggler">
                                        <i className="fa fa-cog"></i>
                                    </button>
                                    <button className="ml-2 navbar-toggler">
                                        <i className="fa fa-cog"></i>
                                    </button>
                                    <button className="ml-2 navbar-toggler">
                                        <i className="fa fa-cog"></i>
                                    </button>
                                
                                </div>
                            </div>
                            <Search  userData={this.filterUsers} onChangeEvent={this._filterList}/>
                            
                        </div>
                    </div>
                </div>
            </main>
        
        )
    }

}

const mapStateToProps = state => {
    return {
        users: state.users,
        error: state.users.error
    };
}
 export default connect(mapStateToProps)(Main);