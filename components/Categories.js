import { View, Text, ScrollView, Image } from "react-native";
import React from "react";
import CategoryCard from "./CategoryCard";

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

      <CategoryCard imgUrl="https://links.papareact.com/gn7" title="testygghyging" />
      <CategoryCard imgUrl="https://links.papareact.com/gn7" title="testing" />
      <CategoryCard imgUrl="https://links.papareact.com/gn7" title="testing" />
      <CategoryCard imgUrl="https://links.papareact.com/gn7" title="testing" />
      <CategoryCard imgUrl="https://links.papareact.com/gn7" title="testing" />
    </ScrollView>
  );
};

export default Categories;
