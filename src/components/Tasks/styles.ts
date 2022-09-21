import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  tasksContainer: {
    marginHorizontal: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textContainer: {
    flexDirection: 'row'
  },
  taskTextBase: {
    fontSize: 14,
    fontFamily: 'Inter_700Bold',
  },
  taskCounter: {
    marginLeft: 8,
    color: '#D9D9D9',
    backgroundColor: '#333333',
    paddingVertical: 2,
    paddingHorizontal: 8,
    fontSize: 12,
    fontFamily: 'Inter_700Bold',
    borderRadius: 999,
  },
})