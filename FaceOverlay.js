import React from "react";
import { View, StyleSheet } from "react-native";

const FaceOverlay = ({ faces }) => {
  return (
    <View style={StyleSheet.absoluteFill}>
      {faces.map((face, index) => (
        <View
          key={index}
          style={{
            position: "absolute",
            left: face.bounds.x,
            top: face.bounds.y,
            width: face.bounds.width,
            height: face.bounds.height,
            borderWidth: 2,
            borderColor: "red",
          }}
        />
      ))}
    </View>
  );
};

export default FaceOverlay;

