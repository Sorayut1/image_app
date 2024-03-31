import React, { useState } from 'react';
import { View, Button, Image, StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { storage } from './database/firebasedb';
import { uploadBytes, ref } from 'firebase/storage';
import UploadMediaFile from './src';

export default function App() {
 

  return (
    <View style={styles.container}>
      <UploadMediaFile/>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
 
});
