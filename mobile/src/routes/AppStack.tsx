import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";

import Landing from '../pages/Landing';
import GiveClasses from '../pages/GiveClasses';
import StudyTabs from "./StudyTabs";

const {Navigator, Screen}  = createStackNavigator();

function AppStack() {
    return ( // headerShown option only works when directly specifying the pages to hide header pane
        <NavigationContainer>
            <Navigator screeOptions={{headerShown: false}}>
                <Screen name="Landing" component={Landing} options={{headerShown: false}}/>
                <Screen name="GiveClasses" component={GiveClasses} options={{headerShown: false}}/>
                <Screen name="Study" component={StudyTabs} options={{headerShown: false}}/>
            </Navigator>
        </NavigationContainer>
    );
}

export default AppStack;