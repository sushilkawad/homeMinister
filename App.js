import React, {useEffect} from 'react';
import {Container} from 'native-base';
import {Provider} from 'react-redux';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';

import Home from './src/components/screens/home';
import Login from './src/components/screens/login';
import Register from './src/components/screens/registration';
import Profile from './src/components/screens/profile';
import About from './src/components/screens/about';
import Contact from './src/components/screens/contact';
import store from './src/redux/Store';
import {getPersistData, removePersistData} from './src/constants';
import Sidebar from './src/components/common/sidebar';
import actions from './src/redux/Action';

const App = () => {
  const {Screen, Navigator} = createDrawerNavigator();

  useEffect(() => {
    getPersistData('email').then(email => {
      console.log('persistEmail::', email);
      if (email) {
        console.log(email);
      } else {
        actions.logout();
        removePersistData('email');
      }
    });
  }, []);

  return (
    <Provider store={store}>
      <Container>
        <NavigationContainer>
          <Navigator
            initialRouteName="Home"
            drawerContent={props => <Sidebar {...props} />}>
            <Screen name="Home" component={Home} />
            <Screen name="Profile" component={Profile} />
            <Screen name="Login" component={Login} />
            <Screen name="Registration" component={Register} />
            <Screen
              name="About"
              options={{title: 'About Us'}}
              component={About}
            />
            <Screen
              name="Contact"
              options={{title: 'Contact Us'}}
              component={Contact}
            />
          </Navigator>
        </NavigationContainer>
      </Container>
    </Provider>
  );
};

export default App;
