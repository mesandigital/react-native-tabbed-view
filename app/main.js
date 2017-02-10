/**
 * React Native Tabbed View
 * E&M Digital
 * Feb 10 2017
 */

import React, { Component } from 'react';
import {StyleSheet} from 'react-native';

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
        let FirstIcon = {type: Icons.Entypo, name: "home", size: 24, color: '#9A9A9A', selected: '#2D303C'};
        let SecondIcon = {type: Icons.Octicons, name: "search", size: 20, color: '#9A9A9A', selected: '#2D303C'};
        let ThirdIcon = {type: Icons.Ionicons, name: "ios-musical-notes", size: 24, color: '#9A9A9A', selected: '#2D303C'};
        let FourthIcon = {type: Icons.MaterialIcons, name: "message", size: 24, color: '#9A9A9A', selected: '#2D303C'};
        let FifthIcon = {type: Icons.FontAwesome, name: "user", size: 24, color: '#9A9A9A', selected: '#2D303C'};

        return (
            <Router createReducer={reducerCreate} getSceneStyle={getSceneStyle}>
                <Scene key="root" hideNavBar hideTabBar>
                    <Scene key="tabbar" initial>
                        <Scene key="main" tabs
                               tabBarStyle={styles.tabBarStyle}
                               tabBarSelectedItemStyle={styles.tabBarSelectedItemStyle}>

                            <Scene key="tab1" initial title="Home" icon={TabIcon} iconInfo={FirstIcon}>
                                <Scene key="first_view" component={First} title="First View"/>
                            </Scene>

                            <Scene key="tab2" title="Directory" icon={TabIcon} iconInfo={SecondIcon}>
                                <Scene key="second_view" component={Second} title="Second View" />
                            </Scene>

                            <Scene key="tab3" title="Calendar" icon={TabIcon} iconInfo={ThirdIcon}>
                                <Scene key="third_view" component={Third} title="Third View"/>
                            </Scene>

                            <Scene key="tab4" title="Restaurant" icon={TabIcon} iconInfo={FourthIcon}>
                                <Scene key="fourth_view" component={Fourth} title="Fourth View"/>
                            </Scene>

                            <Scene key="tab5"  title="Music" icon={TabIcon} iconInfo={FifthIcon}>
                                <Scene key="fifth_view" component={Fifth} title="Fifth View"/>
                            </Scene>

                        </Scene>
                    </Scene>
                </Scene>
            </Router>
        );
    }

});

const styles = StyleSheet.create({
    tabBarStyle: {
        backgroundColor: '#FEFEFE',
        borderTopWidth:1, borderColor: "#F2F2F2", height: 45
    },
    tabBarSelectedItemStyle: {
        backgroundColor: '#FEFEFE',
        height: 45
    },
});

module.exports = Main;
