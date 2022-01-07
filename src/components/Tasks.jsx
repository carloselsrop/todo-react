import emptyGif from '../assets/media/gif/emptyGif.gif'
import Task from './Task'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { handleDelete, handleFinished, selectAllTasks, getTasks } from '../store/tasks/slice'

const Tasks = () => {
  const dispatch = useDispatch()
  // El useSelector tiene acceso al state y debe retornar una slice del state
  const { tasks } = useSelector((state) => { return state.tasks })

  useEffect(() => {
    dispatch(getTasks())
  }, [dispatch])

  return (
    <div className="w-full lg:w-6/12 flex justify-center items-center select-none">
      {
        !tasks.length &&
        <div className="flex-col py-8 w-10/12 sm:w-6/12 md:w-5/12 lg:w-6/12 rounded-lg flex justify-center items-center">
          <img src={emptyGif} alt="" />
          <div className="text-gray-200 font-title text-4xl">
            Esta muy vacio por este lado
          </div>
        </div>
      }
      {
        !!tasks.length &&
        <div className="w-10/12 space-y-4">
          <div className="pb-2 text-3xl text-gray-200 font-title font-bold">Tareas:</div>
          {tasks.map((tas, index) => {
            return (
              <Task onFinish={() => { dispatch(handleFinished({ index })) }} key={index} onDelete={() => { dispatch(handleDelete({ index })) }} {...tas} />
            )
          })}
          <div className="flex justify-start pt-4">
            <button className="border bg-transparent text-white rounded-md px-4 py-1 text-sm" onClick={() => { dispatch(selectAllTasks()) }}>Select All</button>
          </div>
        </div>
      }
    </div>
  )
}

Tasks.defaultProps = {
  tasks: []
}

export default Tasks;