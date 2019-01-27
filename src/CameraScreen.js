import React, { Component } from "react";
import { Alert, AsyncStorage } from "react-native";
import { CameraKitCameraScreen } from "react-native-camera-kit";

export default class CameraScreen extends Component {
  onBottomButtonPressed(event) {
    const captureImages = JSON.stringify(event.captureImages);
    console.log(captureImages);
  }

  onDoneCapture(event) {
    const captureImages = JSON.stringify(event.captureImages);
    console.log("ID:" + this.props.navigation.getParam("itemId", "NO-ID"));
    console.log(captureImages);
    //let data = [];

    // captureImages.forEach(element => {
    //   data.push(element.id);
    // });

    // await AsyncStorage.setItem(
    //   this.props.navigation.getParam("itemId", "NO-ID"),
    //   JSON.stringify(data)
    // );
    this.props.navigation.navigate("ImageList", { image: captureImages });
  }

  render() {
    return (
      <CameraKitCameraScreen
        actions={{ rightButtonText: "Done", leftButtonText: "Cancel" }}
        onBottomButtonPressed={event => {
          if (event.type == "left") {
            this.props.navigation.goBack();
          } else if (event.type == "right") {
            this.onDoneCapture(event);
          } else {
            this.onBottomButtonPressed(event);
          }
        }}
        flashImages={{
          on: require("./../images/flashOn.png"),
          off: require("./../images/flashOff.png"),
          auto: require("./../images/flashAuto.png")
        }}
        cameraFlipImage={require("./../images/cameraFlipIcon.png")}
        captureButtonImage={require("./../images/cameraButton.png")}
      />
    );
  }
}
