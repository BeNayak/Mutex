import logos from './mutex.jpg'

function App() {
    return ( 
        <div className="flex flex-row h-screen ">
          <div className="flex flex-col flex-shrink w-72 ml-3 h-screen px-0 py-6 border-l-2 border-r-2 rounded-t-md">
            <div className="flex-shrink-0 mx-4" >
              <img src={logos} alt="mutex" className="h-12 w-12 rounded-full"/>  
            </div>

            <div className="flex flex-col justify-between mx-4 pr-4 mt-5 mr-0.5">
              <aside>
                <ul>
                 <li>
                  <a className="flex items-center px-4 py-1 text-gray-500 bg-gray-300 rounded-md " href="/">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 hover:fill-blue-500">
                     <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                    </svg>

                    <span className="mx-3  font-medium">Dashboard</span>
                  </a>
                 </li>

                 <li>
                  <a className="flex items-center px-4 py-1 mt-2 text-gray-600 rounded-md hover:bg-gray-300" href="/">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 hover:fill-blue-500">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                    </svg>
                    <span className="mx-3 font-medium ">Teams</span>
                  </a>
                 </li>
                  
                 <li>
                  <a className="flex items-center px-4 py-1 mt-2 text-gray-600 rounded-md hover:bg-gray-300" href="/">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 hover:fill-blue-500">
                     <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.75c0 .415.336.75.75.75z" />
                    </svg>                
                    <span className="mx-3 font-medium">Projects</span>
                  </a>
                 </li>

                 <li>
                  <a className="flex items-center px-4 py-1 mt-2 text-gray-600 rounded-md hover:bg-gray-300" href="/">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 hover:fill-blue-500">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
                    </svg>
                    <span className="mx-3 font-medium">Calendar</span>
                  </a>                  
                  </li>

                  <li>
                    <a className="flex items-center px-4 py-1 mt-2 text-gray-600 rounded-md hover:bg-gray-300" href="/">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 hover:fill-blue-500">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
                      </svg>
                     <span className="mx-3 font-medium">Documents</span>
                    </a>

                  </li>
                  
                  <li>
                    <a className="flex items-center space-x-3 px-4 py-1 mt-2 text-gray-600 rounded-md hover:bg-gray-300" href="/">      
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 hover:fill-blue-500">
                       <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                      </svg>
                      <span className="mx-3 font-medium">Reports</span>
                    </a>
                  </li>

                </ul>
              </aside>
            </div>

            <div className="flex flex-row space-x-3  mx-0 mt-64 h-17 border-b border-t border-gray-400 items-center pl-3 py-3">
                <img src={logos} alt="profile" className='w-12 h-12 rounded-full' />
                <div className="flex flex-col font-medium dark:text-gray-700 ">
                  <div className="text-lg ">User</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">view profile</div>
                </div>
            </div>

          </div>

          <div className='w-full h-full p-4 '>
            <h1 className="font-bold text-2xl mb-3 text-gray-700">Dashboard</h1>
            <div className="  border-4 border-dotted rounded-md">
              <div className="w-full">  

                <div className="relative flex items-left p-2 border-b flex-col border-gray-300">
                 <span className="block ml-5 mb-0 font-bold text-base text-gray-600">MUTEX</span>
                 <span className="block ml-5 mb-0  font-medium text-gray-600 text-sm">Active now </span>
                 <span className="absolute w-3 h-3 bg-green-600 rounded-full left-2 top-7"></span>
                 <div className="flex items-center  top-0  space-x-1 "> </div>
                 </div>
                
                
                <div className="relative w-full p-3 overflow-y-scroll h-[35rem]">
            
                  <ul className="space-y-1.5">
                    <li className="flex justify-start">
                      <div className="relative max-w-1/3 px-4 py-2 text-white rounded-lg bg-blue-700 shadow ">
                        <span className="text-xs  text-gray-300">Teacher </span>
                        <span className="block">Hello dear students</span>
                        <span className="text-xs text-gray-300">11:00</span>
                      </div>
                    </li>

                  <li className="flex justify-end">
                    <div className="relative max-w-xl px-4 py-2 text-gray-700 bg-gray-100 rounded shadow">
                      <span className="text-xs">You</span>
                      <span className="block">Good morning</span>
                      <span className="text-xs text-gray-600">11:00</span>
                    </div>              
                  </li>
                  <li className="flex justify-end">
                    <div className="relative max-w-xs px-4 py-2 text-gray-700 bg-gray-100 rounded shadow">
                      <span className="text-xs">You</span>
                      <span className="block">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, laudantium laborum. Exercitationem dolorem magnam porro quasi voluptatum quis, atque assumenda quod magni illo iure id laboriosam dolores quibusdam temporibus laborum sed quisquam quo harum! Eos voluptatem a tempora, maiores dolore et voluptatum id facilis cupiditate quidem eligendi? Adipisci, eos nisi!</span>
                      <span className="text-xs text-gray-600">11:00</span>
                    </div>              
                  </li>
               
              
                
              <li className="flex justify-start">
                <div className="relative max-w-xl px-4 py-2 text-white rounded-lg bg-blue-700 shadow ">
                  <span className="text-xs">CR</span>
                  <span className="block">Good morning </span>
                  <span className="text-xs text-gray-300">11:20</span>
                </div>
              </li>
               <li className="flex justify-start">
                <div className="relative max-w-xl px-4 py-2 text-white rounded-lg bg-blue-700 shadow ">
                  <span className="text-xs">Prakash</span>
                  <span className="block">how are you?</span>
                  <span className="text-xs text-gray-300">11:25</span>
                </div>
              </li>
               
              <li className="flex justify-end">
                <div className="relative max-w-xl px-4 py-2 text-gray-700 bg-gray-100 rounded shadow">
                  <span className="text-xs">You</span>
                  <span className="block">I am  good</span>
                  <span className="text-xs text-gray-600">11:35</span>
                </div>
              </li>
              <li className="flex justify-end">
                <div className="relative max-w-xl px-4 py-2 text-gray-700 bg-gray-100 rounded shadow">
                  <span className="text-xs">You</span>
                  <span className="block">how about you?</span>
                  <span className="text-xs text-gray-600">11:35</span>
                </div>
              </li>
              <li className="flex justify-start">
                <div className="relative max-w-xl px-4 py-2 text-white rounded-lg bg-blue-700 shadow ">
                  <span className="text-xs">Prakash</span>
                  <span className="block">me too good</span>
                  <span className="text-xs text-gray-300">11:40</span>
                </div>
              </li>
              <li className="flex justify-end">
                <div className="relative max-w-xl px-4 py-2 text-gray-700 bg-gray-100 rounded shadow">
                  <span className="block">how about you?</span>
                </div>
              </li>
              <li className="flex justify-start">
                <div className="relative max-w-xl px-4 py-2 text-white rounded-lg bg-blue-700 shadow ">
                  <span className="block">me too good</span>
                </div>
              </li>
              <li className="flex justify-end">
                <div className="relative max-w-xl px-4 py-2 text-gray-700 bg-gray-100 rounded shadow">
                  <span className="block">Good morning</span>
                </div>              
                </li>
               </ul>
              </div> 

              <div className=" flex items-center justify-between w-full p-3 border-t border-gray-300">
                <button>
                   <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"   d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </button>

                <button>
                </button>  

                <input type="text" placeholder="Message" className="block w-full py-2 pl-4 mx-3 bg-gray-100 rounded-full outline-none focus:text-gray-700" name="message" required />  
                
                <button>
                </button>

                <button type="submit">
                  <svg class="w-5 h-5 text-gray-500 origin-center transform rotate-90" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"> <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                  </svg>
              
                </button>


              </div>   



















              </div>

            </div>


          </div>

              
        </div>

            

             
    );
}

export default App;