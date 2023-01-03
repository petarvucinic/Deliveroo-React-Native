import { View, Text, ScrollView, Image } from "react-native";
import React from "react";
import CategoryCard from "../pages/CategoryCard";

const Categories = () => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
      }}
    >
      {/* category card */}

      <CategoryCard imgUrl="https://links.papareact.com/wru" title="testing" />
      <CategoryCard imgUrl="https://links.papareact.com/wru" title="testing" />
      <CategoryCard imgUrl="https://links.papareact.com/wru" title="testing" />
    </ScrollView>
  );
};

export default Categories;
