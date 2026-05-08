import React, { useRef, useEffect } from "react";
import { View, StyleSheet, StatusBar } from "react-native";
import LottieView from "lottie-react-native";
import { useRouter } from "expo-router";

export default function Splash() {
    const router = useRouter();
    const animationRef = useRef<LottieView>(null);

    const handleNavigation = () => {
        
        router.replace("/login"); 
    };

    useEffect(() => {
        const timeout = setTimeout(handleNavigation, 5000);
        return () => clearTimeout(timeout);
    }, [router]);

    return (
        <View style={styles.container}>
            <StatusBar hidden />
            <LottieView
                ref={animationRef}
                source={require("../../../assets/animations/splash.json")}
                autoPlay
                loop={false}
                onAnimationFinish={handleNavigation}
                style={styles.animation}
                resizeMode="contain"
            />
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#0D3D2E",
        justifyContent: "center",
        alignItems: "center",
    },
    animation: {
        width: 300,
        height: 300,
    },
});