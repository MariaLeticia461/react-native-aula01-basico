import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Perfil from '../../views/Perfil/Perfil';
import RotasDrawer from '../rotasDrawer/RotasDrawer';

const Tab = createBottomTabNavigator();

const RotasTab = () => {
    return(
        <Tab.Navigator 
        tabBarOptions={ {labelStyle: { fontSize: 24 },
                        style: {backgroundColor: '#936138'},
                        activeTintColor: '#D2B48C'} }
        >
        <Tab.Screen name="Menu" component={RotasDrawer} />
        <Tab.Screen name="Sobre Nós" component={Perfil} />
        </Tab.Navigator>
    );
}

export default RotasTab