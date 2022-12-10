import axios from "axios";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { Button, Header } from "react-native-elements";
import FlashMessage, { showMessage } from "react-native-flash-message";


export default function Inserir({ navigation, route }) {
  const [getNome, setNome] = useState();
  const [getTelefone, setTelefone] = useState();
  const [getCpf, setCpf] = useState();

  async function inserirDados() {
    await axios
      .post("http://professornilson.com/testeservico/clientes", {
        nome: getNome,
        telefone: getTelefone,
        cpf: getCpf,
      })
      .then(function (response) {
        showMessage({
          message: "Registro salvo com sucesso!!",
          type: "success",
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <View style={{ alignItems: "center" }}>
      <FlashMessage position="top" />
      <Header
        centerComponent={{ text: "Inserir dados", style: { color: "#fff" } }}
        leftComponent={
          <Button title="<" onPress={() => navigation.navigate("Lista")} />
        }
      />
      <Text>Digite seu nome</Text>
      <TextInput
        style={{ height: 40, width: 300, borderColor: "gray", borderWidth: 1 }}
        onChangeText={(text) => setNome(text)}
        value={getNome}
      />

      <Text>Digite seu telefone</Text>
      <TextInput
        style={{ height: 40, width: 300, borderColor: "gray", borderWidth: 1 }}
        onChangeText={(text) => setTelefone(text)}
        value={getTelefone}
      />

      <Text>Digite seu CPF</Text>
      <TextInput
        style={{ height: 40, width: 300, borderColor: "gray", borderWidth: 1 }}
        onChangeText={(text) => setCpf(text)}
        value={getCpf}
      />
      <Button
        title="Salvar dados"
        style={{ paddingTop: 20, width: 300 }}
        onPress={() => inserirDados()}
      ></Button>
    </View>
  );
}
