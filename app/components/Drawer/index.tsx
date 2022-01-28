//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, SafeAreaView, Pressable, ImageBackground, Switch, TouchableOpacity } from 'react-native';
import { DrawerContentComponentProps } from '@react-navigation/drawer'
import { useTheme } from '@react-navigation/native';
import ShadowView from '../ShadowView';
import AntDesign from 'react-native-vector-icons/AntDesign'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { useDispatch } from 'react-redux';
import { setTheme } from '../../redux/reducer/theme';

type DrawerContentProps = DrawerContentComponentProps

// create a component
const DrawerContent: React.FC<DrawerContentProps> = ({ navigation }) => {
    const { colors, dark } = useTheme();
    const dispatch = useDispatch();

    return (
        <SafeAreaView
            style={{
                backgroundColor: colors.background
            }}
        >
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <ShadowView
                    shadowHeight={50}
                    shadowWidth={180}
                    shadowOffset={{
                        width: 0,
                        height: 15
                    }}
                    shadowColor={'#DE1029aa'}
                    shadowOpacity={0.5}
                    shadowRadius={10}
                    elevation={10}
                    borderRadius={5}
                />

                <ImageBackground
                    source={require('../../assets/back.jpg')}
                    style={{
                        height: 50,
                        width: 200,
                        alignSelf: 'center',
                        marginVertical: 10,
                        borderRadius: 5,
                        elevation: 11
                    }}
                    imageStyle={{
                        borderRadius: 5
                    }}
                >

                    <Pressable
                        style={{
                            flex: 1,
                            borderRadius: 5,
                            backgroundColor: '#DE1029aa',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                    >
                        <Text
                            style={{
                                fontSize: 18,
                                fontWeight: 'bold',
                                color: '#fff'
                            }}
                        >Login</Text>
                    </Pressable>
                </ImageBackground>
            </View>

            <View
                style={{
                    borderWidth: 1,
                    marginTop: 15,
                    marginHorizontal: 20,
                    borderRadius: 0.5,
                    borderColor: dark ? '#777' : '#eaebeb',
                    marginBottom: 10
                }}
            />

            <View
                style={{
                    height: 50,
                    flexDirection: 'row',
                    alignItems: 'center',
                    paddingHorizontal: 20
                }}
            >
                <AntDesign
                    name='home'
                    size={20}
                    color={colors.text}
                />

                <Text
                    style={{
                        fontWeight: '600',
                        fontSize: 13,
                        marginLeft: 10,
                        color: colors.text
                    }}
                >Home</Text>
            </View>

            <TouchableOpacity
                style={{
                    height: 50,
                    flexDirection: 'row',
                    alignItems: 'center',
                    paddingHorizontal: 20
                }}
                onPress={() => dispatch(setTheme())}
            >
                <MaterialCommunityIcons
                    name='theme-light-dark'
                    size={20}
                    color={colors.text}
                />

                <Text
                    style={{
                        fontWeight: '600',
                        fontSize: 13,
                        marginLeft: 10,
                        color: colors.text
                    }}
                >Dark Mode</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {

    },
});

//make this component available to the app
export default DrawerContent;
