import React from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {Dimensions} from 'react-native';
import Home from '../src/screens/Home';
import Jobs from '../src/screens/Jobs';
import Setting from '../src/screens/Settings';
import SignIn from '../src/screens/SignIn';
import SideMenu from '../src/screens/SideMenu';

const AuthRoute = createStackNavigator(
    {
        SignIn: {screen: SignIn},
    },
    {
        initialRouteName: 'SignIn',
        headerMode: 'none',
    },
);
const AppRoute = createDrawerNavigator(
    {
        Home: {screen: Home},
        Jobs: {screen: Jobs},
        Setting: {screen: Setting},
    },
    {
        initialRouteName: 'Home',
        contentComponent: SideMenu,
    },
);
const MainNavigation = createSwitchNavigator(
    {
        Auth: AuthRoute,
        App: AppRoute,
    },
    {
        initialRouteName: 'Auth',
    },
);
const Router = createAppContainer(MainNavigation);

export default Router
