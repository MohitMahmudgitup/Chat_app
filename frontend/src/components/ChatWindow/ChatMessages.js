import React from 'react'
import ChatMessagesNavber from '../common/ChatMessagesNavber'
import ChatMessagesbuttom from '../common/ChatMessagesbuttom'

const ChatMessages = () => {
  return (
    <section className=" w-full  p-4 h-full overflow-y-auto text-white">
      <div className=' bg-[#1F1F1F]  w-full h-full py-1 rounded-lg shadow-2xl'>
        <ChatMessagesNavber/>
        <ChatMessagesbuttom/>
      </div>
    </section>
  )
}

export default ChatMessages
