import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";

import { FONTS, SIZES, COLORS, icons, dummyData } from "../constants";

const HorizontalFoodCard = ({ containerStyle, imageStyle, item, onPress }) => {
  return (
    <TouchableOpacity
      style={{
        flexDirection: "row",
        borderRadius: SIZES.radius,
        backgroundColor: COLORS.lightGray2,
        ...containerStyle,
      }}
    >
      {/* image */}
      <Image source={item.image} style={imageStyle} />

      {/* info */}
      <View style={{ flex: 1 }}>
        <Text style={{ ...FONTS.h3, fontSize: 17 }}>{item.name}</Text>

        <Text style={{ color: COLORS.darkGray2, ...FONTS.body4 }}>
          {item.description}
        </Text>
        <Text style={{ marginTop: SIZES.base, ...FONTS.h2 }}>
          ${item.price}
        </Text>
      </View>

      {/* calories */}
      <View
        style={{
          flexDirection: "row",
          position: "absolute",
          top: 5,
          right: SIZES.radius,
        }}
      >
        <Image source={icons.calories} style={{ width: 30, height: 30 }} />
        <Text style={{ ...FONTS.body5, color: COLORS.darkGray2 }}>
          {item.calories} Calories
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default HorizontalFoodCard;

const styles = StyleSheet.create({});
