import React from 'react'
import Image from 'next/image'
import githublogo from '../images/icons/github (3).png'
import memoji from '../images/icons/My-Memoji.png'
import blackOnly from '../images/icons/black_only.png'
import flag from '../images/icons/flag.png'
import ScrollReveal from './ui/ScrollReveal'


export default function HeroSection() {
  return (
    <>
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse-glow"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse-glow" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-sky-500/10 rounded-full blur-3xl animate-pulse-glow" style={{animationDelay: '2s'}}></div>
      </div>

      {/* Navigation */}
      <div className='sm:px-14 px-5 sticky top-8 z-50'>
        <div className='flex mx-auto max-w-sm sm:max-w-3xl sm:justify-between justify-center justify-items-center px-3 sm:px-5 items-center glass-effect-dark shadow-xl backdrop-blur-3xl border-blue-500/30 py-2 rounded-full transition-all duration-300 hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/20'>
          {/* Your custom logo */}
          <Image height={40} width={40} className='w-8 h-8 sm:flex hidden animate-rotate-slow' alt='logo' src={blackOnly} />
          <div className='flex flex-row lg:gap-12 md:gap-9 gap-6 justify-center text-white tracking-wide items-center lg:text-[13px] text-sm'>
            <div className='hover:text-blue-400 transition-colors duration-200 cursor-pointer'><a href="#Projects">Projects</a></div>
            <div className='hover:text-cyan-400 transition-colors duration-200 cursor-pointer'><a href="#Experience">Experience</a></div>
            <div className='hover:text-blue-400 transition-colors duration-200 cursor-pointer'><a href="#About">About</a></div>
            <a href="https://docs.google.com/document/d/1gCxSo5t0mJnKGwGu5_H6E2rfgWLvpFxmYlstCJnxdDc/edit?usp=sharing" target='_blank'>
              <div className="p-[1px] bg-gradient-to-r from-blue-500 via-cyan-500 to-sky-500 rounded-3xl cursor-pointer hover:scale-105 transition-transform duration-300 animate-glow">
                <div className="rounded-full py-2 px-4 md:py-3 md:px-6 bg-black text-white backdrop-blur-2xl hover:bg-gray-900 transition-colors duration-200">
                  Resume
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* Hero Content */}
      <div className='flex flex-col sm:px-14 px-5 justify-center items-center mb-12 pt-2 mt-16 sm:mt-20 relative z-10'>
        <div className='relative'>
          <Image height={120} width={120} className='animate-fade-in-up animate-float w-28 h-28 md:w-32 md:h-32' quality={100} alt='memoji' src={memoji} />
          <div className="absolute inset-0 blur-2xl bg-blue-500/30 animate-pulse-glow rounded-full -z-10"></div>
        </div>
        
        <div className='text-center text-white animate-fade-in-up font-bold font-sans mt-4 text-xl md:text-3xl lg:text-[38px]'>
          <h2 className='flex justify-center mb-1'>
            <span className='gradient-text'>Ashraf Aminu</span>
            <span className='ml-2'>is a Software Developer</span>
          </h2>
          <h2 className='flex justify-center items-center gap-2 mb-3'>
            From Abuja, 
            <Image 
              src={flag} 
              alt="Nigeria flag" 
              width={40} 
              height={40} 
              className='w-7 h-7 md:w-9 md:h-9 hover:scale-110 transition-transform duration-200 inline-block'
            />
          </h2>
          
          {/* Streamlined tagline */}
          <p className='text-gray-300 font-normal text-sm md:text-base lg:text-lg max-w-3xl mx-auto leading-relaxed px-4'>
            Crafting scalable, high-impact applications with clean UIs and efficient performance. 
            Passionate about building responsive, user-focused solutions that deliver results.
          </p>
        </div>

        <ScrollReveal animation='animate-expand-horizontally'>
          <div className='flex justify-items-center mt-5 gap-2 sm:gap-3 relative mb-8'>
            {/* <a href="https://x.com/ashraf_amyn_" target='_blank' className='cursor-pointer group'>
              <div className='relative'>
                <div className='w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-gradient-to-br from-sky-400 to-blue-600 flex items-center justify-center shadow-lg hover:shadow-blue-500/50 transition-all duration-300 hover:-translate-y-2 hover:scale-110 hover:rotate-6'>
                  <Image height={22} width={22} className='w-5 h-5 sm:w-6 sm:h-6' alt='twitter logo' src='https://img.icons8.com/?size=100&id=A4DsujzAX4rw&format=png&color=ffffff' />
                </div>
              </div>
            </a> */}
            
            <a href="https://github.com/tapetal" target='_blank' className='cursor-pointer group'>
              <div className='relative'>
                <div className='w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center shadow-lg hover:shadow-gray-500/50 transition-all duration-300 hover:-translate-y-2 hover:scale-110 hover:rotate-6'>
                  <Image height={22} width={22} className='w-5 h-5 sm:w-6 sm:h-6' alt='githublogo' src={githublogo} />
                </div>
              </div>
            </a>
            
            <a href="https://www.linkedin.com/in/ashraf-aminu-a81310251" target='_blank' className='cursor-pointer group'>
              <div className='relative'>
                <div className='w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center shadow-lg hover:shadow-blue-600/50 transition-all duration-300 hover:-translate-y-2 hover:scale-110 hover:rotate-6'>
                  <Image height={22} width={22} className='w-5 h-5 sm:w-6 sm:h-6' alt='linkedinlogo' src='https://img.icons8.com/?size=100&id=2EqeH19eMd3a&format=png&color=ffffff' />
                </div>
              </div>
            </a>
            
            
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=aminuashraf55@gmail.com&su=Hello%20Ashraf&body=I%20would%20like%20to%20get%20in%20touch%20with%20you." target="_blank" rel="noopener noreferrer" className='cursor-pointer group'>
              <div className='relative'>
                <div className='w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-gradient-to-br from-gray-600 to-gray-800 flex items-center justify-center shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 hover:-translate-y-2 hover:scale-110 hover:rotate-6'>
                  <Image height={22} width={22} className='w-5 h-5 sm:w-6 sm:h-6' alt='maillogo' src='https://img.icons8.com/?size=100&id=Y2GfpkgYNp42&format=png&color=ffffff' />
                </div>
              </div>
            </a>
            
            {/* <a href="https://www.instagram.com/ashraf_amyn_/" target='_blank' className='cursor-pointer group'>
              <div className='relative'>
                <div className='w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center shadow-lg hover:shadow-purple-500/50 transition-all duration-300 hover:-translate-y-2 hover:scale-110 hover:rotate-6'>
                  <Image height={22} width={22} className='w-5 h-5 sm:w-6 sm:h-6' alt='instagram logo' src='https://img.icons8.com/?size=100&id=32320&format=png&color=FFFFFF' />
                </div>
              </div>
            </a> */}
          </div> 
        </ScrollReveal>
      </div>
    </>
  )
}