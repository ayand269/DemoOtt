//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, SafeAreaView, StatusBar, Image, Pressable, ScrollView, Dimensions } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import { useNavigation, useTheme } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import BannerCarousel from '../../components/Banner/BannerCarousel';
import CategoryCard from '../../components/Card/categoryCard';
import CardList from '../../components/Lists/cardList';
import { DrawerNavigatorParams, RootStackNavigatorParams } from '../../interface/navigation';
import { DrawerScreenProps } from '@react-navigation/drawer';
// create a component

const bannerData = [
    {
        image: require('../../assets/banner1.jpg'),
        title: 'The Nutcracker And The Four Realms'
    },
    {
        image: require('../../assets/banner1.jpg'),
        title: 'The Nutcracker And The Four Realms'
    },
    {
        image: require('../../assets/banner1.jpg'),
        title: 'The Nutcracker And The Four Realms'
    }
]

const categoryData = [
    {
        image: require('../../assets/cat1.jpg'),
        title: 'Discover'
    },
    {
        image: require('../../assets/cat2.jpg'),
        title: 'Category'
    },
    {
        image: require('../../assets/cat3.jpg'),
        title: 'Subcategory'
    },
]

const listData = [
    {
        image: require('../../assets/list1.jpg')
    },
    {
        image: require('../../assets/list2.png')
    },
    {
        image: require('../../assets/list3.jpg')
    }
]

const popularData = [
    {
        image: require('../../assets/top1.jpg')
    },
    {
        image: require('../../assets/top2.jpg')
    },
    {
        image: require('../../assets/top3.jpg')
    }
]

type DrawerProps = DrawerScreenProps<DrawerNavigatorParams, 'Home'>

const {width, height} = Dimensions.get('window');

const Home: React.FC<DrawerProps> = ({route, navigation}) => {
    const dispatch = useDispatch();
    const { colors, dark } = useTheme();
    return (
        <SafeAreaView
            style={[styles.container, {
                backgroundColor: colors.background
            }]}
        >
            <StatusBar
                barStyle={dark ? 'light-content' : 'dark-content'}
                backgroundColor={colors.background}
            />

            <View
                style={{
                    height: 40,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    paddingHorizontal: 35,
                    marginBottom: 5
                }}
            >
                <Pressable
                    onPress={() => navigation.openDrawer()}
                >
                    <Feather
                        name="menu"
                        size={20}
                        color={colors.text}
                    />
                </Pressable>


                <Image
                    source={require('../../assets/logo.png')}
                    style={{
                        width: 80,
                        height: 20
                    }}
                />

                <Feather
                    name="search"
                    size={20}
                    color={colors.text}
                />
            </View>

            <ScrollView
                showsVerticalScrollIndicator={false}
            >
                <View
                    style={{
                        height: 210
                    }}
                >
                    <BannerCarousel
                        bannerData={bannerData}
                        itemWidth={width - 40}
                    />
                </View>

                <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{
                        marginTop: 20,
                        height: 100,
                        paddingLeft: 20
                    }}
                >

                    {
                        categoryData.map((item, index) => {
                            return (
                                <CategoryCard
                                    image={item.image}
                                    title={item.title}
                                    key={index}
                                />
                            )
                        })
                    }

                </ScrollView>

                <CardList
                    listCardHeight={200}
                    listCardWidth={150}
                    listData={listData}
                    listTitle='My List'
                />

                <CardList
                    listCardHeight={200}
                    listCardWidth={150}
                    listData={popularData}
                    listTitle='Popular on Netflix'
                />
            </ScrollView>
        </SafeAreaView>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
});

//make this component available to the app
export default Home;
