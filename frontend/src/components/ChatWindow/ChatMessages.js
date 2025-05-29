import React from 'react'
import ChatMessagesNavber from '../msgComponents/ChatMessagesNavber'
import ChatMessagesbuttom from '../msgComponents/ChatMessagesbuttom'
import Massages from '../msgComponents/Massages'

const ChatMessages = () => {
  return (
    <section className=" w-full  py-4 px-2 h-full overflow-y-auto text-white">
      <div className=' bg-[#1F1F1F]  w-full h-full py-1 rounded-lg shadow-2xl'>
        <ChatMessagesNavber/>
        <Massages/>
        <ChatMessagesbuttom/>
      </div>
    </section>
  )
}

export default ChatMessages
