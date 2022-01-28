//import liraries
import { useTheme } from '@react-navigation/native';
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, ImageSourcePropType } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign'
import ShadowView from '../ShadowView';

interface ListData {
    image: ImageSourcePropType
}

interface Props {
    listTitle: string,
    listCardHeight: number,
    listCardWidth: number,
    listData: Array<ListData>
}
// create a component
const CardList: React.FC<Props> = (props) => {
    const { listTitle, listCardHeight, listCardWidth, listData } = props;
    const { colors, dark } = useTheme()
    return (
        <View style={styles.container}>
            <View
                style={{
                    marginHorizontal: 35,
                    flexDirection: 'row',
                    justifyContent: 'space-between'
                }}
            >
                <Text
                    style={{
                        color: colors.text,
                        fontWeight: 'bold',
                        fontSize: 16
                    }}
                >{listTitle}</Text>
                <AntDesign
                    name='arrowright'
                    size={20}
                    color={colors.text}
                />
            </View>

            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{
                    marginTop: 20,
                    paddingLeft: 20,
                    height: listCardHeight + 30
                }}
            >
                {
                    listData.map((item, index) => {
                        return (
                            <View
                                style={{
                                    height: listCardHeight,
                                    width: listCardWidth,
                                    borderRadius: 10,
                                    alignItems: 'center',
                                    marginHorizontal: 8
                                }}
                                key={index}
                            >
                                <ShadowView
                                    shadowHeight={listCardHeight}
                                    shadowWidth={listCardWidth - 20}
                                    borderRadius={10}
                                    shadowRadius={10}
                                    shadowColor={dark ? '#8AABFF' : '#000'}
                                    shadowOffset={{
                                        width: 0,
                                        height: dark ? 10 : 15
                                    }}
                                    shadowOpacity={dark ? 0.2 : 0.3}
                                    elevation={10}
                                />
                                <View style={{elevation: 11}}>
                                    <Image
                                        source={item.image}
                                        style={{
                                            height: listCardHeight,
                                            width: listCardWidth,
                                            resizeMode: 'cover',
                                            borderRadius: 10
                                        }}
                                    />
                                </View>

                            </View>
                        )
                    })
                }
            </ScrollView>

        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        // borderWidth:1
    },
});

//make this component available to the app
export default CardList;
