import { useState } from 'react'

const Modal = () => {
  const [isModalOpen, setIsModalOpen] = useState(true)

  const handleClose = () => {
    setIsModalOpen(false)
  }

  return (
    // Black background
    <div className={`w-full absolute h-full transform bg-black z-50 flex bg-opacity-60 justify-center items-center ${isModalOpen ? 'scale-100' : 'scale-0'}`}>
      {/* Modal */}
      <div className={`w-4/12 py-4 bg-white transform transition duration-300 p-4 rounded-lg ${isModalOpen ? 'scale-100' : 'scale-0'}`}>
        {/* Close Button */}
        <div className='flex justify-end text-red-700 absolute top-2 right-2'>
          <button onClick={handleClose} className='rounded-xl p-0.5 transition duration-300 hover:bg-red-100'>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
        {/* Title */}
        <div className='text-2xl text-center font-bold font-body pb-6 select-none'>
          Como utilizar el Music Player
        </div>
        {/* Steps */}
        <div className='flex flex-col space-y-8 select-none'>
          {/* Step 1 */}
          <div className='flex justify-between items-center space-x-4'>
            <div className='flex w-6/12 items-start'>
              <div className='mx-1'>
                <div className='border-2 font-body font-bold flex w-6 h-6 items-center justify-center rounded-full border-gray-600 p-1'>
                  1
                </div>
              </div>
              <img className='w-11/12 rounded-md' src="https://i.ibb.co/0f0kSQH/step1.png" alt="" />
            </div>
            <div className='w-6/12 text-md font-body'>
              Presiona el boton de la nota musical para desplegar el reproductor de música.
            </div>
          </div>
          {/* Step 2 */}
          <div className='flex justify-between flex-row-reverse items-center space-x-4'>
            <div className='flex w-5/12 flex-row-reverse items-start'>
              <div className='mx-1'>
                <div className='border-2 font-body font-bold flex w-6 h-6 items-center justify-center rounded-full border-gray-600 p-1'>
                  2
                </div>
              </div>
              <img className='w-11/12 rounded-md' src="https://i.ibb.co/f04SXvq/step2.png" alt="" />
            </div>
            <div className='w-6/12 text-md font-body'>
              Ve a youtube y copia solamente el ID de la playlist que quieres reproducir.
            </div>
          </div>
          {/* Step 3 */}
          <div className='flex justify-between items-center space-x-4'>
            <div className='flex w-6/12 items-start'>
              <div className='mx-1'>
                <div className='border-2 font-body font-bold flex w-6 h-6 items-center justify-center rounded-full border-gray-600 p-1'>
                  3
                </div>
              </div>
              <img className='w-11/12 rounded-md' src="https://i.ibb.co/8g8dB1h/step3.png" alt="" />
            </div>
            <div className='w-6/12 text-md font-body'>
              Para guardar una playlist para reproducir en el futuro, presiona el botón de guardar. Y listo!
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal;