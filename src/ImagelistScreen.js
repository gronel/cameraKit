import React, { Component } from "react";
import {
  View,
  Text,
  AsyncStorage,
  ScrollView,
  SafeAreaView,
  Image
} from "react-native";

let datalist = [];
export default class ImagelistScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imglst: []
    };

    datalist = this.props.navigation.getParam("image", "NO-ID");
    // this.onLoadMenu();
  }

  _isMounted = false;

  onLoadMenu = async () => {
    const resData = await AsyncStorage.getItem("imgSam1");
    if (this._isMounted) {
      this.setState({ imglst: JSON.parse(resData) });
      console.log(this.state.imglst);
    }
  };

  componentDidMount() {
    this._isMounted = true;
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    return (
      <View>
        <Text>{datalist}</Text>

        {datalist.map((item, key) => (
          <Image
            key={key}
            source={{ uri: "file:///" + item.id }}
            style={{ width: 100, height: 100 }}
          />
        ))}
        {/* <View style={{ flexDirection: "row" }}>
          {this.state.imageList.map((item, key) => (
            <Image
              key={key}
              source={{ uri: "file:///" + item.id }}
              style={{ width: 100, height: 100 }}
            />
          ))}
        </View> */}
      </View>
    );
  }
}
