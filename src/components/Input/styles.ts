import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    top: -27,
    justifyContent: 'center',
    alignItems: 'center',
    maxHeight: 54,
    maxWidth: '100%',
    marginHorizontal: 24,
  },
  input: {
    flex: 1,
    height: 54,
    borderRadius: 6,
    backgroundColor: '#262626',
    fontFamily: 'Inter_400Regular',
    fontSize: 16,
    paddingHorizontal: 16,
    color: '#F2F2F2',
  },
  button: {
    borderRadius: 6,
    height: 54,
    width: 54,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 8,
    backgroundColor: '#1E6F9F',
  },
})