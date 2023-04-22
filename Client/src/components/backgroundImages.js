import React, { useRef, useEffect, useState } from "react";
import { StyleSheet, View, ScrollView, Dimensions, Image } from "react-native";

const DEVICE_WIDTH = Dimensions.get("window").width;

export default function BackgroundImage({ images }) {
  const scrollRef = useRef(null);
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSelectedIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const handleMomentumScrollEnd = (event) => {
    const contentOffset = event.nativeEvent.contentOffset;
    const viewSize = event.nativeEvent.layoutMeasurement;

    // Divide the horizontal offset by the width of the view to see which page is visible
    const newIndex = Math.floor(contentOffset.x / viewSize.width);
    setSelectedIndex(newIndex);
  };

  return (
    <View style={{ height: "100%", width: "100%" }}>
      <ScrollView
        horizontal
        pagingEnabled
        onMomentumScrollEnd={handleMomentumScrollEnd}
        ref={scrollRef}
      >
        {images.map((image) => (
          <Image
            style={styles.backgroundImage}
            source={{ uri: image }}
            key={image}
          />
        ))}
      </ScrollView>
      <View style={styles.circleDiv}>
        {images.map((image, i) => (
          <View
            style={[
              styles.whiteCircle,
              { opacity: i === selectedIndex ? 0.5 : 1 },
            ]}
            key={image}
            active={i === selectedIndex}
          />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    height: "100%",
    width: Dimensions.get("window").width,
  },
  circleDiv: {
    position: "absolute",
    bottom: 15,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: 10,
  },
  whiteCircle: {
    width: 6,
    height: 6,
    borderRadius: 3,
    margin: 5,
    backgroundColor: "#fff",
  },
});
