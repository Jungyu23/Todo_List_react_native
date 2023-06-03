import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {useState} from 'react'
import MainList from './screen/MainList'
import Info from './screen/Info'
import TabBarIcon from './components/TabBarIcon'

const Stack = createStackNavigator()
const Tabs = createBottomTabNavigator()

const MainStack = () => (
    <Stack.Navigator>
      <Stack.Screen
        name="MainList"
        component={MainList}
        options={{
          headerTitle: '나만의 TODO List',
          headerTitleAlign: 'center',
          headerStyle: { 
            backgroundColor: 'blueviolet',
          },
          headerTintColor: 'white',
        }}
      />
    </Stack.Navigator>
  )
  const InfoStack = () => (
    <Stack.Navigator>
      <Stack.Screen
        name="Info"
        component={Info}
        options={{
          headerTitle: '사용 설명',
          headerTitleAlign: 'center',
          headerStyle: { 
            backgroundColor: 'blueviolet',
          },
          headerTintColor: 'white',
        }}
      />
    </Stack.Navigator>
  )

export default function App() {
  return (
    <NavigationContainer>
      <Tabs.Navigator
        initialRouteName = "MainList"
        tabBarOptions = {{
          activeBackgroundColor: 'blueviolet',
          activeTintColor: 'white',
          inactiveBackgroundColor: 'darkslateblue',
          inactiveTintColor: 'black',
          labelPosition:'beside-icon'
        }}
        screenOptions={({route}) => ({
          tabBarLabel: route.name,
          tabBarIcon: ({focused}) => TabBarIcon(focused, route.name)
        })}
      >
        <Tabs.Screen name = "메인" component = {MainStack} initialParams={{refresh: false}}/>
        <Tabs.Screen name = "사용 설명" component = {InfoStack} />
      </Tabs.Navigator>
    </NavigationContainer>
  )
}