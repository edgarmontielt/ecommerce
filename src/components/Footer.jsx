import React from 'react'

export default function Footer() {
     return (
          <footer className='bg-primary-400 '>
               <div className=' mx-auto p-20 px-32 grid-footer ' >
                    <div>
                         <h2 className=' text-white font-semibold'>Send a comment</h2>
                         <input type="text" className=' mt-5 p-2 w-4/5 rounded-sm ' placeholder=' Write your email' />
                              <div className=' w-48 mt-10 bg-moztaza-500 text-center p-[8px] rounded-sm font-semibold text-[13px] hover:bg-moztaza-400 text-white'>Send</div>
                    </div>

                    <ul className='text-white flex flex-col gap-5'>
                         <h2 className=' text-white font-semibold text-lg'>Send a comment</h2>
                         <li> Home</li>
                         <li> Login</li>
                         <li> SignUp</li>
                         <li> Help</li>
                    </ul>
                    <ul className='text-white font-light flex flex-col gap-5'>
                         <h2 className=' text-white font-semibold text-lg'>Enterprise</h2>
                         <li> About us</li>
                         <li> History</li>
                    </ul>
                    <ul className=' text-primary-100 flex flex-col gap-5'>
                         <h2 className=' text-white font-semibold text-lg'>Resouerces</h2>
                         <li> Home</li>
                         <li> Login</li>
                         <li> SignUp</li>
                         <li> Help</li>
                    </ul>
               </div>
          </footer>
     )
}
