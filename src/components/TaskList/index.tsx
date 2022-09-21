import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons'; 

import { styles } from './styles';
import { RadioButton } from '../RadioButton';

interface TaskListProps {
  task: string,
  id: string,
  finished: boolean
}

interface TasksProps {
  tasks: TaskListProps[],
  finishTask: (id) => void,
  removeTask: (id) => void,
}

export function TaskList({ tasks, finishTask, removeTask }: TasksProps) {
  return (
    <View 
      style={
        tasks.length < 1 ?
          [styles.taskContainer, styles.noTaskContainer]
        :
          styles.taskContainer
      }
    >
      { tasks.length < 1 ?
      <View style={styles.noListContent}>
        <MaterialCommunityIcons 
          name="clipboard-text-outline" 
          size={56} 
          color="#333333" 
          style={{ marginTop: 48 }}
        />
        <Text style={[styles.firstText, { marginTop: 16 }]}>
          Você ainda não tem tarefas cadastradas
        </Text>
        <Text style={styles.secondText}>
          Crie tarefas e organize seus itens a fazer
        </Text>
      </View>
      :
      <FlatList
        data={tasks}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View 
            style={!item.finished ? styles.taskListContainer : [styles.taskListContainer, {backgroundColor: '#262626'}]} 
            key={item.id}
          >
            <View style={styles.contentContainer}>
              <TouchableOpacity
                onPress={() => finishTask(item.id)}
              >
                <RadioButton
                  taskIsComplete={item.finished}
                />
              </TouchableOpacity>
              <Text 
                style={!item.finished ? styles.taskListText : [styles.taskListText, {color: '#808080', textDecorationLine: 'line-through'}]}
              >
                {item.task}
              </Text>
              <TouchableOpacity
                onPress={() => removeTask(item.id)}
              >
                <Ionicons name="md-trash-outline" size={32} color="#808080" />
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
      }
    </View>
  )
}