import React, { Component } from "react";
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  AlertIOS,
  PermissionsAndroid
} from "react-native";

import ImageView from "./src/ImageviewScreen";
import CameraScreen from "./src/CameraScreen";
import ImageList from "./src/ImagelistScreen";
import AlbumsScreen from "./src/AlbumsScreen";
import GalleryScreen from "./src/GalleryScreen";
import BarcodeScreen from "./src/BarcodeScreen";

import {
  createSwitchNavigator,
  createStackNavigator,
  createDrawerNavigator,
  createBottomTabNavigator,
  createAppContainer
} from "react-navigation";

const MainStackNavigator = createStackNavigator(
  {
    ImageView: ImageView,
    CameraScreen: CameraScreen,
    ImageList: ImageList
  },
  {
    initialRouteName: "ImageView"
  }
);

export default createAppContainer(MainStackNavigator);
