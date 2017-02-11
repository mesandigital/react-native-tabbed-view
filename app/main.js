/**
 * React Native Tabbed View
 * E&M Digital
 * Feb 10 2017
 */

import React, { Component } from 'react';
import { StyleSheet, Platform, StatusBar } from 'react-native';

import { Router, Scene, Reducer,} from 'react-native-router-flux';

import First from './views/first_view.js'
import Second from './views/second_view.js'
import Third from './views/third_view.js'
import Fourth from './views/fourth_view.js'
import Fifth from './views/fifth_view.js'

import TabIcon from './components/TabIcon';
import Icons from './icons.js';

const reducerCreate = params => {
    const defaultReducer = new Reducer(params);
    return (state, action) => {
        return defaultReducer(state, action);
    };
};

const getSceneStyle = (/* NavigationSceneRendererProps */ props, computedProps) => {
    const style = {
        flex: 1,
        backgroundColor: '#fff',
        shadowColor: null,
        shadowOffset: null,
        shadowOpacity: null,
        shadowRadius: null,
    };
    if (computedProps.isActive) {
        style.marginTop = computedProps.hideNavBar ? 0 : 64;
    }
    return style;
};


var Main  = React.createClass({
    render() {
        if (Platform.OS === "ios") StatusBar.setBarStyle('light-content', true);

        let iconColor = (Platform.OS === "ios") ? "#9A9A9A" : "rgba(255,255,255,.8)";
        let iconSelectedColor = (Platform.OS === "ios") ? "#2D303C" : "#fff";

        let FirstIcon = {type: Icons.Entypo, name: "home", size: 24, color: iconColor, selected: iconSelectedColor};
        let SecondIcon = {type: Icons.Octicons, name: "search", size: 20, color: iconColor, selected: iconSelectedColor};
        let ThirdIcon = {type: Icons.Ionicons, name: "ios-musical-notes", size: 24, color: iconColor, selected: iconSelectedColor};
        let FourthIcon = {type: Icons.MaterialIcons, name: "message", size: 24, color: iconColor, selected: iconSelectedColor};
        let FifthIcon = {type: Icons.FontAwesome, name: "user", size: 24, color: iconColor, selected: iconSelectedColor};

        return (
            <Router createReducer={reducerCreate}
                    getSceneStyle={getSceneStyle}
                    navigationBarStyle={styles.navigationBarStyle}
                    titleStyle={styles.titleStyle} >
                <Scene key="root">
                    <Scene key="tabbar" initial>
                        <Scene key="main" tabs
                               tabBarStyle={styles.tabBarStyle}
                               tabBarSelectedItemStyle={styles.tabBarSelectedItemStyle}>

                            <Scene key="tab1" initial title="First" icon={TabIcon} iconInfo={FirstIcon}>
                                <Scene key="first_view" component={First} title="First View"/>
                            </Scene>

                            <Scene key="tab2" title="Second" icon={TabIcon} iconInfo={SecondIcon}>
                                <Scene key="second_view" component={Second} title="Second View" />
                            </Scene>

                            <Scene key="tab3" title="Third" icon={TabIcon} iconInfo={ThirdIcon}>
                                <Scene key="third_view" component={Third} title="Third View"/>
                            </Scene>

                            <Scene key="tab4" title="Fourth" icon={TabIcon} iconInfo={FourthIcon}>
                                <Scene key="fourth_view" component={Fourth} title="Fourth View"/>
                            </Scene>

                            {
                                Platform.OS === "ios" &&
                                <Scene key="tab5"  title="Fifth" icon={TabIcon} iconInfo={FifthIcon}>
                                    <Scene key="fifth_view" component={Fifth} title="Fifth View"/>
                                </Scene>
                            }


                        </Scene>
                    </Scene>
                </Scene>
            </Router>
        );
    }

});

const styles = StyleSheet.create({
    navigationBarStyle: {
        backgroundColor: '#CB1B22',
        ...Platform.select({
            android: {
                borderBottomWidth: 0
            },
        }),
    },

    titleStyle: {
        color: "#FFFFFF",
        fontWeight:"500",
        fontSize: 17,
        ...Platform.select({
            ios: {
            },
            android: {
                alignSelf: 'flex-start',
                textAlign: 'left',
                paddingLeft: 15
            },
        }),
    },

    tabBarStyle: {
        height: 45,
        ...Platform.select({
            ios: {
                backgroundColor: '#FEFEFE',
                borderTopWidth:1,
                borderColor: "#F2F2F2",
            },
            android: {
                backgroundColor: '#CB1B22',
                top: 54,
            },
        }),
    },

    tabBarSelectedItemStyle: {
        ...Platform.select({
            ios: {
                backgroundColor: '#FEFEFE'
            },
            android: {
                borderBottomWidth:4,
                borderBottomColor: "#F2F2F2",
            },
        }),
        height: 45
    },

    iconColor: {
        ...Platform.select({
            ios: {
                backgroundColor: '#9A9A9A'
            },
            android: {
            },
        }),
        height: 45
    },

});

module.exports = Main;
