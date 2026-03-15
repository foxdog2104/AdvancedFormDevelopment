import MaterialCommunityIcons from "@expo/vector-icons/FontAwesome";
import { Tabs } from "expo-router";
import React from "react";
import { StatusBar } from "react-native";

export default function RootLayout() {
  return <React.Fragment>
      <StatusBar/>
      <Tabs>
        <Tabs.Screen name="index" options={{
            tabBarIcon: ({color, size}) => (
              <MaterialCommunityIcons name="home" size={size} color={color} />
            ),
            tabBarLabel: "Home"
          }}
        />
        <Tabs.Screen name="signin" options={{
            tabBarIcon: ({color, size}) => (
              <MaterialCommunityIcons name="user" size={size} color={color} />
            ),
            tabBarLabel: "Sign in page"
          }}
        />
        <Tabs.Screen name="signup" options={{
            tabBarIcon: ({color, size}) => (
              <MaterialCommunityIcons name="user-plus" size={size} color={color} />
            ),
            tabBarLabel: "Sign up page"
          }}
        />
        <Tabs.Screen name="employee-form" options={{
            tabBarIcon: ({color, size}) => (
              <MaterialCommunityIcons name="wpforms" size={size} color={color} />
            ),
            tabBarLabel: "Employee Form"
          }}
        />
      </Tabs>
      
  </React.Fragment>;
}
