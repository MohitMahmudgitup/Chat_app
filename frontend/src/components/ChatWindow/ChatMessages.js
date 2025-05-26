import React from 'react'
import ChatMessagesNavber from '../common/ChatMessagesNavber'
import ChatMessagesbuttom from '../common/ChatMessagesbuttom'
import Massages from '../common/Massages'

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
