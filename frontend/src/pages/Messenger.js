import ChatMessages from '../components/ChatWindow/ChatMessages'
import Sidebar from '../components/Sidebar/Sidebar'

const Messenger = () => {
  return (
    <main className='flex h-screen'>
        <Sidebar/>
        <ChatMessages/>
    </main>
  )
}

export default Messenger
