import { useEffect, useState } from "react";
import { Image, View } from "react-native";

import { styles } from './styles';

import logo from '../../../assets/logo.png';

import { Input } from "../../components/Input";
import { Tasks } from "../../components/Tasks";
import { TaskList } from "../../components/TaskList";

interface TaskListProps {
  task: string,
  id: string,
  finished: boolean
}

export function Home() {
  const [inputText, setInputText] = useState('');
  const [taskList, setTaskList] = useState<TaskListProps[]>([]);

  function handleAddNewTask() {
    setTaskList(prevState => [...prevState, { task: inputText, id: String(new Date()), finished: false }]);
    setInputText('');
  }

  function handleFinishTask(id: string) {
    const finishedTask = taskList.map(task => {
      if(task.id === id) {
        return {...task, finished: !task.finished}
      }

      return task;
    });

    setTaskList(finishedTask);
  }

  function handleRemoveTask(id: string) {
    const removedTask = taskList.filter(task => task.id !== id);
    setTaskList(removedTask);
  }

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.background}>
        <Image source={logo} />
      </View>

      <Input 
        inputText={inputText}
        setInputText={setInputText}
        addNewTask={handleAddNewTask}
      />

      <Tasks taskList={taskList} />

      <TaskList 
        tasks={taskList} 
        finishTask={handleFinishTask}
        removeTask={handleRemoveTask}
      />
    </View>
  )
}

