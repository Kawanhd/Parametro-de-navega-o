
import React from 'react';
import { useRoute } from '@react-navigation/native';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import Points from "../assets/points.svg";
import Icon from 'react-native-vector-icons/FontAwesome';

export function Details({ navigation }) {
  const { params } = useRoute();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="chevron-left" size={20} color="white" />
        </TouchableOpacity>
        <Points />
      </View>
      <View style={styles.imageView}>
      <View style={styles.followContainer}>
              <Text style={styles.followText}>Publicações</Text>
              <Text style={styles.followCount}>1</Text>
            </View>
            <View style={styles.followContainer}>
              <Text style={styles.followText}>Seguidores</Text>
              <Text style={styles.followCount}>1,5M</Text>
            </View>
            <View style={styles.followContainer}>
              <Text style={styles.followText}>Seguindo</Text>
              <Text style={styles.followCount}>100</Text>
            </View>
        <Image style={styles.image} source={{ uri: params.item.picture.large }} />
      </View>
      <View style={styles.infoView}>
        <Text style={styles.info}><Text style={styles.bold}>- Nome: </Text>{params.item.name.first} {params.item.name.last}</Text>
        <Text style={styles.info}><Text style={styles.bold}>- E-mail: </Text>{params.item.email}</Text>
        <Text style={styles.info}><Text style={styles.bold}>- Telefone: </Text>{params.item.cell}</Text>
        <Text style={styles.info}><Text style={styles.bold}>- Cidade/UF: </Text>{params.item.location.city}, {params.item.location.state}</Text>
        <Text style={styles.info}><Text style={styles.bold}>- Endereço: </Text>{params.item.location.street.name}, N° {params.item.location.street.number}</Text>
      </View>
      <View style={styles.line}></View>
      <View style={styles.contentUserImage}>
        <Image style={styles.imageContainer} source={{ uri: params.item.picture.large }} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },

  header: {
    marginTop: 35,
    paddingHorizontal: 18,
    justifyContent: "space-between",
    flexDirection: "row",
  },

  imageView: {
    paddingHorizontal: 5,
    marginBottom: 2, 
    paddingVertical: 20, 
    justifyContent:"space-evenly",
    flexDirection: "row-reverse",
    alignItems:"center",

   
  },

  image: {
    width: 90,
    height: 90,
    borderRadius: 150,
  },

  infoView: {
    paddingHorizontal: 10,
  },
  followText: {
  fontSize: 16,
  color: "#fff",
  marginLeft: 10,
},
  followCount: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
    marginLeft: 21,
   
  },
  info: {
    fontSize: 15,
    marginBottom: 5,
    color: '#fff',
  },
  line:{
    backgroundColor: "#fff",
    height: 1,
    marginVertical: 10, 
  },

  bold: {
    fontWeight: 'bold',
    marginBottom: 20,
  },
  imageContainer: {
    width: 150, // Defina o tamanho desejado para a View que contém a imagem
    height: 150, // Defina o tamanho desejado para a View que contém a imagem
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "black",
  },
  contentUserImage: {
    width: "100%", // Isso fará com que a imagem ocupe todo o espaço disponível na View
    height: "100%", // Isso fará com que a imagem ocupe todo o espaço disponível na View
  },
});

export default Details;
