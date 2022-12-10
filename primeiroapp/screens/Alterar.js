import axios from "axios";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { Button, Header } from "react-native-elements";
import FlashMessage, { showMessage } from "react-native-flash-message";

export default function AlterarScreen({ navigation, route }) {
  const [getNome, setNome] = useState();
  const [getTelefone, setTelefone] = useState();
  const [getCpf, setCpf] = useState();
  const [getId, setId] = useState();

  // receber dados do contatos da pagina Lista
  useEffect(() => {
    if (route.params) {
      const { nome } = route.params;
      const { telefone } = route.params;
      const { cpf } = route.params;
      const { id } = route.params;

      setNome(nome);
      setTelefone(telefone);
      setCpf(cpf);
      setId(id);
    }
  }, []);

  // alterar os dados da API na Lista - metodo PUT
  function alterarDados() {
    axios
      .put("http://professornilson.com/testeservico/clientes/" + getId, {
        nome: getNome,
        telefone: getTelefone,
        cpf: getCpf,
      })
      .then(function (response) {
        showMessage({
          message: "Registro alterado com sucesso!!",
          type: "success",
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  // Exclui os dados da API na Lista - metodo DELETE
  function excluirDados() {
    axios
      .delete("http://professornilson.com/testeservico/clientes/" + getId)
      .then(function (response) {
        showMessage({
          message: "Registro excluido com sucesso!!",
          type: "danger",
        });

        setNome(null);
        setTelefone(null);
        setCpf(null);
        setId(null);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <View style={{ alignItems: "center" }}>
      <FlashMessage position="top" />
      <Header
        centerComponent={{ text: "Alterar dados", style: { color: "#fff" } }}
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
        title="Alterar"
        style={{ paddingTop: 20, width: 300 }}
        onPress={() => alterarDados()}
      />
      <Button
        title="Excluir"
        style={{ paddingTop: 20, width: 300 }}
        onPress={() => excluirDados()}
      />
    </View>
  );
}
