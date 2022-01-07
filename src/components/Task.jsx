const Task = ({ task, description, important, finished, onFinish, onDelete }) => {
  return (
    <div className="w-full flex border justify-between items-center py-6 px-4 text-gray-200 font-body rounded-lg relative" >
      {finished === true &&
        <button onClick={onDelete} className="absolute top-0 right-0 rounded-md bg-red-500">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 " viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>
        </button>
      }
      <button onClick={onFinish} className={`w-6 h-6 rounded-md transition duration-300 flex justify-center items-center ${finished ? 'bg-blue-500' : 'bg-white'}`}>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
        </svg>
      </button>
      <div className={`font-medium ${finished ? 'line-through' : ''}`}>{task}</div>
      <div className={`font-medium ${finished ? 'line-through' : ''}`}>{description}</div>
      <div >{important ? <div>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-500" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
        </svg>
      </div>
        : null}
      </div>
    </div>
  )
}

export default Task