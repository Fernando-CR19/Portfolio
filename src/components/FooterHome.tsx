import {
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Alert,
} from "react-native";
import { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { Controller, useForm } from "react-hook-form";
import styles from "../styles/FooterStyle";

export default function Footer() {
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    if (!data.email?.trim() || !data.mensagem?.trim()) {
      Alert.alert("Erro", "Preencha os campos para enviar uma mensagem");
      return;
    }
    Alert.alert("Sucesso", "Mensagem enviada com sucesso");

    setShowSuccessMessage(true);

    reset({
      email: "",
      mensagem: "",
    });

    setTimeout(() => {
      setShowSuccessMessage(false);
    }, 1000);
  };

  return (
    <SafeAreaView>
      <View style={styles.FormContainer}>
        <Text style={styles.FormTitle}>Entre em contato</Text>
        <Text style={styles.FormLabel}>Email:</Text>
        <View style={styles.Form}>
          <Ionicons name="mail-outline" style={styles.FormIcon} />
          <Controller
            control={control}
            name="email"
            rules={{ required: "Digite um email válido" }}
            render={({ field: { value, onChange } }) => (
              <TextInput
                placeholder="Digite seu email para contato"
                style={styles.FormInput}
                underlineColorAndroid="transparent"
                value={value || ""}
                onChangeText={onChange}
              />
            )}
          />
        </View>
        {errors.email?.message && (
          <Text style={{ color: "red", marginTop: 4 }}>
            {errors.email.message as string}
          </Text>
        )}

        <Text style={styles.FormLabel}>Mande uma mensagem:</Text>
        <View style={styles.Form}>
          <Controller
            control={control}
            name="mensagem"
            rules={{ required: "Digite uma mensagem" }}
            render={({ field: { value, onChange } }) => (
              <TextInput
                textAlignVertical="top"
                placeholder="Digite sua mensagem..."
                multiline
                style={styles.FormTextArea}
                underlineColorAndroid="transparent"
                value={value || ""}
                onChangeText={onChange}
              />
            )}
          />
        </View>
        {errors.mensagem?.message && (
          <Text style={{ color: "red", marginTop: 4 }}>
            {errors.mensagem.message as string}
          </Text>
        )}

        {showSuccessMessage && (
          <Text style={{ color: "green", marginTop: 4, fontSize: 14 }}>
            Mensagem enviada com sucesso!
          </Text>
        )}

        <TouchableOpacity
          style={styles.FormButton}
          onPress={handleSubmit(onSubmit)}
        >
          <Text style={styles.FormButtonText}>Enviar</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
