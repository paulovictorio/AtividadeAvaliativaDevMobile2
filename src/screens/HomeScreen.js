import React from "react";
import { View, Text, Button } from "react-native";

export default function HomeScreen({ navigation }) {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Pagina Inicial</Text>
            <Button
                color="#00ffff"
                title="Ir para Cadastro"
                onPress={() => navigation.navigate('Cadastro')}
            />
            <Button
                color="#993399"
                title="Ir para Consulta"
                onPress={() => navigation.navigate('Consulta')}
            />
        </View>
    )
}