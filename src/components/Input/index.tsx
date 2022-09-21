import { TextInput, TouchableOpacity, View } from "react-native";
import { AntDesign } from '@expo/vector-icons';

import { styles } from "./styles";
import { Dispatch, SetStateAction } from "react";

interface InputProps {
  inputText: string,
  setInputText: Dispatch<SetStateAction<string>>,
  addNewTask: () => void,
}

export function Input({ inputText, setInputText, addNewTask }: InputProps) {
  return (
    <View style={styles.inputContainer}>
      <TextInput 
        style={styles.input}
        placeholder="Adicione uma nova tarefa"
        placeholderTextColor={'#808080'}
        onChangeText={setInputText}
        value={inputText}
      />
      <TouchableOpacity 
        style={styles.button}
        onPress={addNewTask}
      >
        <AntDesign name="pluscircleo" size={24} color="white" />
      </TouchableOpacity>
    </View>
  )
}