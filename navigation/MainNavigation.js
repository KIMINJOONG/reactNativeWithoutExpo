import {createStackNavigator, createAppContainer } from "react-navigation";
import UserLoginScreen from '../screens/UserLogin';
import TabNavigation from "./TabNavigation";
import UserJoinScreen from "../screens/UserJoin";

const MainNavigation = createStackNavigator(
    {
        UserLogin: {
            screen: UserLoginScreen,
            navigationOptions: {
                title: '로그인',
            }
        },
        Tabs:{
            screen: TabNavigation, navigationOptions: {header: null},
        },
        UserJoin: {
            screen: UserJoinScreen,
            navigationOptions: {
                title: '회원가입'
            }
        },
    }
    
);

export default createAppContainer(MainNavigation);