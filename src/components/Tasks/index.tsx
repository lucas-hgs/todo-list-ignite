import { Text, View } from "react-native";

import { styles } from './styles';

interface TaskProps {
  task: string,
  id: string,
  finished: boolean
}

interface TaskListProps {
  taskList: TaskProps[]
}

export function Tasks({ taskList }: TaskListProps ) {
  return (
    <View style={styles.tasksContainer}>
      <View style={styles.textContainer}>
        <Text style={[styles.taskTextBase, {color: '#4EA8DE'}]}>
          Criadas
        </Text>
        <Text style={styles.taskCounter}>{taskList.length}</Text>
      </View>
      <View style={styles.textContainer}>  
        <Text style={[styles.taskTextBase, {color: '#8284FA'}]}>
          Concluídas
        </Text>
        { taskList.length === 0 ?
          <Text style={styles.taskCounter}>
            0
          </Text>
          :
          <Text style={styles.taskCounter}>
            {taskList.filter(task => task.finished !== false).length} de {taskList.length}
          </Text>
        }
      </View>
    </View>
  )
}