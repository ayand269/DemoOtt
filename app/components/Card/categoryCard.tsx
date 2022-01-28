//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, ImageSourcePropType, ColorValue, ImageBackground } from 'react-native';
import ShadowView from '../ShadowView';

interface Props {
    image: ImageSourcePropType,
    title: string
}

// create a component
const CategoryCard: React.FC<Props> = (props) => {
    const { image, title } = props;
    return (
        <View style={{ marginHorizontal: 8 }}>
            <View
                style={{
                    width: 170,
                    alignItems: 'center'
                }}
            >
                <ShadowView
                    shadowHeight={70}
                    shadowWidth={150}
                    shadowOffset={{
                        width: 0,
                        height: 8
                    }}
                    borderRadius={8}
                    shadowColor={'#DE1029'}
                    shadowOpacity={0.5}
                    shadowRadius={8}
                    elevation={10}
                />
            </View>

            <ImageBackground
                source={image}
                style={styles.container}
                imageStyle={{
                    height: 70,
                    width: 170,
                    borderRadius: 8,
                    resizeMode: 'cover'
                }}
            >
                <View
                    style={{
                        backgroundColor: '#DE1029aa',
                        flex: 1,
                        borderRadius: 8,
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                >
                    <Text
                        style={{
                            textTransform: 'uppercase',
                            fontWeight: 'bold',
                            fontSize: 16,
                            color: '#fff',
                            letterSpacing: 1.3
                        }}
                    >{title}</Text>
                </View>
            </ImageBackground>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        height: 70,
        width: 170,
        borderRadius: 8,
        elevation: 11
    },
});

//make this component available to the app
export default CategoryCard;
