import React, {Component} from 'react';
import { View, Text, StyleSheet,ScrollView } from 'react-native';
import { Header} from 'react-native-elements';
import PRODUCTS from '../products.js';
import ItemList from './ItemList.js';
import {connect} from 'react-redux'

  class HomeScreen extends Component {

    
    renderItemList = () => {
        return PRODUCTS.map((item) => {
            return (
              <ItemList item={item} />
            );
          });
      };


    render() { 
        return (
        <View style={styles.container}>
            {/* <Text >Home</Text> */}
            <Header

                centerComponent={{ text: 'BOOKS', style: { color: 'rgba(127,63,191,.9)', fontSize:18, fontWeight:'bold' } }}

                containerStyle={{
                    backgroundColor: '#FFF',
                }}
                />

            {/* ----- */}
            <ScrollView
                contentContainerStyle={{
                flexDirection: "row",
                flexWrap: "wrap",
                justifyContent: "space-between"
                }}
            >
                {/* ItemList */}
                {this.renderItemList()}
            </ScrollView>
        </View>
        );
    }
};



export default (HomeScreen);


const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
});