import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import symbolicateStackTrace from 'react-native/Libraries/Core/Devtools/symbolicateStackTrace';

export default function FancyCard() {
  return (
    <View>
      <Text style={styles.headingText}>FancyCard</Text>
      <View style={[styles.card, styles.cardElevated]}>
        <Image
          source={{
            uri: 'https://imgs.search.brave.com/lALIj_pUCdQIBxud8RVQoAwDjFKrpur7Kl4tAkJj8FY/rs:fit:500:0:0:0/g:ce/aHR0cDovL2ltZy1w/bHVzLmNvbS93cC1j/b250ZW50L3VwbG9h/ZHMvMjAxNS8wNC9p/bWFnZTI2Mi0wMS01/MTJ4MzQwLmpwZw',
          }}
          style={styles.cardImage}
        />
        <View style={styles.cardBody}>
          <Text style={styles.cardTitle}>Buildings</Text>
          <Text style={styles.cardLabel}>City</Text>
          <Text style={styles.cardDis}>Lorem ipsum dolor sit amet.</Text>
          <Text style={styles.cardFooter}>Footer</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
  },
  card: {
    width: 350,
    height: 350,
    borderRadius: 6,
    marginHorizontal: 16,
    marginVertical: 12,
  },
  cardElevated: {
    backgroundColor: 'white',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  cardImage: {
    height: 180,
    marginBottom: 8,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
  },
  cardBody: {
    flex: 1,
    flexGrow: 1,
    paddingHorizontal: 12,
  },
  cardTitle: {
    color: '#000000',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 6,
  },
  cardLabel: {
    color: '#000000',
    fontSize: 14,
    marginBottom: 6,
  },
  cardDis: {
    color: '#242B2E',
    fontSize: 12,
    marginBottom: 12,
    marginTop: 6,
    flexShrink:1
  },
  cardFooter: {
    color: '#000000',
  },
});
