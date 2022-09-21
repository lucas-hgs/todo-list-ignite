import { View } from "react-native";
import { Ionicons } from '@expo/vector-icons'; 

import { styles } from './styles';

export function RadioButton({ taskIsComplete }) {
  return (
    <View 
      style={taskIsComplete ? styles.buttonMarked : styles.button}
    >
      {taskIsComplete && <Ionicons name="checkmark-sharp" size={18} color="#FFF" />}
    </View>
  )
}