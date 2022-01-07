import Greetings from './components/Greetings'
import Form from './components/Form'
import Tasks from './components/Tasks'
import MusicPlayer from './components/MusicPlayer'
import Modal from './components/Modal'

const App = () => {
  return (
    <div className="bg-black w-full lg:h-screen relative" style={{ backgroundColor: '#222831' }}>
      {/* How to use Music Player */}
      <Modal />
      {/* Greetings Message */}
      <div>
        <Greetings user="Carlos" />
      </div>
      {/* Form and Tasks */}
      <div className="flex py-8 flex-col items-center lg:flex-row">
        <Form />
        <Tasks />
      </div>
      {/* Music Player */}
      <div className='bg-red-500 relative'>
        <MusicPlayer />
      </div>
    </div>
  )
}

export default App;
