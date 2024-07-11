import {StyleSheet, Text, View, Linking, Image, TouchableOpacity} from 'react-native';
import React from 'react';

export default function ActionCard() {
  function openWebsite(websiteLink: string) {
    Linking.openURL(websiteLink);
  }
  return (
    <View>
      <Text style={styles.headingText}>ActionCard</Text>
      <View style={[styles.card, styles.elevatedCard]}>
        <View style={styles.headingContainer}>
          <Text style={styles.headerText}>What's new in Action</Text>
        </View>
        <Image
          style={styles.cardImage}
          source={{
            uri: 'https://imgs.search.brave.com/4v1jU6nW_2LtdHfCNS7VXQqLpGAJmE6Q73o84ZZm-PQ/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS50aGVyZXNhbmFp/Zm9ydGhhdC5jb20v/aWNvbnMvZGVzaWdu/MmNvZGUuc3ZnP2hl/aWdodD0yMDc',
          }}
        />
        <View style={styles.bodyContainer}>
          <Text numberOfLines={6}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
            recusandae commodi culpa autem doloremque nam ex est! Facilis velit
            odit saepe a beatae tempore doloribus voluptates quis, suscipit,
            voluptate rerum corrupti quisquam minus ab modi facere quia quidem
            cupiditate laudantium corporis! Rerum optio dignissimos amet in
            impedit sequi, aliquid dolore.
          </Text>
        </View>
        <View style={styles.footerContainer}>
          <TouchableOpacity
          onPress={()=>openWebsite('https://theresanaiforthat.com/s/image+to+code/')}
          >
            <Text>
                Read More
            </Text>
          </TouchableOpacity>
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
    height: 340,
    borderRadius: 6,
    marginVertical: 12,
    marginHorizontal: 16,
  },
  elevatedCard: {
    backgroundColor: '# E07C24',
    elevation: 4,
    shadowOffset:{
      width: 2,
      height: 2,
    },
    shadowColor: '#333',
    shadowOpacity: 0.4,
    shadowRadius: 5,
  },
  headingContainer: {
    height: 40,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 8,
    backgroundColor: '# E07C24',
    elevation: 2,
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    paddingHorizontal: 8,
  },
  cardImage: {
    height: 300,
  },
  bodyContainer: {
    paddingHorizontal: 8,
    paddingVertical: 8,
    backgroundColor: '#F7F7F7',
    elevation: 2,
  },
  footerContainer: {
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E07C24',
    elevation: 2,
    marginBottom: 8,
    paddingHorizontal: 8,
  },
});
