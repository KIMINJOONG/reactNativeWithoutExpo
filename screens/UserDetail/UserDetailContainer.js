import React, { Component } from 'react';
import UserDetailPresenter from './UserDetailPresenter';

class UserDetailContainer extends Component {
    componentDidMount(){
        this.props.loadUser();
        const me = this.props.me;
        console.log(me);
        if(!me) {
            alert('로그인이 필요합니다.');
            this.props.navigation.navigate('UserLogin');
        }
    }
    handleLogout = () => {
        this.props.logoutAction();
        this.props.navigation.navigate('UserLogin');
        alert('로그아웃 되었습니다.');
        
    };
    render(){
        return(
            <UserDetailPresenter 
                handleLogout={this.handleLogout}
                me={this.props.me}
            />
        );
    }
}

export default UserDetailContainer;