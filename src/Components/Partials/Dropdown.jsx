import React from 'react'

const Dropdown = ({ title, options, func}) => {
  return (
    <div>
        <select className='bg-zinc-900 border-2 border-white rounded-md p-1 w-28' defaultValue="0" onChange={func} name="format" id="format">
            <option value="0" disabled>{title}</option>
            {options.map((option,index) => (
                <option key={index} value={option}>{option.toUpperCase()}</option>
            ))}
        </select>
    </div>
  )
}

export default Dropdown