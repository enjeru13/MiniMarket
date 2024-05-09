import { useForm } from 'react-hook-form'
import { useAuth } from '../context/AuthContext'
import { useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'

function RegisterPage() {
    const { register, handleSubmit, formState: {
        errors
    } } = useForm()
    const { signup, isAuthenticated, errors: registerErrors } = useAuth()
    const navigate = useNavigate()

    useEffect(() => {
        if (isAuthenticated) navigate('/categories')
    }, [isAuthenticated])

    const onSubmit = handleSubmit(async (values) => {
        signup(values)
    })


    return (
       
        <div>
        <div className='flex h-[calc(100vh-100px)] items-center justify-center'>
        <h1 className='flex justify-center p-12 font-bold text-5xl'>Bienvenido al MiniMarket!</h1> <p className='flex justify-center p-12 font-bold text-3xl text-indigo-700'>Registrate para comenzar</p>
            

            <div className=' max-w-md p-10 rounded-md'>
                {
                    registerErrors.map((error, i) => (
                        <div className='bg-red-700 text-white text-center 
                        font-bold p-3 uppercase mb-3 rounded-md' key={i}>{error}</div>
                    ))
                }
                <form onSubmit={onSubmit} className='bg-white shadow-md rounded-lg py-5 px-5 mb-10 mx-6 '>

                    <h1 className='text-2xl font-bold'>Registro</h1>

                    <input type="text" {...register('username', { required: true })}
                        className='w-full border-2 p-2 placeholder-gray-400 px-4 rounded-md my-2 '
                        placeholder='Username' />
                    {
                        errors.username && (
                            <p className='text-red-500 font-bold'>El Usuario es Obligatorio</p>
                        )
                    }
                    <input type="email" {...register('email', { required: true })}
                        className='w-full border-2 p-2 placeholder-gray-400 px-4 rounded-md my-2'
                        placeholder='Email' />
                    {
                        errors.email && (
                            <p className='text-red-500 font-bold'>El Email es Obligatorio</p>
                        )
                    }
                    <input type="password" {...register('password', { required: true })}
                        className='w-full border-2 p-2 placeholder-gray-400 px-4 rounded-md my-2'
                        placeholder='Password' />
                    {
                        errors.password && (
                            <p className='text-red-500 font-bold'>El Password es Obligatorio</p>
                        )
                    }
                    <button type='submit' className='bg-indigo-600 w-full p-3 text-white font-bold uppercase rounded-md hover:bg-indigo-700 cursor-pointer transition-all my-2'>Registrar</button>
                </form>
                <p className='flex gap-x-2 justify-between font-bold'>
                Ya tienes una cuenta? <Link to='/login' className='text-sky-500'>Inicia Sesión</Link>
            </p>
            </div>
        </div>
        </div>
    )
}

export default RegisterPage