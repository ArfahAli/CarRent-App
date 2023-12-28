import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import {Image} from 'react-native'
import MapScreen from "../screens/MapScreen";
import SettingsScreen from "../screens/SettingsScreen";
import SavedScreen from "../screens/SavedScreen"
import HomeStack from "./HomeStack";
// const homeIconActive = require("../../assets/icons/home-active.png");
// const homeIcon = require("../../assets/icons/home.png");
// const compassIconActive = require("../../assets/icons/compass-active.png");
// const compassIcon = require("../../assets/icons/compass.png");
// const savedIconActive = require("../../assets/icons/saved-active.png");
// const savedIcon = require("../../assets/icons/saved.png");
// const settingsIconActive = require("../../assets/icons/settings-active.png");
// const settingsIcon = require("../../assets/icons/settings.png");

const Tab = createBottomTabNavigator();

const TabNav = () => {
    return (
      <Tab.Navigator
        screenOptions={{headerShown:false}}
      >
        <Tab.Screen name="HomeStack" component={HomeStack} />
        <Tab.Screen name="Map" component={MapScreen} />
        <Tab.Screen name="Saved" component={SavedScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    );
  };

  export default TabNav