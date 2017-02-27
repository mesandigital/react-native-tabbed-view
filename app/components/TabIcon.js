/**
 * React Native Tabbed View
 * E&M Digital
 * Feb 10 2017
 */

import React, { PropTypes, Component } from 'react';
import { Text, View, Dimensions, Platform } from 'react-native';

//https://exponent.github.io/vector-icons/
import Icon from 'react-native-vector-icons/Entypo'
import Icon2 from 'react-native-vector-icons/EvilIcons'
import Icon3 from 'react-native-vector-icons/FontAwesome'
import Icon4 from 'react-native-vector-icons/Foundation'
import Icon5 from 'react-native-vector-icons/Ionicons'
import Icon6 from 'react-native-vector-icons/MaterialCommunityIcons'
import Icon7 from 'react-native-vector-icons/MaterialIcons'
import Icon8 from 'react-native-vector-icons/Octicons'
import Icon9 from 'react-native-vector-icons/SimpleLineIcons'
import Icon10 from 'react-native-vector-icons/Zocial'

import Icons from '../icons';

export default class extends Component {
    constructor(props) {
        super(props);

        this.state = {

        };
    }

    render() {
        let iconInfo = this.props.iconInfo;
        let iconType = iconInfo.type;
        let iconName = iconInfo.name;
        let title = iconInfo.title;
        let iconSize = iconInfo.size;
        let iconColor = iconInfo.color;
        let iconSelectedColor = iconInfo.selected;

        let icon;

        if (iconType === Icons.Entypo)
            icon = <Icon name={iconName} size={iconSize} style={{height: iconSize}} color={this.props.selected ? iconSelectedColor : iconColor }/>
        else if (iconType === Icons.EvilIcons)
            icon = <Icon2 name={iconName} size={iconSize} style={{height: iconSize}} color={this.props.selected ? iconSelectedColor : iconColor }/>
        else if (iconType === Icons.FontAwesome)
            icon = <Icon3 name={iconName} size={iconSize} style={{height: iconSize}} color={this.props.selected ? iconSelectedColor : iconColor }/>
        else if (iconType === Icons.Foundation)
            icon = <Icon4 name={iconName} size={iconSize} style={{height: iconSize}} color={this.props.selected ? iconSelectedColor : iconColor }/>
        else if (iconType === Icons.Ionicons)
            icon = <Icon5 name={iconName} size={iconSize} style={{height: iconSize}} color={this.props.selected ? iconSelectedColor : iconColor }/>
        else if (iconType === Icons.MaterialCommunityIcons)
            icon = <Icon6 name={iconName} size={iconSize} style={{height: iconSize}} color={this.props.selected ? iconSelectedColor : iconColor }/>
        else if (iconType === Icons.MaterialIcons)
            icon = <Icon7 name={iconName} size={iconSize} style={{height: iconSize}} color={this.props.selected ? iconSelectedColor : iconColor }/>
        else if (iconType === Icons.Octicons)
            icon = <Icon8 name={iconName} size={iconSize} style={{height: iconSize}} color={this.props.selected ? iconSelectedColor : iconColor }/>
        else if (iconType === Icons.SimpleLineIcons)
            icon = <Icon9 name={iconName} size={iconSize} style={{height: iconSize}} color={this.props.selected ? iconSelectedColor : iconColor }/>
        else if (iconType === Icons.Zocial)
            icon = <Icon10 name={iconName} size={iconSize} style={{height: iconSize}} color={this.props.selected ? iconSelectedColor : iconColor }/>
        else
            icon =
                <View style={{borderWidth:1,
                    borderColor: "red",
                    justifyContent: "center"}}/>


        return (


            <View style={{justifyContent: "center",  alignItems: "center"}}>
                {icon}
                {
                    (title !== null) &&
                    <Text style={{
                        fontSize: 10, color: this.props.selected ? iconSelectedColor : iconColor }}>
                        {title}
                    </Text>
                }
            </View>
        )
    }
};
