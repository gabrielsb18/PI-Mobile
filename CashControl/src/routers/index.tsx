import { NativeScreenNavigationContainer } from "react-native-screens";
import {NavigationContainer} from '@react-navigation/native';

import RouterDrawer from "./routerDrawer";

export default function Routes() {
  return (
    <NavigationContainer>
      <RouterDrawer/>
    </NavigationContainer>
  );
}