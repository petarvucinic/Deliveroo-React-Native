import { View, Text, Touchable, Image } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";
import { StarIcon } from "react-native-heroicons/outline";

const RestaurantCard = ({
  id,
  imgUrl,
  title,
  rating,
  genre,
  address,
  short_description,
  dishes,
  long,
  lat,
}) => {
  return (
    <TouchableOpacity>
      <Image
        source={{
          uri: imgUrl,
        }}
        style={{ width: 256, height: 128, borderRadius: 2 }}
      />
      <View className="px-3 pb-4">
        <Text className="font-bold text-lg pt-2">{title}</Text>
        <View className="flex-row items-centre sapce-x-1">
          <StarIcon color="green" opacity={0.5} size={22} />
          <Text>{rating}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default RestaurantCard;
