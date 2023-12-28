import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import {Image} from 'react-native'
import MapScreen from "../screens/MapScreen";
import SettingsScreen from "../screens/SettingsScreen";
import SavedScreen from "../screens/ServicesScreen"
import FAQScreen from "../screens/FaqScreen"
import HomeStack from "./HomeStack";

const Tab = createBottomTabNavigator();

const TabNav = () => {
    return (
      <Tab.Navigator
        screenOptions={{headerShown:false}}
      >
        <Tab.Screen name="Home" component={HomeStack} />
        <Tab.Screen name="Rented Cars" component={MapScreen} />
        <Tab.Screen name="Services" component={SavedScreen} />
        {/* <Tab.Screen name="Settings" component={SettingsScreen} /> */}
        <Tab.Screen name="Help Center" component={FAQScreen} />
      </Tab.Navigator>
    );
  };

  export default TabNav