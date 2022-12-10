import axios from "axios";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { ListItem, Avatar, Button, Header } from "react-native-elements";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ScrollView } from "react-native-gesture-handler";
import { useIsFocused } from "@react-navigation/native";

export default function ListaScreen({navigation, route }) {
  const [list, setlist] = useState([]);
  const refresh = useIsFocused();

  useEffect(() => {
    function consultarDados() {
      axios
        .get("http://professornilson.com/testeservico/clientes")
        .then(function (response) {
          setlist(response.data);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
    consultarDados();
  }, [refresh]);

  return (
    <View>
      <Header
        centerComponent={{ text: "Lista", style: { color: "#fff" } }}
        rightComponent={<Button title="+" onPress={()=> navigation.navigate('Inserir')}/>}
      />
      <ScrollView>
        {list.map((linha, indice) => (
          <ListItem key={indice} bottomDivider onPress={()=> navigation.navigate('Alterar', 
          {
            nome: linha.nome,
            telefone:linha.telefone,
            cpf:linha.cpf,
            id:linha.id
          })}>
            <Avatar
              source={{
                uri: "http://cdn.onlinewebfonts.com/svg/img_329115.png",
              }}
            />
            <ListItem.Content>
              <ListItem.Title>{linha.nome}</ListItem.Title>
              <ListItem.Subtitle>{linha.email}</ListItem.Subtitle>
            </ListItem.Content>
          </ListItem>
        ))}
      </ScrollView>
    </View>
  );
}
