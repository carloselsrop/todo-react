import { useState, useEffect } from 'react';

const MusicPlayer = () => {
  const [isActive, setIsActive] = useState(false);
  const [playlistURL, setplaylistURL] = useState();

  useEffect(() => {
    localStorage.getItem('playlistURL')
      ? setplaylistURL(localStorage.getItem('playlistURL')) : setplaylistURL('');
  }, []);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  const handleChange = async ({ target: { value } }) => {
    const url = (value);
    setplaylistURL(url);
  };

  const handleSave = () => {
    localStorage.setItem('playlistURL', playlistURL);
  };

  return (
    <div className={`fixed bottom-4 left-0 transform transition duration-300 ${isActive ? '' : '-translate-x-96'}`}>
      <div className={`sm:flex space-x-4 px-1  justify-between items-end transform transition duration-300 hidden `}>
        <div className={`bg-blue-900 flex flex-col shadow-xl w-96 p-2 rounded-lg space-y-2`}>
          <div className=' flex items-center space-x-1'>
            <input onChange={handleChange} className='w-full rounded-lg py-1.5 h-full px-2 text-sm focus:outline-none' placeholder='Inserte el URL de la playlist' type="text" />
            <button onClick={handleSave} className='bg-white text-xs h-full text-black py-1.5 px-1 rounded-md'>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" />
              </svg>
            </button>
          </div>
          <div className=' w-full h-48'>
            {
              !playlistURL
                ? <div className='text-white font-body h-full items-center flex justify-center select-none'>No tiene una playlist seleccionada</div>
                :
                <iframe id="ytplayer" allow="accelerometer; autoplay;" title='MusicPlayer' type="text/html" width="100%" height="100%"
                  className='rounded-lg'
                  src={`http://www.youtube.com/embed?listType=playlist&list=${playlistURL}&autoplay=1` || localStorage.getItem('playlistURL')}
                />
            }
          </div>
        </div>
        <button onClick={handleClick} className='w-10 rounded-full bg-red-600 flex justify-center items-center h-10 focus:outline-none  hover:scale-105 transform transition duration-300'>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-gray-100" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default MusicPlayer