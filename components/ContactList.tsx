import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React, { useReducer } from 'react';

export default function ContactList() {
  const contacts = [
    {name: 'John Doe', phone: '123-456-7890', image: 'https://imgs.search.brave.com/jnbCorW7CVV-BJVsJNQY5M28FqCYMvFZpEecEMcV3aQ/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jZG4t/aWNvbnMtcG5nLmZy/ZWVwaWsuY29tLzI1/Ni8xNDkvMTQ5MDcx/LnBuZz9zZW10PWFp/c19oeWJyaWQ'},
    {name: 'Jane Smith', phone: '987-654-3210', image: 'https://imgs.search.brave.com/jnbCorW7CVV-BJVsJNQY5M28FqCYMvFZpEecEMcV3aQ/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jZG4t/aWNvbnMtcG5nLmZy/ZWVwaWsuY29tLzI1/Ni8xNDkvMTQ5MDcx/LnBuZz9zZW10PWFp/c19oeWJyaWQ'},
  ];

  return (
    <View>
      <Text style={styles.headingText}>ContactList</Text>
      <ScrollView style={styles.container} scrollEnabled={false}>
        {contacts.map(({name, phone, image}) => (
          <View key={name} style={styles.userCard}>
            <Image
              source={{
                uri: image,
              }}
              style={styles.userCardImage}
            />
            <Text style={styles.userName}>{name}</Text>
            <Text style={styles.userPhone}>{phone}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
  },
  container: {
    padding: 16,
  },
  userCard: {
    backgroundColor: '#f2f2f2',
    padding: 16,
    marginBottom: 8,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  userCardImage:{
    width: 64,
    height: 64,
    borderRadius: 32,
    marginLeft: 16,
    backgroundColor: '#ccc',
  },
  userName:{
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 8,
    color:'black'
  },
  userPhone:{
    fontSize: 16,
    color: '#888',
    marginTop: 4,
  }
});
