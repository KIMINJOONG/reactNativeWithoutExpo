import React from "react";
import { Platform } from "react-native";
import {createBottomTabNavigator, createAppContainer} from "react-navigation";
import UserDetailScreen from '../screens/UserDetail';
import { BG_COLOR } from "../constants/Colors";
import { createStack } from "./config";



const TabNavigation = createBottomTabNavigator(
    {
        UserDetail: {
            screen: createStack(UserDetailScreen, "UserDetail"),
            navigationOptions: {
            }
            
        },
    },
    {
        tabBarOptions: {
            showLabel: false,
            style: {
                backgroundColor: BG_COLOR
            }
        }
    }

);

export default createAppContainer(TabNavigation);