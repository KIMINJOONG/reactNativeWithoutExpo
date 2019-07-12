import React from "react";
import { Platform } from "react-native";
import {createBottomTabNavigator, createAppContainer} from "react-navigation";
import UserDetailScreen from '../screens/UserDetail';
import StoreMapScreen from '../screens/StoreMap';
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
        StoreMap: {
            screen: createStack(StoreMapScreen, "StoreMap"),
            navigationOptions: {
                tabBarIcon: ({focused}) => (
                    <TabBarIcon 
                        focused={focused} 
                        name="map" 
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