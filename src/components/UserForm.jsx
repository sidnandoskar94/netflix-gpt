import { useRef } from 'react';
import Input from './Input'

const UserForm = ({ handleSubmit, formType }) => {
    const name = useRef(null);
    const email = useRef(null);
    const password = useRef(null);

    const onFormSubmit = (e) => {
        e.preventDefault();
        handleSubmit(email.current.value, password.current.value);
    }
    return (
        <form onSubmit={onFormSubmit} className="flex flex-col gap-6 justify-center items-center text-center mb-6">
            {formType === 'signup' && <Input placeholder="Name" type="text" ref={name} />}
            <Input placeholder="Email" type="email" ref={email} />
            <Input placeholder="Password" type="text" ref={password} />
            <button className="bg-red-600 text-white rounded-sm font-bold px-4 py-2 w-full mt-5" type="submit">{formType === 'signup' ? 'Sign Up' : 'Log In'}</button>
        </form>
    )
}

export default UserForm