const Messages = () => {

  const messages = [
    { id: 1, text: "Hello! How are you?", sender: "other" , time: '12:45'},
    { id: 2, text: "I'm good, thanks! And you?", sender: "me",time: '12:451',},
    { id: 3, text: "Doing great! Working on a project.", sender: "other",time: '12:45',},
    { id: 4, text: "Awesome, good luck!", sender: "me",time: '12:452',},
    { id: 1, text: "Hello! How are you?", sender: "other",time: '12:45',},
    { id: 2, text: "I'm good, thanks! And you?", sender: "me",time: '12:453',},
    { id: 3, text: "Doing great! Working on a project.", sender: "other",time: '12:45',},
    { id: 4, text: "Awesome, good luck!", sender: "me",time: '12:45',},
    { id: 1, text: "Hello! How are you?", sender: "other",time: '12:45',},
    { id: 2, text: "I'm good, thanks! And you?", sender: "me",time: '12:45',},
    { id: 3, text: "Doing great! Working on a project.", sender: "other",time: '12:45',},
    { id: 4, text: "Awesome, good luck!", sender: "me",time: '12:45',}, 
    { id: 1, text: "Hello! How are you?", sender: "other",time: '12:45',},
    { id: 2, text: "I'm good, thanks! And you?", sender: "me",time: '12:45',},
    { id: 3, text: "Doing great! Working on a project.", sender: "other",time: '12:45',},
    { id: 4, text: "Awesome, good luck!", sender: "me",time: '12:45',},
    { id: 1, text: "Hello! How are you?", sender: "other",time: '12:45',},
    { id: 2, text: "I'm good, thanks! And you?", sender: "me",time: '12:45',},
    
  ];

  return (
    <section className="w-full h-[72vh] py-2 px-4 rounded-lg overflow-y-auto custom-scrollbar text-white bg-[#1E1E1E]">
      <div className="space-y-2">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex ${
              msg.sender === 'me' ? 'justify-end' : 'justify-start'
            }`}
          >
            {
                    msg.sender !== 'me' && (
                      <img src="https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_640.png" alt="User Avatar" className="w-8 h-8 rounded-full mr-2" /> 
                    )
            }
            <div
              className={`max-w-[70%] px-4 py-2 rounded-2xl text-sm relative group ${
                msg.sender === 'me'
                  ? 'bg-[#4e9eff] text-white '
                  : 'bg-[#3A3A3A] text-white '
              }`}
            > 
              {msg.text}
              {
                msg.sender === 'me' ? (
                 <div className="absolute right-56   top-1/2 -translate-y-4 ml-2 hidden group-hover:block text-center bg-white text-black text-sm p-1 rounded-lg shadow-lg w-32 z-50">
                        {msg.time}
                </div>  
                ):(
                    <div className="absolute -right-[140px]  -translate-y-[26px] ml-2 hidden group-hover:block text-center bg-white text-black text-sm p-1 rounded-lg shadow-lg w-32 z-50">
                        {msg.time}
                    </div>  
                )
              }
                
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Messages;
