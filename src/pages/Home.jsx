import React, { useState, useEffect } from 'react';
import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, Text, View, TouchableOpacity, FlatList, Image, ScrollView } from 'react-native';
import Logo from "../assets/logo.svg";
import Stroke from "../assets/stroke.svg";
import Message from "../assets/message.svg";
import { api } from '../services/api';
import Points from "../assets/points.svg";
import Comment from "../assets/Comment.svg";
import Share from "../assets/Share.svg";
import Bookmark from "../assets/Bookmark.svg";
import image from "../assets/image.png";
import Foto from "../assets/foto.png"

export function Home({ navigation }) {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  async function getUsers() {
    try {
      const response = await api.get('?results=20&nat=BR');
      setUsers(response.data.results);
      if (response.data.results.length > 0) {
        setSelectedUser(response.data.results[0]);
      }
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  }

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Logo />
        <View style={styles.headerOptions}>
          <Stroke />
          <Message />
        </View>
      </View>
      <ScrollView style={{width:'100%'}}>
      <View style={styles.stories}>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={users}
        keyExtractor={item => String(item.login.uuid)}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.storesCard}
            onPress={() => navigation.navigate('Detalhes', { item })}
          >
              <LinearGradient
              colors={["#D52865", "#F7B55A"]}
              style={styles.storesCard}
            >
            <View style={styles.user}>
              <Image source={{ uri: item.picture.medium }} style={styles.userImage} />
            </View>
            </LinearGradient>
          </TouchableOpacity>
        )}
      />

          </View>
      <View style={styles.content}>
        {selectedUser && (
          <View style={styles.contentHeader}>
            <View style={styles.userInfo}>
              <Image
                source={{ uri: selectedUser.picture.medium }}
                style={styles.contentUserImage}
              />
              <Text style={styles.contentUserName}>{`${selectedUser.name.first} ${selectedUser.name.last}`}</Text>
            </View>
            <Points />
          </View>
        )}
        <View style={styles.contentHeaderLeft}>
          <View style={styles.contentImage}>
            <Image source={image} style={{ flex: 1 }} resizeMode="cover" />
          </View>
          <View style={styles.contentFooterOptions}>
            <TouchableOpacity style={styles.contentFooterOptionsButton}>
              <TouchableOpacity>
                <Stroke />
              </TouchableOpacity>
              <TouchableOpacity>
                <Comment />
              </TouchableOpacity>
              <TouchableOpacity>
                <Share />
              </TouchableOpacity>
            </TouchableOpacity>
            <TouchableOpacity>
              <Bookmark />
            </TouchableOpacity>
          </View>
          <View style={styles.contentFooterTexts}>
            <Text style={[styles.contentFooterText1, styles.contentFooterText]}>
              Como a Internet das Coisas (IoT) está mudando o mundo?
            </Text>
            <Text style={[styles.contentFooterText2, styles.contentFooterText]}>
              Ver todos os 3 comentários
            </Text>
            <Text style={[styles.contentFooterText3, styles.contentFooterText]}>
              3 horas atrás Ver Tradução
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.content}>
        {selectedUser && (
          <View style={styles.contentHeader}>
            <View style={styles.userInfo}>
              <Image
                source={Foto}
                style={styles.contentUserImage}
              />

              <Text style={styles.contentUserName}>{`Sabrina Sato`}</Text>
            </View>
            <Points />
          </View>
        )}
        <View style={styles.contentHeaderLeft}>
          <View style={styles.contentImage}>
            <Image source={image} style={{ flex: 1 }} resizeMode="cover" />
          </View>
          <View style={styles.contentFooterOptions}>
            <TouchableOpacity style={styles.contentFooterOptionsButton}>
              <TouchableOpacity>
                <Stroke />
              </TouchableOpacity>
              <TouchableOpacity>
                <Comment />
              </TouchableOpacity>
              <TouchableOpacity>
                <Share />
              </TouchableOpacity>
            </TouchableOpacity>
            <TouchableOpacity>
              <Bookmark />
            </TouchableOpacity>
          </View>
          <View style={styles.contentFooterTexts}>
            <Text style={[styles.contentFooterText1, styles.contentFooterText]}>
              Como a Internet das Coisas (IoT) está mudando o mundo?
            </Text>
            <Text style={[styles.contentFooterText2, styles.contentFooterText]}>
              Ver todos os 3 comentários
            </Text>
            <Text style={[styles.contentFooterText3, styles.contentFooterText]}>
              3 horas atrás Ver Tradução
            </Text>
          </View>
        </View>
      </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
    alignItems: "center",
  },
  header: {
    width: "100%",
    height: 56,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    marginTop: 50,
  },
  headerOptions: {
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: 10,
    gap: 20,
  },
  stories: {
    width: "100%",
    padding: 10,
    alignContent: "center",
  },
  storesCard: {
    borderRadius: 100,
    marginRight: 14,
    alignItems: "center",
  },
  user: {
    alignItems: "center",
    padding: 2,
  },
  userImage: {
    height: 64,
    width: 64,
    borderRadius: 35,
  },
  content: {
    width: "100%",
    marginBottom: 20,
  },
  contentHeader: {
    height: 90,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  contentUserImage: {
    height: 64,
    width: 64,
    borderRadius: 45,
    marginRight: 10,
  },
  contentUserName: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
  },
  contentImage: {
    width: "100%",
    height: 355,
  },
  contentFooter: {},
  contentFooterOptions: {
    height: 40,
    paddingHorizontal: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  contentFooterOptionsButton: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  contentFooterText: {
    color: "#fff",
  },
  contentFooterTexts: {
    paddingLeft: 20,
    gap: 10,
  },
  contentFooterText1: {
    fontSize: 14,
  },
  contentFooterText2: {
    fontSize: 14,
  },
  contentFooterText3: {
    fontSize: 10,
  },
  userInfo: {
    flexDirection: "row",
    alignItems: "center",
  },
  });
