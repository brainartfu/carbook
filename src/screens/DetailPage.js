import React, { useState } from 'react';

import Slick from 'react-native-slick';
import { Image, Input, View, Text, Icon, MaterialIcons, Box, Button, ScrollView, Link } from 'native-base';
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
import backPng from './../assets/images/back.png';
import boxPng from './../assets/images/box.png';
import { style } from 'styled-system';

const styles = {
  performance: {
    borderRadius: 10,
    borderColor: '#ddd',
    borderWidth: 1,
    padding: 5,
    margin: 5
  }
};

const DetailPage = ({ navigation, route }) => {
  const car = route.params.car;

  // const car = navigation.getParams('car');

  const handleTouchBack = () => {
    navigation.navigate('ListPage');
  }

  return (
    <ScrollView flex="1" backgroundColor="white" paddingX={4}>
      {/* <Box>
        <Image onTouchEnd={handleTouchBack} source={backPng} alt="back" resizeMode="contain" style={{ width: 20 }} />
      </Box> */}

      <Box flexDirection="row" alignItems="center" justifyContent="space-between" marginTop={2}>
        <Box>
          <Text bold>{car.name}</Text>
          <Text fontSize="10">{car.cate}</Text>
        </Box>
        <Image source={heartPng} alt="favorite" resizeMode="contain" style={{ width: 20 }} />
      </Box>

      <Slick height={130}>
        {car.icons.map((icon, index) =>
          <Box alignItems="center" key={index}>
            <Image source={icon} alt="car" />
          </Box>
        )}
      </Slick>

      <Box flexDirection="row" justifyContent="space-between" alignItems="center" marginTop={-5}>
        <Text bold>Car Specs</Text>
        <Button variant="link">
          <Text fontSize="10" style={{color: '#188EEA'}}>See more</Text>
        </Button>
      </Box>

      <Box flexDirection="row" justifyContent="space-between" alignItems="center">
        <Box style={styles.performance} flexGrow={1}>
          <Text fontSize="10">Max. Power</Text>
          <Text fontSize="2xl">320</Text>
          <Text fontSize="10" marginTop={-2}>hp</Text>
        </Box>
        <Box style={styles.performance} flexGrow={1}>
          <Text fontSize="10">0 - 60 mph</Text>
          <Text fontSize="2xl">4.4</Text>
          <Text fontSize="10" marginTop={-2}>sec.</Text>
        </Box>
        <Box style={styles.performance} flexGrow={1}>
          <Text fontSize="10">Top Speed</Text>
          <Text fontSize="2xl">177</Text>
          <Text fontSize="10" marginTop={-2}>mph</Text>
        </Box>
      </Box>

      <Text bold marginTop={4}>Car Info</Text>

      <Box flexDirection="row" alignItems="center">
        <Box flexGrow={1}>
          <Box flexDirection="row" justifyContent="flex-start" alignItems="center" marginTop={1}>
            <Image source={userPng} alt="a" />
            <Text fontSize="12" marginLeft={2}>{car.users} Passengers</Text>
          </Box>
          <Box flexDirection="row" justifyContent="flex-start" alignItems="center" marginTop={1}>
            <Image source={snowPng} alt="a" />
            <Text fontSize="12" marginLeft={2}>{car.airCondition}</Text>
          </Box>
          <Box flexDirection="row" justifyContent="flex-start" alignItems="center" marginTop={1}>
            <Image source={speedPng} alt="a" />
            <Text fontSize="12" marginLeft={2}>{car.milieage}</Text>
          </Box>
        </Box>
        <Box flexGrow={1}>
          <Box flexDirection="row" justifyContent="flex-start" alignItems="center" marginTop={1}>
            <Image source={boxPng} alt="a" />
            <Text fontSize="12" marginLeft={2}>{car.doors}</Text>
          </Box>
          <Box flexDirection="row" justifyContent="flex-start" alignItems="center" marginTop={1}>
            <Image source={gearPng} alt="a" />
            <Text fontSize="12" marginLeft={2}>{car.gear}</Text>
          </Box>
          <Box flexDirection="row" justifyContent="flex-start" alignItems="center" marginTop={1}>
            <Image source={etcPng} alt="a" />
            <Text fontSize="12" marginLeft={2}>{car.fuel}</Text>
          </Box>
        </Box>
      </Box>

      <Text bold marginTop={4}>Pick Up & Drop Off</Text>

      <Box flexDirection="row" alignItems="center" justifyContent="space-around" style={styles.performance}>
        <Box>
          <Text fontSize="12">Heathrow Airport</Text>
          <Text fontSize="10">Sat, 18 Dec 20, 10:00</Text>
        </Box>
        <Text padding={2}>
          &rArr;
        </Text>
        <Box>
          <Text fontSize="12">Gatwick Airport</Text>
          <Text fontSize="10">Sun, 19 Dec 20, 10:00</Text>
        </Box>
      </Box>

      <Box flexDirection="row" alignItems="center" justifyContent="space-between" marginTop={4}>
        <Box>
          <Text>Total</Text>
          <Text fontSize="20" bold>{car.price}</Text>
        </Box>
        <Button onTouchEnd={handleTouchBack}>Go to Book</Button>
      </Box>

      <Box marginBottom={4} />
    </ScrollView>
  );
};

export default DetailPage;