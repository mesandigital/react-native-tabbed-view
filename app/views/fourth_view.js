/**
 * React Native Tabbed View
 * E&M Digital
 * Feb 10 2017
 */
'use strict';

import React, { Component } from 'react';
var { View, Text } = require('react-native');

export default class extends Component {
    constructor(props) {
        super(props);

        this.state = {

        };
    }

    render() {
        return (
            <View style={{justifyContent: "center", alignItems: "center", flex: 1}}>

                <Text style={{fontSize: 20}}>Fouth View</Text>

            </View>
        )
    }
};

