import { NativeScreenNavigationContainer } from "react-native-screens";
import {NavigationContainer} from '@react-navigation/native';

import RouterDrawer from "./routerDrawer";
import RouterDrawer2 from "./routerDrawerPersonalizada";

export default function Routes() {
  return (
    <NavigationContainer>
      <RouterDrawer2/>
    </NavigationContainer>
  );
}