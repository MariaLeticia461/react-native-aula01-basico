import React from "react";
import { createDrawerNavigator } from '@react-navigation/drawer';
import Colecao from '../../views/Colecao/Colecao';
import Item from '../../views/Item/Item';
import Perfil from '../../views/Perfil/Perfil';
import RotasPrincipalStack from '../rotasStack/RotasPrincipalStack';

const Drawer = createDrawerNavigator();

const RotasDrawer = () => {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Menu" component={RotasPrincipalStack}/>
            <Drawer.Screen name="Bibliografia" component={Colecao}/>
            <Drawer.Screen name="Musicas" component={Item}/>
            <Drawer.Screen name="Sobre" component={Perfil}/>
        </Drawer.Navigator>
    );
}

export default RotasDrawer;