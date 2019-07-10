import {createStackNavigator, createAppContainer } from "react-navigation";
import TestScreen from '../screens/test';
import UserLoginScreen from '../screens/UserLogin';
import TabNavigation from "./TabNavigation";

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
    }
    
);

export default createAppContainer(MainNavigation);