import React,{Component} from 'react';
import { Text, View,TextInput,TouchableOpacity,StyleSheet,Alert } from 'react-native';
import {connect} from 'react-redux';

function mapDispatchtoProps(dispatch){
    return{
      addPromo : (percent) => dispatch ({type:'ADD_PROMO',payload: {promo:percent}}) 
    }
  };
  

class PromotionScreen extends Component {

    handlepromo = (text) => {
        this.setState({ userPromo: text })
     }

    submit = (promo) => {
        if (promo === 'SAVE10') {
            this.props.addPromo(10)
            this.props.navigation.navigate('Cart')
            Alert.alert('','promo SAVE10 added ')
            return
        }
        if (promo === 'SAVE20') {
            this.props.addPromo(20)
            this.props.navigation.navigate('Cart')
            Alert.alert('','promo SAVE20 added ')
            return
        }
        Alert.alert('','INVALID PROMO' )
    }

    state = {
        userPromo: '',
     }
    render() {
    return (
        <View style = {styles.container}>
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = " enter a promo "
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"
               onChangeText = {this.handlepromo}
               testID={'promo-input'} />
            <TouchableOpacity
                style = {styles.submitButton}
                onPress = {
                () => this.submit(this.state.userPromo)
                }>
            <Text style = {styles.submitButtonText}> Submit </Text>
        </TouchableOpacity>
        </View>
            
    );
  };};

export default connect (null,mapDispatchtoProps)(PromotionScreen);

const styles = StyleSheet.create({
    container: {
       paddingTop: 23
    },
    input: {
       margin: 15,
       height: 40,
       borderColor: '#7a42f4',
       borderWidth: 1
    },
    submitButton: {
       backgroundColor: '#7a42f4',
       padding: 10,
       margin: 15,
       height: 40,
    },
    submitButtonText:{
       color: 'white'
    }
 })