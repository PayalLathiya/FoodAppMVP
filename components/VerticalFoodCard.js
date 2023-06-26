import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import { FONTS, SIZES, COLORS, icons, dummyData } from "../constants";

const VerticalFoodCard = ({ containerStyle, item, onPress }) => {
  return (
    <TouchableOpacity
      style={{
        width: 200,
        padding: SIZES.radius,
        alignItems: "center",
        borderRadius: SIZES.radius,
        backgroundColor: COLORS.lightGray2,
        ...containerStyle,
      }}
    >
      <View style={{ flexDirection: "row" }}>
        <View style={{ flex: 1, flexDirection: "row" }}>
          <Image source={icons.calories} style={{ height: 30, width: 30 }} />
          <Text
            style={{
              color: COLORS.darkGray2,
              ...FONTS.body5,
            }}
          >
            {item.calories} Calories
          </Text>
        </View>

        <Image
          source={icons.love}
          style={{
            width: 20,
            height: 20,
            tintColor: item.isFavourite ? COLORS.primary : COLORS.gray,
          }}
        />
      </View>

      <View
        style={{
          height: 150,
          width: 150,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image
          source={item.image}
          style={{
            height: "100%",
            width: "100%",
          }}
        />
      </View>

      <View
        style={{
          alignItems: "center",
          marginTop: -20,
        }}
      >
        <Text style={{ ...FONTS.h3 }}>{item.name}</Text>
        <Text
          style={{
            ...FONTS.body5,
            color: COLORS.darkGray2,
            textAlign: "center",
          }}
        >
          {item.description}
        </Text>
        <Text style={{ ...FONTS.h2, marginTop: SIZES.radius }}>
          ${item.price}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default VerticalFoodCard;

const styles = StyleSheet.create({});
