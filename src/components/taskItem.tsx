import React from 'react';
import { ITask } from '../interfaces';
interface Props {
    task: ITask;
    completeTask(taskToDelete: string): void;

}
const TaskItem = ({ task, completeTask }: Props) => {
    return (
        <div className='flex  justify-center items-center '>
            <div className=' w-1/2 gap-x-2 bg-white mt-2 flex' >
                {/* <div className='w-full flex'> */}
                <div className='w-1/2 bg-red-400 text-center'>{task.taskName} </div>
                <div className='w-1/2 flex bg-red-400 gap-x-2'>
                    <div className='w-5/6 ml-1 bg-red-400 text-center '>
                        {task.time}
                    </div>
                    <div className='w-1/5 ml-1 bg-blue-400 text-center'>
                        <button onClick={()=>completeTask(task.taskName)} >X</button>
                    </div>
                </div>

                {/* </div> */}

            </div>


        </div>
    );
}

export default TaskItem;