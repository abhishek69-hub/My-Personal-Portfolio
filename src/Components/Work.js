import React from 'react'
import spotifyclone from "../projects/spotifyclone.PNG"
import Netflix from "../projects/Netflix.PNG"
import Inshorts from "../projects/Inshorts.PNG"
import Notes from "../projects/Notes.PNG"
import Chat from "../projects/Chat.PNG"
import Portfolio from "../projects/Portfolio.PNG"

export default function Work() {


    const showNote =(e)=>{
        e.preventDefault()
        alert("This app is not hosted yet.");

        // return false
        
    }

    const alertinshorts =(e)=>{
        e.preventDefault()
        alert("News API developer plan does not accept HTTP requests made from browser. Hence,this app can only be viewed locally.");
        // return false
        
    }



  return (
      <div name="projects" className='bg-white w-full h-fit pb-5'>
          <div className='max-w-[1100px] mx-auto p-4 flex flex-col justify-center w-full h-full '>
              <div className='pb-4'>
                  <p className='text-2xl sm:text-5xl font-bold text-blue-900 text-left underline my-5'>Work</p>
                  <p className='my-2 pb-6 text-left'>These are some of my recent projects: </p>

              </div>

              <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4  gap-y-8  '>
                  <div class="max-w-sm rounded overflow-hidden shadow-lg hover:scale-95 group duration-200 content-div">
                      <img class="w-full opacity-100 group-hover:opacity-20" src={Netflix} alt="Sunset in the mountains" />

                      <div className='mx-auto pt-3 flex flex-row justify-center item-center'>
                              <a className='px-3' href="/">
                              <button class="  bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded px-3 group-hover:scale-110 duration-200">
                                  <span><a href="https://frabjous-tanuki-ca7659.netlify.app/" target="_blank">Demo</a> </span>
                                  
                              </button>
                              </a>

                              <a href="/">
                              <button class="  bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded px-3 group-hover:scale-110 duration-200">
                                  <span><a href="https://github.com/abhishek69-hub/Netflix-Frontend-Clone" target="_blank">Code</a></span>
                                  
                              </button>
                              </a>
                        </div>

                      <div class="px-6 py-4 opacity-100 group-hover:opacity-20">
                          <div class="font-bold text-xl mb-2">Netflix Clone</div>
                          <p class="text-gray-700 text-base">
                              This Netflix clone has been made by using React JS,Tailwind CSS and Firebase in the backend.
                          </p>
                      </div>
                  </div>


                  <div class="max-w-sm rounded overflow-hidden shadow-lg hover:scale-95 group duration-200 content-div">
                      <img class="w-full opacity-100 group-hover:opacity-20" src={Inshorts} alt="Sunset in the mountains" />

                      <div className='mx-auto pt-3'>
                              <a className='px-3' href="/">
                              <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded px-3 group-hover:scale-110 duration-200" onClick={alertinshorts}>
                              <span>Demo</span>
                              </button>
                              </a>

                              <a href="/">
                              <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded px-3 group-hover:scale-110 duration-200">
                              <span><a href="https://github.com/abhishek69-hub/Inshorts-News-App-clone" target="_blank">Code</a></span>
                              </button>
                              </a>
                        </div>

                      <div class="px-6 py-4 opacity-100 group-hover:opacity-20">
                          <div class="font-bold text-xl mb-2">Inshorts Clone</div>
                          <p class="text-gray-700 text-base">
                              This Inshorts clone has been made by using React JS,Tailwind CSS and News API to fetch the data
                          </p>
                      </div>
                  </div>

                  <div class="max-w-sm rounded overflow-hidden shadow-lg hover:scale-95 group duration-200 content-div">
                      <img class="w-full opacity-100 group-hover:opacity-20" src={Notes} alt="Sunset in the mountains" />

                      <div className='mx-auto pt-3'>
                              <a className='px-3' href="/">
                              <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded px-3 group-hover:scale-110 duration-200">
                              <span><a href="https://frabjous-tanuki-ca7659.netlify.app/" target="_blank">Demo</a> </span>
                              </button>
                              </a>

                              <a href="/">
                              <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded px-3 group-hover:scale-110 duration-200">
                              <span><a href="https://github.com/abhishek69-hub/Notes-App" target="_blank">Code</a></span>
                              </button>
                              </a>
                        </div>

                      <div class="px-6 py-4 opacity-100 group-hover:opacity-20">
                          <div class="font-bold text-xl mb-2">Notes App</div>
                          <p class="text-gray-700 text-base">
                              This Notes App has been made by using HTML,Bootstrap and Vanilla JavaScript.
                          </p>
                      </div>
                  </div>

                  <div class="max-w-sm rounded overflow-hidden shadow-lg hover:scale-95 group duration-200 content-div">
                      <img class="w-full opacity-100 group-hover:opacity-20" src={Chat} alt="Sunset in the mountains" />

                      <div className='mx-auto pt-3'>
                              <a className='px-3' href="/">
                              <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded px-3 group-hover:scale-110 duration-200" onClick={showNote}>
                              <span>Demo</span>
                              </button>
                              </a>

                              <a href="/">
                              <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded px-3 group-hover:scale-110 duration-200">
                              <span><a href="https://github.com/abhishek69-hub/NewChat" target="_blank">Code</a></span>
                              </button>
                              </a>
                        </div>

                      <div class="px-6 py-4 opacity-100 group-hover:opacity-20">
                          <div class="font-bold text-xl mb-2">Chat App</div>
                          <p class="text-gray-700 text-base">
                              This Chat App has been made by using HTML,CSS,Vanilla JavaScript and Node JS.
                          </p>
                      </div>
                  </div>

                  <div class="max-w-sm rounded overflow-hidden shadow-lg hover:scale-95 group duration-200 content-div">
                      <img class="w-full opacity-100 group-hover:opacity-20" src={spotifyclone} alt="Sunset in the mountains" />

                      <div className='mx-auto pt-3'>
                              <a className='px-3' href="/">
                              <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded px-3 group-hover:scale-110 duration-200">
                              <span><a href="https://frabjous-tanuki-ca7659.netlify.app/" target="_blank">Demo</a> </span>
                              </button>
                              </a>

                              <a href="/">
                              <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded px-3 group-hover:scale-110 duration-200">
                              <span><a href="https://github.com/abhishek69-hub/Netflix-Frontend-Clone" target="_blank">Code</a></span>
                              </button>
                              </a>
                        </div>

                      <div class="px-6 py-4 opacity-100 group-hover:opacity-20">
                          <div class="font-bold text-xl mb-2">Spotify Clone</div>
                          <p class="text-gray-700 text-base">
                              This Spotify clone has been made by using HTML,CSS and Vanilla JavaScript.
                          </p>
                      </div>
                  </div>

                  <div class="max-w-sm rounded overflow-hidden shadow-lg hover:scale-95 group duration-200 content-div">
                      <img class="w-full opacity-100 group-hover:opacity-20" src={Portfolio} alt="Sunset in the mountains" />

                      <div className='mx-auto pt-3'>
                              <a className='px-3' href="/">
                              <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded px-3 group-hover:scale-110 duration-200">
                              <span><a href="https://frabjous-tanuki-ca7659.netlify.app/" target="_blank">Demo</a> </span>
                              </button>
                              </a>

                              <a href="/">
                              <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded px-3 group-hover:scale-110 duration-200">
                              <span><a href="https://github.com/abhishek69-hub/My-Personal-Portfolio" target="_blank">Code</a></span>
                              </button>
                              </a>
                        </div>

                      <div class="px-6 py-4 opacity-100 group-hover:opacity-20">
                          <div class="font-bold text-xl mb-2">Portfolio</div>
                          <p class="text-gray-700 text-base">
                              This Spotify clone has been made by using React JS and Tailwind CSS
                          </p>
                      </div>
                  </div>


                  


              </div>

          </div>

      </div>
  )
}
