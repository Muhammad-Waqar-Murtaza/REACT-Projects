import React from 'react'

const Button = ({label, iconURL, backgroundColor, textColor, borderColor}) => {

  return (
    <button className={`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none ${backgroundColor ? `${backgroundColor} ${textColor} ${borderColor}`: "bg-coral-red border-coral-red text-white"} rounded-full max-sm:w-full `}>
        {label}
        {iconURL && <img className='ml-2 rounded-full w-5 h-5' src={iconURL} alt="arrow right icon" />}
    </button>
  )
}

export default Button