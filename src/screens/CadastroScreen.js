import React from "react";
import { View, Text, TextInput, Button } from 'react-native';

export default function CadastroScreen({ }) {

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontSize: 20, textAlign: 'center', fontWeight: 'bold' }}>Cadastro de Usuário</Text>
            <TextInput 
                style={{ borderColor: '#000', borderWidth: 1, paddingLeft: 8, marginBottom: 16, width: '75%' }}
                placeholder="Nome"
            />
            <TextInput 
                style={{ borderColor: '#000', borderWidth: 1, paddingLeft: 8, marginBottom: 16, width: '75%' }}
                placeholder="Email"
            />
            <TextInput 
                style={{ borderColor: '#000', borderWidth: 1, paddingLeft: 8, marginBottom: 16, width: '75%' }}
                placeholder="Senha"
            />
            <Button
                color="#993399"
                title="Cadastrar"
            />
        </View>
    );
}