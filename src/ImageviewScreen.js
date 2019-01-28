import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Alert,
  PermissionsAndroid,
  Image,
  AsyncStorage,
  ScrollView,
  List
} from "react-native";

export default class ImageviewScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageSource: "https://facebook.github.io/react/logo-og.png"
    };
    PermissionsAndroid.requestMultiple([
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      PermissionsAndroid.PERMISSIONS.READ_PHONE_STATE,
      PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
      PermissionsAndroid.PERMISSIONS.CAMERA,
      PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE
    ]).then(result => {
      console.log("result", result);
    });
  }

  onSelect = data => {
    Alert.alert(data);
    this.setState({
      imageSource: "https://facebook.github.io/react/logo-og.png"
    });
  };

  onCapture = () => {
    this.props.navigation.navigate("CameraScreen", { itemId: "imgSam1" });
  };
  onCanvas = () => {
    this.props.navigation.navigate("Convase");
  };
  imgRender = () => {
    return this.state.imageList.map((item, key) => (
      <Image
        key={key}
        source={{
          uri: this.state.imageSource
        }}
        style={{ width: 100, height: 100 }}
      />
    ));
  };

  render() {
    // this.onSelect(itemId);
    //
    return (
      <View style={{ flex: 1 }}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>Welcome to Camera Kit</Text>
          <Text style={{ fontSize: 40 }}>📷</Text>
        </View>

        <View style={{ flex: 1, alignItems: "center" }}>
          <Image
            source={{
              uri: this.state.imageSource
            }}
            style={{ width: 100, height: 100 }}
          />
        </View>

        <View style={styles.container}>
          <TouchableOpacity onPress={this.onCapture}>
            <Text style={styles.buttonText}>Barcode scanner Screen</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.onCanvas}>
            <Text style={styles.buttonText}>sketch-canvas</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.onCapture}>
            <Text style={styles.buttonText}>Camera Screen</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    paddingTop: 60,
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  headerContainer: {
    flexDirection: "column",
    backgroundColor: "#F5FCFF",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 100
  },
  headerText: {
    color: "black",
    fontSize: 24
  },
  buttonText: {
    color: "blue",
    marginBottom: 20,
    fontSize: 20
  }
});
