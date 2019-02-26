import React, { Component } from 'react';
import SearchResult from '../containers/SearchResult';


class Search extends Component{

    render(){
        return(
            <div className="searchresultbox">
                <div className="searchinput">
                    <button className="searchbtn">
                        <i className="fa fa-search"></i>
                    </button>
                    
                    <form>
                        <input type="text" name="search" id="search" placeholder={'Search ...'} onChange={this.props.onChangeEvent} />
                    </form>
                </div>
                <div className="userResult">
                    {console.log('userdata', this.props.userData)}
                    {
                        this.props.userData.map(
                            (user) =>{
                                return <SearchResult userList={user} key={user.id}/>
                            }
                        )
                    }

                </div>
                
            </div>
        )
    }
}

export default Search;