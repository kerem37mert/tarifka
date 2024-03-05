import React from "react";
import { View, Text, useColorScheme } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

//Pages
import Categories from "./pages/Categories";

const Stack = createNativeStackNavigator();

const Router = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen options={{title: "Categories"}} name="categories" component={Categories} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Router;