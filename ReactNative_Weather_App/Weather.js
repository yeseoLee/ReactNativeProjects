import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const weatherOptions = {
  Thunderstom: {
    iconName: "weather-lightning",
    gradient: ["#373B44", "#007ADF"],
    title: "THunderstom",
    subtitle: "천둥번개가 내리쳐요. 밖에 나가지는 마세요",
  },
  Drizzle: {
    iconName: "weather-hail",
    gradient: ["#89F7FE", "#66A6FF"],
    title: "Drizzle",
    subtitle: "비가 보슬보슬 내려요. 밖에 나가지는 마세요.",
  },
  Rain: {
    iconName: "weather-rainy",
    gradient: ["#00C6FB", "#005BEA"],
    title: "Rain",
    subtitle: "비가 내려요. 밖에 나가지는 마세요.",
  },
  Snow: {
    iconName: "weather-snowy",
    gradient: ["#7DE2FC", "#B9B6E5"],
    title: "Snow",
    subtitle: "눈이 내려요. 밖에 나가지는 마세요.",
  },
  Atmosphere: {
    iconName: "weather-hail",
    gradient: ["#89E7FE", "#66A6FF"],
    title: "Atmosphere",
    subtitle: "Atmosphere 밖에 나가지는 마세요.",
  },
  Clear: {
    iconName: "weather-sunny",
    gradient: ["#FF7300", "#FEF253"],
    title: "Clear",
    subtitle: "맑고 화창해요. 밖에 나가지는 마세요.",
  },
  Clouds: {
    iconName: "weather-cloudy",
    gradient: ["#D7D2CC", "#304353"],
    title: "Clouds",
    subtitle: "구름이 끼고 조금 흐려요. 밖에 나가지는 마세요.",
  },
  Mist: {
    iconName: "weather-fog",
    gradient: ["#74ebd5", "#ACB6E5"],
    title: "Mist",
    subtitle: "습하고 꿉꿉해요. 밖에 나가지는 마세요.",
  },
  Dust: {
    iconName: "weather-hail",
    gradient: ["#4DA0B0", "#D39D38"],
    title: "Dust",
    subtitle: "미세먼지로 공기가 매우 나빠요. 밖에 나가지는 마세요.",
  },
  Haze: {
    iconName: "weather-hail",
    gradient: ["#4DA0B0", "#D39D38"],
    title: "Haze",
    subtitle: "안개가 자욱해요. 밖에 나가지는 마세요.",
  },
};

export default function Weather({ temp, condition }) {
  return (
    <LinearGradient
      colors={weatherOptions[condition].gradient || ["#a8c0ff", "#3f2b96"]}
      style={styles.container}
    >
      <StatusBar barStyle="light-content" />
      <View style={styles.halfContainer}>
        <MaterialCommunityIcons
          name={weatherOptions[condition].iconName || "weather-sunset"}
          size={96}
          color="white"
        />
        <Text style={styles.temp}>{temp}°</Text>
      </View>
      <View style={{ ...styles.halfContainer, ...styles.textContainer }}>
        <Text style={styles.title}>{weatherOptions[condition].title}</Text>
        <Text style={styles.subtitle}>
          {weatherOptions[condition].subtitle}
        </Text>
      </View>
    </LinearGradient>
  );
}

Weather.propTypes = {
  temp: PropTypes.number.isRequired,
  condition: PropTypes.oneOf([
    "Thunderstom",
    "Drizzle",
    "Rain",
    "Snow",
    "Atmosphere",
    "Clear",
    "Clouds",
    "Dust",
    "Mist",
    "Haze",
  ]).isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  temp: {
    fontSize: 42,
    color: "white",
  },
  halfContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: "white",
    fontSize: 34,
    fontWeight: "300",
    marginBottom: 10,
  },
  subtitle: {
    color: "white",
    fontSize: 20,
  },
  textContainer: {
    paddingHorizontal: 40,
    alignItems: "flex-start",
  },
});
