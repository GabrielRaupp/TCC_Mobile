import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Footer from '../componests/layout/Container'; 
import Navbar from '../componests/layout/Navbar'; 
import Home from '../componests/pages/Home'; 
import Horarios from '../componests/pages/Horarios'; 
import NewHorario from '../componests/pages/NewHorario'; 
import Contact from '../componests/pages/Contact'; 
import Horario from '../componests/pages/Horario'; 
import SingUp from '../componests/pages/SingUp'; 
import Login from '../componests/pages/Login'; 
import Cadastro from '../componests/pages/Cadastro'; 
import ForgotPassword from '../componests/pages/ForgotPassword'; 
import ResetarSenha from '../componests/pages/ResetarSenha'; 
import Perfil from '../componests/pages/Perfil'; 

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer> {/* This is the ONLY NavigationContainer */}
      <Navbar /> {/* Navbar is placed at the top of the screen */}
      <Stack.Navigator initialRouteName="Home">
        {/* Define your main screens here */}
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Horarios" component={Horarios} />
        <Stack.Screen name="Contact" component={Contact} />
        <Stack.Screen name="NewHorario" component={NewHorario} />
        <Stack.Screen name="Horario" component={Horario} />
        <Stack.Screen name="SingUp" component={SingUp} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Cadastro" component={Cadastro} />
        <Stack.Screen name="Perfil" component={Perfil} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
        <Stack.Screen name="ResetarSenha" component={ResetarSenha} />
      </Stack.Navigator>
      <Footer /> {/* Footer is placed after the navigation stack */}
    </NavigationContainer>
  );
}

export default App;
