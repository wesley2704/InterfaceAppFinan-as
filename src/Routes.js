import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from "./pages/Home";
import Money from "./pages/Home/Money";
import Store from "./pages/Home/Store";

import CustonTabBar from "./Components/CustonTabBar";
const Tab = createBottomTabNavigator();
export default function Routes() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarLabel: false,
        tabBarActiveTintColor: "#121221",
        tabBarStyle: {
          borderTopWidth: 0,
          backgroundColor: "#fff",
        },
      }}
      tabBar={(prosp) => <CustonTabBar {...prosp} />}
    >
      <Tab.Screen 
      name="Home" 
      component={Home} 
      options={{
        tabBarIcon:"compare-arrows"
      }}
      />
      <Tab.Screen 
      name="Money" 
      component={Money} 
      options={{
        tabBarIcon:"attach-money"
      }}
      />
      <Tab.Screen 
      name="Store" 
      component={Store} 
      options={{
        tabBarIcon:"storefront"
      }}
      />
    </Tab.Navigator>
  );
}
