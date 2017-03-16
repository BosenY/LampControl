/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React,{ Component } from 'react';
import Center from '../pages/Center'
import Home from '../pages/Home'
import List from '../pages/List'
import Login from '../pages/Login'
import Loading from '../pages/Loading'
import {
  Scene,
  Router,
  TabBar,
  ActionConst
} from 'react-native-router-flux';
 import {
StyleSheet,
View,
Text
 } from 'react-native';
import TabIcon from '../components/TabIcon';
// const RouterWithRedux = connect()(Router);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
    navBar: {
    backgroundColor: '#3e9ce9'
  },
  navBarTitle: {
    color: '#fff',
    fontSize: 20,
  }
});
 class App extends Component {
     
  render() {
    return <Router
    footer={TabBar}
    titleStyle={styles.navBarTitle}
    navigationBarStyle={styles.navBar}
    ><Scene 
    type={ActionConst.REPLACE}
        key="Login" 
        component={Login} 
        hideNavBar 
        hideTabBar 
        initial
        />
        <Scene 
        key="Loading" 
        component={Loading} 
        hideNavBar 
        hideTabBar 
        />
      <Scene key="Tabbar"
      tabs={true}
      type={ActionConst.REPLACE}
      >
        
        <Scene 
        key="Home" 
        component={Home} 
        title="Home"
        icon={TabIcon}
        iconName="md-home"
        initial
        />
        <Scene 
        key="List" 
        component={List} 
        title="List"
        icon={TabIcon}
        iconName="md-list"
        />
        <Scene 
        key="Center" 
        component={Center}
        title="Center"
        icon={TabIcon}
        iconName="md-person"
        />
      </Scene>
    </Router>
  }
}



export default App 