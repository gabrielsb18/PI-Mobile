import { NativeScreenNavigationContainer } from "react-native-screens";
import {NavigationContainer} from '@react-navigation/native';

import RouterTab from "./routerTab";

export default function Routes() {
  return (
    <NavigationContainer>
      <RouterTab />
    </NavigationContainer>
  );
}