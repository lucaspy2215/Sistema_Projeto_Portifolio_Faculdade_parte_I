import React, { useState } from 'react';
import { 
    View, 
    Text, 
    SafeAreaView, 
    ScrollView, 
    TouchableOpacity, 
    ActivityIndicator,
    Alert 
} from 'react-native';
import { useRouter } from 'expo-router'; 
import { MaterialIcons, Ionicons, Octicons } from '@expo/vector-icons';

import { themas } from '../../src/global/themes'; 
import { Input } from '../../src/components/Input';
import { style } from './style_cadastro';

export default function Cadastro() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);

    // Estados do formulário
    const [name, setName] = useState('');
    const [cpf, setCpf] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    
    const [showPassword, setShowPassword] = useState(true);
    const [showConfirmPassword, setShowConfirmPassword] = useState(true);

    const handleRegister = () => {
        if (!name || !cpf || !email || !password || !confirmPassword) {
            return Alert.alert("Atenção", "Preencha todos os campos obrigatórios!");
        }
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            Alert.alert("Sucesso", "Cadastro realizado!", [{ text: "OK", onPress: () => router.back() }]);
        }, 2000);
    };

    return (
        <SafeAreaView style={style.container}>
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ flexGrow: 1 }}>
                
                {/* Cabeçalho */}
                <View style={style.header}>
                    <TouchableOpacity style={style.backButton} onPress={() => router.back()}>
                        <Ionicons name="arrow-back" size={28} color="#fff" />
                    </TouchableOpacity>
                    <Ionicons name="add-circle" size={50} color="#fff" />
                    <Text style={style.brandName}>+Saúde</Text>
                </View>

                {/* Card de Cadastro */}
                <View style={style.card}>
                    <Text style={style.title}>Cadastro</Text>

                    <Input 
                        title="Nome"
                        placeholder="Nome completo"
                        iconLeft={Ionicons}
                        iconLeftName="person-outline"
                        value={name}
                        onChangeText={setName}
                    />

                    <Input 
                        title="CPF"
                        placeholder="000.000.000-00"
                        iconLeft={MaterialIcons}
                        iconLeftName="credit-card"
                        value={cpf}
                        onChangeText={setCpf}
                        keyboardType="numeric"
                    />

                    <Input 
                        title="Email"
                        placeholder="seu@email.com"
                        iconLeft={MaterialIcons}
                        iconLeftName="alternate-email"
                        value={email}
                        onChangeText={setEmail}
                        autoCapitalize="none"
                    />

                    <Input 
                        title="Senha"
                        placeholder="********"
                        iconLeft={Ionicons}
                        iconLeftName="lock-closed-outline"
                        secureTextEntry={showPassword}
                        iconRigth={Octicons}
                        iconRighName={showPassword ? "eye-closed" : "eye"}
                        onIconRigthPress={() => setShowPassword(!showPassword)}
                        value={password}
                        onChangeText={setPassword}
                    />

                    <Input 
                        title="Confirmar Senha"
                        placeholder="********"
                        iconLeft={Ionicons}
                        iconLeftName="lock-closed-outline"
                        secureTextEntry={showConfirmPassword}
                        iconRigth={Octicons}
                        iconRighName={showConfirmPassword ? "eye-closed" : "eye"}
                        onIconRigthPress={() => setShowConfirmPassword(!showConfirmPassword)}
                        value={confirmPassword}
                        onChangeText={setConfirmPassword}
                    />

                    <TouchableOpacity style={style.button} onPress={handleRegister}>
                        {loading ? <ActivityIndicator color="#FFF" /> : <Text style={style.buttonText}>Cadastrar</Text>}
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}