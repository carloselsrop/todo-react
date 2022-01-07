import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { handleTask } from '../store/tasks/slice';

const Form = () => {
  // El dispatch tiene la capacidad de ingresar a la store y disparar reducers 
  const dispatch = useDispatch();

  // Uso del useState para manejar el formulario completo
  const [form, setForm] = useState({
    finished: false,
    task: '',
    description: '',
    important: false,
  })

  // Funcion para obtener el value de los inputs
  const handleChange = ({ target: { name, value } }) => {
    const newTask = {
      ...form,
      [name]: value,
    }
    setForm(newTask)
  }
  // Funcion para obtener el checked del checkbox
  const handleToggle = ({ target: { checked } }) => {
    setForm({
      ...form,
      important: checked
    })
  }
  // Funcion para limpiar los valores de los inputs
  const cleanForm = () => {
    setForm({
      task: '',
      description: '',
      important: false,
      finished: false,
    })
  }

  // Template
  return (
    <div className="w-full lg:w-6/12 flex flex-col justify-center items-center pt-2 pb-6 select-none">
      <div className="py-4 font-title text-3xl font-bold text-gray-200">
        Agrega una nueva tarea
      </div>
      {/* Form */}
      <div className="w-10/12 sm:w-6/12 md:w-5/12 lg:w-7/12 xl:w-5/12 border-2 rounded-xl py-8 px-3 font-body font-semibold text-gray-200">
        {/* Name of the task */}
        <div className="pb-6">
          <div className="pb-1 font-title font-bold text-2xl">Nombre de la tarea</div>
          <input name="task" placeholder="Añade una nueva tarea" onChange={handleChange} value={form.task} className="text-md w-full py-1 px-1 text-gray-200 font-semibold bg-transparent border-b-2 focus:outline-none border-white transition duration-300 focus:border-blue-400" type="text" />
        </div>
        {/* Description of the task */}
        <div className="pb-6">
          <div className="pb-1 font-title font-bold text-2xl">Descripcion</div>
          <textarea name="description" onChange={handleChange} value={form.description} placeholder="Añade una descripcion a tu tarea" className="w-full py-1 px-1 text-gray-200 font-semibold bg-transparent border-b-2 focus:outline-none border-white transition duration-300 focus:border-blue-400 resize-none" ></textarea>
        </div>
        {/* Important Task */}
        <div className="pb-6 ">
          <div className="flex justify-between items-center space-x-4">
            <div className="pb-1 font-title font-bold text-2xl">Es una tarea importante?</div>
            <div className="flex items-center space-x-4">
              <input name="important" onChange={handleToggle} checked={form.important} className="w-4 h-4 transition duration-300 mr-2" type="checkbox" />
            </div>
          </div>
        </div>
        {/* Reset and Save Task */}
        <div className="flex justify-around">
          <button onClick={cleanForm} className="px-4 py-1 rounded font-bold bg-red-500">Limpiar</button>
          <button onClick={() => { dispatch(handleTask({ form })); cleanForm(); }} className="px-4 py-1 rounded font-bold bg-green-500">Guardar</button>
        </div>
      </div>
    </div>
  )
}

export default Form;