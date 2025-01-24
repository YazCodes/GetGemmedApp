import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Camera, useCameraDevices } from "react-native-vision-camera";

const App = () => {
  const devices = useCameraDevices();
  const device = devices.front || devices.back; 

  // console.log("Devices available:", JSON.stringify(devices, null, 2));
  console.log("Selected Camera Device:", device);

  if (!device) {
    return (
      <View style={styles.container}>
        <Text style={{ color: "white" }}>Loading Camera...</Text>
      </View>
    );
  }

  useEffect(() => {
    const checkPermissions = async () => {
      const status = await Camera.getCameraPermissionStatus();
      console.log("Camera permission status:", status);
    };
    checkPermissions();
  }, []);
  

  return (
    <View style={styles.container}>
      <Camera
        style={StyleSheet.absoluteFill}
        device={device}
        isActive={true}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default App;


