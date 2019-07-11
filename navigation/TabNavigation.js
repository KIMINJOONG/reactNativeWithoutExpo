import React from "react";
import { Platform } from "react-native";
import {createBottomTabNavigator, createAppContainer} from "react-navigation";
import UserDetailScreen from '../screens/UserDetail';
import { BG_COLOR } from "../constants/Colors";
import { createStack } from "./config";
import TabBarIcon from '../components/TabBarIcon';


const TabNavigation = createBottomTabNavigator(
    {
        UserDetail: {
            screen: createStack(UserDetailScreen, "UserDetail"),
            navigationOptions: {
                tabBarIcon: ({focused}) => (
                    <TabBarIcon 
                        focused={focused} 
                        name="man" 
                    />
                )
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