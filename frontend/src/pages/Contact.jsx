import React from 'react'
import { assets } from '../assets/assets_frontend/assets'

const Contact = () => {
  return (
    <div className='px-6 sm:px-16 py-10'>
      <div className='text-center text-3xl font-semibold text-gray-700 mb-4'>
        Need Help? <span className='text-primary'>Reach a Doctor</span>
      </div>

      <div className='grid md:grid-cols-2 gap-12 items-center mt-10'>

        {/* Left Image or Illustration */}
        <img
          className='w-full max-w-md mx-auto'
          src={assets.contact_image}
          alt='Get Help Illustration'
        />

        {/* Right Content */}
        <div className='flex flex-col gap-6 text-gray-600'>
          <p className='text-lg'>
            We're here to help. If you need urgent medical attention, prescription assistance, or
            help with booking, use the options below.
          </p>

          <div>
            <p className='font-semibold text-gray-700'>Emergency Contact</p>
            <p>📞 911 or local emergency</p>
          </div>

          <div>
            <p className='font-semibold text-gray-700'>Support Line</p>
            <p>📞 (415) 555-0132</p>
            <p>✉️ prescripto-support@healthcare.com</p>
          </div>

          <div>
            <p className='font-semibold text-gray-700'>Quick Help</p>
            <button className='bg-primary text-white px-6 py-2 rounded hover:bg-primary-dark transition'>
              Chat with an Assistant
            </button>
          </div>

          <div>
            <p className='font-semibold text-gray-700'>Give Feedback</p>
            <textarea
              rows='3'
              className='w-full p-2 border rounded'
              placeholder='Tell us how we can improve your experience...'
            />
            <button className='mt-2 border border-black px-4 py-2 hover:bg-black hover:text-white transition-all'>
              Submit Feedback
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
