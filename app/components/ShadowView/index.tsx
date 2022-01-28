//import liraries
import { useTheme } from '@react-navigation/native';
import React, { Component } from 'react';
import { View, Text, StyleSheet, ColorValue } from 'react-native';


interface Props {
    shadowHeight: number | string,
    shadowWidth: number | string,
    shadowColor?: ColorValue,
    shadowOffset?: {
        width: number,
        height: number
    } | undefined,
    shadowOpacity?: number,
    shadowRadius?: number,
    borderRadius?: number,
    elevation?: number
}
// create a component
const ShadowView: React.FC<Props> = (props) => {
    const { 
        shadowHeight, 
        shadowWidth, 
        shadowColor = '#000', 
        shadowOffset, 
        shadowOpacity = 1, 
        shadowRadius = 0, 
        borderRadius = 0, 
        elevation = 0 
    } = props;

    const { colors } = useTheme();
    return (
        <View
            style={{
                height: shadowHeight,
                width: shadowWidth,
                backgroundColor: colors.background,
                position: 'absolute',
                shadowColor: shadowColor,
                shadowOffset: shadowOffset,
                shadowOpacity: shadowOpacity,
                shadowRadius: shadowRadius,
                borderRadius: borderRadius,
                elevation: elevation,
            }}
        />
    );
};

//make this component available to the app
export default ShadowView;
