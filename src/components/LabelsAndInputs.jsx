import React from 'react'

export function LabelsAndInputs({ labelName, labelFor, inputType, placeholder, errors, value, onChange }) {
    return (

        <div className='flex flex-col items-start text-left justify-start gap-2'>
            <label htmlFor={labelFor} className='text-[#000000] font-medium text-base'>{labelName}*</label>
            <input type={inputType} id={labelFor} name={labelFor} placeholder={placeholder} className={`py-[11px] px-3 rounded-lg border ${errors ? 'border-[#F84D4D] outline-[#F84D4D]' : 'border-[#D9D8DD]'} placeholder:text-[hsl(0,0%,69%)] placeholder:font-medium w-full outline-[#AFAFAF]`} value={value} onChange={onChange} />
            {errors && <p className='text-[#F84D4D] font-medium text-sm'>{errors}</p>
            }
        </div>
    )
}
