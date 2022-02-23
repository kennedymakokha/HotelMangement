import React, { FC, ChangeEvent, useState } from 'react';
import './App.css';
import TaskItem from './components/taskItem';
import { ITask } from './interfaces';

const Todo: FC = () => {
  const [time, changeTime] = useState<number>(0)
  const [task, changeTask] = useState<string>('')
  const [taskList, changeTaskList] = useState<ITask[]>([])

  const AddTask = (): void => {
    const newTask = {
      taskName: task,
      time,

    }
    changeTaskList([...taskList, newTask])
    changeTask('')
    changeTime(0)

  }
  const completeTask = (taskToDelete: string): void => {
    changeTaskList(taskList.filter((task) => {
      return task.taskName !== taskToDelete
    }))
  }
  return (
    <div className="flex flex-col  w-screen h-screen ">
      <div className='flex flex-col h-1/3 w-full justify-center items-center bg-red-400' >

        <input type="text" name="task" onChange={(e: ChangeEvent<HTMLInputElement>) => changeTask(e.target.value)} placeholder="Task ..." className='w-52 h-10 rounded-md pl-2 text-sm border-gray-400 mb-3' />
        <input type="number" name="time" onChange={(e: ChangeEvent<HTMLInputElement>) => changeTime(Number(e.target.value))} className='w-52 h-10 rounded-md pl-2 text-sm border-gray-400 mb-3' placeholder="Deadline (in Days) ..." />

        <button className=' w-16 h-20 border-md pl-2 cursor-pointer' onClick={AddTask} >Add input</button>
      </div>
      <div className='h-2/3 w-full mt-20 '>
        {taskList.map((task: ITask, key: number) => (
          <TaskItem key={key} task={task} completeTask={completeTask} />
        ))}
      </div>
    </div>
  );
}

export default Todo;
