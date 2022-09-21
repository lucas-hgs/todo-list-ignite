import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  taskContainer: {
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 24,
  },
  noTaskContainer: {
    borderTopColor: '#333333',
    borderTopWidth: 1,
  },
  noListContent: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  firstText: {
    color: '#808080',
    fontSize: 16,
    fontFamily: 'Inter_700Bold',
  },
  secondText: {
    color: '#808080',
    fontFamily: 'Inter_400Regular',
    fontSize: 16,
  },
  taskListContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    minHeight: 64,
    width: '100%',
    backgroundColor: '#333333',
    borderRadius: 8,
    paddingHorizontal: 8,
    paddingVertical: 16,
    marginBottom: 8
  },
  contentContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  taskListText: {
    color: '#F2F2F2',
    fontSize: 14,
    fontFamily: 'Inter_400Regular',
    flex: 1,
    paddingHorizontal: 12
  }
})