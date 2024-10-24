import React from "react";
import { View, Text, Button } from 'react-native';

export default function ConsultaScreen({ }) {

    return (
        <View>
            <Text style={{ fontSize: 16, textAlign: 'center', fontWeight: 'bold' }}>Consulta de Usuário</Text>
            <Button
                style={{ borderRadius: 8, width: '100%' }}
                color="#00ffff"
                title="Consultar"
            />
        </View>
    );
}