import * as React from "react";
import { Text, View, TextInput, Button, Alert } from "react-native";

export function AuthScreen() {
    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Text style={{ fontSize: 40, paddingBottom: 30 }}>Вход</Text>
            <TextInput 
                style={{ height: 55, width: 200, borderColor: 'gray', borderWidth: 1, paddingLeft: 20, borderRadius: 5 }}
                placeholder="Логин"
            />
            <TextInput 
                style={{ height: 55, width: 200, borderColor: 'gray', borderWidth: 1, paddingLeft: 20, borderRadius: 5 }}
                placeholder="Пароль"
                secureTextEntry={ true }
            />
            <View style={{ paddingTop: 20, width: "50%" }}>
                <Button
                    title="Войти"
                    onPress={() => {
                        Alert.alert("Ошибка", "Неправильный логин или пароль");
                    }}
                    color="#6CB50D"
                />
            </View>
        </View>
    );
}