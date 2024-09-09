import { useId, forwardRef } from "react";

const Input = ({ label, className = '', ...rest }, ref) => {
    const id = useId();
    return (
        <div className='form-el flex flex-col w-full bg-transparent'>
            {label && <label htmlFor={id} className='form-label block w-full'>{label}</label>}
            <input id={id} ref={ref} className={`form-input block w-full h-10 px-3 rounded-sm bg-transparent border border-white-30 text-white ${className}`} {...rest} />
        </div>
    );
};

export default forwardRef(Input);
