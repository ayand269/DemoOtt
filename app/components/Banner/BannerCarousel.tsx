//import liraries
import { useTheme } from '@react-navigation/native';
import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, Dimensions, Image, ImageSourcePropType } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import ShadowView from '../ShadowView';

interface BannerData {
    image: ImageSourcePropType,
    title: string,
}

interface Props {
    bannerData: Array<BannerData>,
    sliderWidth?: number,
    itemWidth: number
}

const { width, height } = Dimensions.get('window');
// create a component
const BannerCarousel: React.FC<Props> = (props) => {
    const { bannerData, sliderWidth = width, itemWidth } = props;
    const { colors, dark } = useTheme()

    const [activeBanner, setActiveBanner] = useState<number>(1)
    return (
        <Carousel
            data={bannerData}
            renderItem={({ item, index }: { item: BannerData, index: number }) => {
                return (
                    <View
                        key={index}
                        style={{
                            alignItems: 'center'
                        }}
                    >
                        <View
                            style={{
                                width: itemWidth - 20,
                                height: 180,
                                alignItems: 'center',
                                justifyContent: 'center',
                                // borderWidth: 1
                            }}
                        >
                            {
                                activeBanner == index ?
                                    <ShadowView
                                        shadowHeight={180}
                                        shadowWidth={itemWidth - 50}
                                        // shadowColor={dark ? '#8AABFF' : '#000'}
                                        shadowOffset={{
                                            width: 0,
                                            height: dark ? 10 : 15
                                        }}
                                        shadowOpacity={dark ? 0.2 : 0.3}
                                        shadowRadius={dark ? 20 : 10}
                                        borderRadius={10}
                                        elevation={20}
                                    />
                                    :
                                    null
                            }

                            <View style={{elevation: 21}}>
                            <Image
                                source={item.image}
                                style={{
                                    height: activeBanner == index ? 180 : 150,
                                    marginVertical: activeBanner == index ? 0 : 15,
                                    width: itemWidth - 20,
                                    borderRadius: 10
                                }}
                                resizeMode='cover'
                            />
                            </View>
                            

                            <View
                                style={{
                                    position:'absolute',
                                    bottom: 10,
                                    left: 10,
                                    width: '60%'
                                }}
                            >
                                <Text
                                    style={{
                                      textTransform: 'uppercase',
                                      color: '#fff' ,
                                      fontSize: 16,
                                      fontWeight: 'bold'
                                    }}
                                >{item.title}</Text>
                            </View>
                        </View>

                    </View>
                )
            }}
            sliderWidth={sliderWidth}
            // sliderHeight={180}
            inactiveSlideScale={1}
            itemWidth={itemWidth}
            firstItem={activeBanner}
            onSnapToItem={(ind) => setActiveBanner(ind)}
        />
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {

    },
});

//make this component available to the app
export default BannerCarousel;
