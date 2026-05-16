import React, { useState } from "react";
import {
    Text,
    View,
    TouchableOpacity,
    Alert,
    ActivityIndicator,
} from 'react-native';
import { MaterialIcons, Octicons, Ionicons } from '@expo/vector-icons';
import { Input } from "../../components/Input";
import { style } from './style';
import { useRouter } from 'expo-router';


export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    function getLogin() {
        if (!email || !password) {
            return Alert.alert('Atenção', "Informe os campos obrigatórios!")
        }
        setLoading(true);
        setTimeout(() => {
            if (email === 'lucasrocha2022r@gmail.com' && password === '12345') {
                Alert.alert('Sucesso', 'Logado com sucesso!')
            } else {
                Alert.alert('Erro', 'Usuário não encontrado')
            }
            setLoading(false)
        }, 3000)
    }

    return (
        <View style={style.container}>

            {/* TOPO VERDE */}
            <View style={style.header}>
                <View style={style.logoContainer}>
                    <Ionicons name="add-circle" size={40} color="#fff" />
                </View>
                <Text style={style.brandName}>+Saúde</Text>
                <Text style={style.brandSub}>AGENDAMENTO CLÍNICO</Text>
            </View>

            {/* CARD BRANCO */}
            <View style={style.card}>
                <Text style={style.title}>Login</Text>

                <Input
                    value={email}
                    onChangeText={setEmail}
                    title="Usuário"
                    placeholder="seu@email.com"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    iconLeft={MaterialIcons}
                    iconLeftName="alternate-email"
                />

                <Input
                    value={password}
                    onChangeText={setPassword}
                    title="Senha"
                    iconLeft={Ionicons}
                    iconLeftName="lock-closed-outline"
                    iconRigth={Octicons}
                    iconRighName={showPassword ? "eye" : "eye-closed"}
                    secureTextEntry={!showPassword}
                    onIconRigthPress={() => setShowPassword(!showPassword)}
                />

                <TouchableOpacity>
                    <Text style={style.forgotText}>Esqueci minha senha</Text>
                </TouchableOpacity>

                <TouchableOpacity style={style.button} onPress={getLogin}>
                    {loading
                        ? <ActivityIndicator color={'#FFF'} size={"small"} />
                        : <Text style={style.buttonText}>Login</Text>
                    }
                </TouchableOpacity>

                <Text style={style.registerText}>
                    Não possui uma conta?{' '}
                    <Text
                        style={style.registerLink}
                        onPress={() => router.push('/cadastro')} // O nome da pasta dentro de pages
                    >
                        Cadastre-se
                    </Text>
                </Text>
            </View>

        </View>
    )
}