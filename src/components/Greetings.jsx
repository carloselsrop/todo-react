import { useSelector } from 'react-redux';

const Greetings = ({ user }) => {
  const { tasks } = useSelector((state) => state.tasks);

  return (
    <div className="flex flex-col items-center text-gray-200 select-none py-4">
      <div className="text-5xl font-bold font-title py-4 flex space-x-2">
        <div>Bienvenido</div>
        <div className="transform hover:rotate-6 transition duration-300">{user}</div>
      </div>
      <div className="text-xl font-body">
        {tasks.length === 0 && <div>No tienes tareas pendientes</div>}
        {tasks.length === 1 && <div>Solo te queda {tasks.length} tarea animo!</div>}
        {tasks.length > 1 && <div>Vamos solo te faltan {tasks.length} tareas!</div>}
      </div>
    </div>
  )
}

export default Greetings;