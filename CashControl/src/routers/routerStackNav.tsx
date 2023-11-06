import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../../Screens/Login/Login";

export default function StackRoutes() {

  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="Login"
        component={Login}  //StackRoutesTR
        options={
          {
            //Bloqueia o gesto para o drawer na tela de login
            gestureEnabled: true
          }
        }
      />
    </Stack.Navigator>
  );
}
