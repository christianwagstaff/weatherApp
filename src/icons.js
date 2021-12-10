/* eslint-disable consistent-return */
import cloud from "./icons/cloud.svg";
import partialCloud from "./icons/partialCloud.svg";
import partialRain from "./icons/partialRain.svg";
import rain from "./icons/rain.svg";
import snow from "./icons/snow.svg";
import thermometer from "./icons/thermometer.svg";
import thunder from "./icons/thunder.svg";
import wind from "./icons/wind.svg";
import sun from "./icons/sun.svg";
import mist from "./icons/mist.svg";
import brokenCloud from "./icons/brokenCloud.svg";

const iconList = {
  cloud,
  partialCloud,
  partialRain,
  rain,
  snow,
  thunder,
  thermometer,
  wind,
  sun,
};

const openWeatherIcons = {
  "01": sun,
  "02": partialCloud,
  "03": cloud,
  "04": brokenCloud,
  "09": rain,
  10: rain,
  11: thunder,
  13: snow,
  50: mist,
};

export function getIcon(name) {
  if (iconList[name]) {
    return iconList[name];
  }
}

export function getWeatherIcon(name) {
    const nameSlice = name.substring(0,2)
    console.log(nameSlice)
    if (openWeatherIcons[nameSlice]) {
        return openWeatherIcons[nameSlice]
    }
}