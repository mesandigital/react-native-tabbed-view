/**
 * Created by mosesesan on 10/02/2017.
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
        let iconSize = iconInfo.size;
        let iconColor = iconInfo.color;
        let iconSelectedColor = iconInfo.selected;

        if (iconType === Icons.Entypo)
            return <Icon name={iconName} size={iconSize} style={{height: iconSize}} color={this.props.selected ? iconSelectedColor : iconColor }/>
        else if (iconType === Icons.EvilIcons)
            return <Icon2 name={iconName} size={iconSize} style={{height: iconSize}} color={this.props.selected ? iconSelectedColor : iconColor }/>
        else if (iconType === Icons.FontAwesome)
            return <Icon3 name={iconName} size={iconSize} style={{height: iconSize}} color={this.props.selected ? iconSelectedColor : iconColor }/>
        else if (iconType === Icons.Foundation)
            return <Icon4 name={iconName} size={iconSize} style={{height: iconSize}} color={this.props.selected ? iconSelectedColor : iconColor }/>
        else if (iconType === Icons.Ionicons)
            return <Icon5 name={iconName} size={iconSize} style={{height: iconSize}} color={this.props.selected ? iconSelectedColor : iconColor }/>
        else if (iconType === Icons.MaterialCommunityIcons)
            return <Icon6 name={iconName} size={iconSize} style={{height: iconSize}} color={this.props.selected ? iconSelectedColor : iconColor }/>
        else if (iconType === Icons.MaterialIcons)
            return <Icon7 name={iconName} size={iconSize} style={{height: iconSize}} color={this.props.selected ? iconSelectedColor : iconColor }/>
        else if (iconType === Icons.Octicons)
            return <Icon8 name={iconName} size={iconSize} style={{height: iconSize}} color={this.props.selected ? iconSelectedColor : iconColor }/>
        else if (iconType === Icons.SimpleLineIcons)
            return <Icon9 name={iconName} size={iconSize} style={{height: iconSize}} color={this.props.selected ? iconSelectedColor : iconColor }/>
        else if (iconType === Icons.Zocial)
            return <Icon10 name={iconName} size={iconSize} style={{height: iconSize}} color={this.props.selected ? iconSelectedColor : iconColor }/>
        else
        return (
            <View style={{borderWidth:1,
                borderColor: "red",
                justifyContent: "center",
                alignItems: "center", height:20, width: 20}}>

            </View>
        )
    }
};
