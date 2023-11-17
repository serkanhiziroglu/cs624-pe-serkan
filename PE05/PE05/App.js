import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { LogBox } from 'react-native';

LogBox.ignoreLogs([
  'Non-serializable values were found in the navigation state',
]);

import Cities from './src/Items/Cities'
import AddCity from './src/Add/AddCity'
import AddCountry from './src/Add/AddCountry'
import Countries from './src/Items/Countries'

const Tab = createBottomTabNavigator();

export default class App extends Component {
  state = {
    cities: [],
    countries : []
  }

  addCity = (city) => {
    const cities = this.state.cities
    cities.push(city)
    this.setState({ cities })
  }

  addCountry = (country) => {
    const countries = this.state.countries
    countries.push(country)
    this.setState({ countries })
  }


  render() {
    return (
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Cities"  initialParams={{cities: this.state.cities, addCity: this.addCity}} component={Cities} />
          <Tab.Screen name="AddCity" initialParams={{cities: this.state.cities, addCity: this.addCity}} component={AddCity} />
          <Tab.Screen name="Countries" initialParams={{countries: this.state.countries, addCountry: this.addCountry}} component={Countries} />
          <Tab.Screen name="AddCountry" initialParams={{countries: this.state.countries, addCountry: this.addCountry}} component={AddCountry} />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}