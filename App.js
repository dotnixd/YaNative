import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

import { AuthScreen } from "./screens/auth";
import { UpdatesScreen } from "./screens/updates";

const Tab = createMaterialBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Вход" component={ AuthScreen } />
        <Tab.Screen name="Обновления" component={ UpdatesScreen } />
      </Tab.Navigator>
    </NavigationContainer>
  );
}