import  React from 'react';
import { Text, StyleSheet } from 'react-native';
import  Header from '../../components/Header';

const CreateRecord = () => {
    return (
       <>
        <Header />
       </>
    );

};

const styles = StyleSheet.create({
    text: {
      color: 'blue',
      fontSize: 50,
      textAlign: 'center',
      marginTop: 100
    }
  });

export default CreateRecord;