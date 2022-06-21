import React, { useState } from 'react';

import { Image, Input, View, Text, Icon, MaterialIcons, Box, Button, ScrollView, Badge } from 'native-base';
import markerPng from './../assets/images/marker.png';
import avatarPng from './../assets/images/avatar.png';
import searchPng from './../assets/images/search.png';
import heartPng from './../assets/images/heart.png';
import car1Png from './../assets/images/car1.png';
import car2Png from './../assets/images/car2.png';
import userPng from './../assets/images/user.png';
import gearPng from './../assets/images/gear.png';
import snowPng from './../assets/images/snow.png';
import etcPng from './../assets/images/etc.png';
import speedPng from './../assets/images/speed.png';
import boxPng from './../assets/images/box.png';
import { style } from 'styled-system';

const styles = {
  markerIcon: {
    width: 20,
  },
  avatarIcon: {
    width: 50
  },
  searchInp: {
    backgroundColor: '#efefef',
    borderRadius: 5,
    paddingLeft: 10,
    paddingRight: 10,
  },
  carItem: {
    borderRadius: 10,
    backgroundColor: 'red',

    shadowColor: 'black',
    shadowOpacity: 0.5,
    shadowOffset: { width: 5, height: 5 },
    shadowRadius: 10,
    elevation: 5,
    backgroundColor: 'white'
  }
};

const cars = [
  {
    id: 1,
    name: 'Porsche 718 Cayman S',
    cate: 'Coupe',
    icons: [car1Png, car1Png, car1Png, car1Png],
    favorite: true,
    price: '$400/d',
    users: 2,
    airCondition: 'Air Conditioning',
    milieage: 'Unlimited Milieage',
    doors: '2 Doors',
    gear: 'Manual',
    fuel: 'Full to full'
  },
  {
    id: 2,
    name: 'Toyota GR Supra',
    cate: 'Coupe',
    favorite: false,
    price: '$250/d',
    icons: [car2Png, car2Png, car2Png, car2Png],
    users: 6,
    airCondition: 'No Conditioning',
    milieage: 'Limited Milieage',
    doors: '2 Doors',
    gear: 'Automatic',
    fuel: 'Half'
  },
  {
    id: 3,
    name: 'Porsche 718 Cayman S',
    cate: 'Coupe',
    icons: [car1Png, car1Png, car1Png, car1Png],
    favorite: true,
    price: '$400/d',
    users: 8,
    airCondition: 'Air Conditioning',
    milieage: 'Unlimited Milieage',
    doors: '2 Doors',
    gear: 'Manual',
    fuel: 'Full to full'
  },
  {
    id: 4,
    name: 'Toyota GR Supra',
    cate: 'Coupe',
    favorite: false,
    price: '$250/d',
    icons: [car2Png, car2Png, car2Png, car2Png],
    users: 3,
    airCondition: 'No Conditioning',
    milieage: 'Limited Milieage',
    doors: '4 Doors',
    gear: 'Automatic',
    fuel: 'Half'
  }
];

const ListPage = ({ navigation }) => {


  const handleTouchCar = car => {
    navigation.navigate('DetailPage', { car });
  }

  return (
    <ScrollView flex="1" backgroundColor="white" paddingX={4}>
      <View flexDirection="row" alignItems="center" justifyContent="space-between" marginTop={2}>
        <Image source={markerPng} resizeMode={"contain"} style={styles.markerIcon} alt="marker" />
        <View flexGrow="1" marginLeft={4}>
          <Text style={{ color: 'grey' }}>Your location</Text>
          <Text bold>Manchester, UK</Text>
        </View>
        <Image source={avatarPng} resizeMode={"contain"} style={styles.avatarIcon} alt="avatar" />
      </View>

      <Box style={styles.searchInp}>
        <Input
          variant="unstyled"
          size="sm"
          InputLeftElement={<Image source={searchPng} alt="search" style={{ width: 20 }} resizeMode="contain" />}
        />
      </Box>

      <Button marginTop={4}>Sort & Filter</Button>

      <View marginTop={4} alignItems="center">
        {cars.map((car, index) =>
          <Box style={styles.carItem} padding={2} marginY={2} onTouchEnd={() => handleTouchCar(car)} key={index}>
            <Box flexDirection="row" alignItems="center" justifyContent="space-between">
              <Box>
                <Text>{car.name}</Text>
                <Text>{car.cate}</Text>
              </Box>
              <Image source={heartPng} alt="favorite" resizeMode="contain" style={{ width: 20 }} />
            </Box>
            <Image source={car.icons[0]} alt="car" resizeMode="contain" />
            <Box flexDirection="row" alignItems="center">
              <Box flexDirection="row" alignItems="center">
                <Image source={userPng} alt="favorite" resizeMode="contain" style={{ width: 16 }} />
                <Text>{car.users}</Text>
              </Box>
              <Box flexDirection="row" alignItems="center" marginLeft={2}>
                <Image source={gearPng} alt="favorite" resizeMode="contain" style={{ width: 16 }} />
                <Text>{car.gear}</Text>
              </Box>
              <Box flexGrow={1}></Box>
              <Text>{car.price}</Text>
            </Box>
          </Box>)}
      </View>

      <Box marginBottom={4} />
    </ScrollView>
  );
};

export default ListPage;