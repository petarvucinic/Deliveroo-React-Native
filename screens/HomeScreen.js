import { View, Text, SafeAreaView } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { Image } from "react-native";

const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: "testing",
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView>
      <View>
        <Text className="text-red-500">
          <View>
            <Image
              source={{
                url: "https://links.papareact.com/wru",
              }}
              className="h-7 w-7 bg-gray-300 p-4 rounded-full"
            />
          </View>
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
