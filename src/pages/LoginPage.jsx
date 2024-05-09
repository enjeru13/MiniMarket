import { useForm } from 'react-hook-form'
import { useAuth } from '../context/AuthContext'
import { Link, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

function LoginPage() {

    const { register, handleSubmit, formState: { errors } } = useForm()
    const { signin, errors: signinErrors, isAuthenticated } = useAuth()
    const navigate = useNavigate()

    const onSubmit = handleSubmit((data) => {
        signin(data)
        console.log(data)
    })

    useEffect(() => {
        if (isAuthenticated) navigate('/categories')
    }, [isAuthenticated])

    return (
        <div className='flex h-[calc(100vh-100px)] items-center justify-center'>
        <h1 className='flex justify-center p-12 font-bold text-5xl'>Bienvenido al MiniMarket!</h1> <p className='flex justify-center p-12 font-bold text-3xl text-indigo-700'>Inicia Sesión para continuar</p>

            <div className='max-w-md p-10 rounded-md'>
            {
                    signinErrors.map((error, i) => (
                        <div className='bg-red-700 text-white text-center 
                        font-bold p-3 uppercase mb-3 rounded-md' key={i}>{error}</div>
                    ))
                }
                <form onSubmit={onSubmit} className='bg-white shadow-md rounded-lg py-5 px-5 mb-10 mx-6'>

                    <h1 className='text-2xl font-bold'>Iniciar Sesión</h1>

                    <input type="text" {...register('username', { required: true })}
                        className='w-full border-2 p-2 placeholder-gray-400 px-4 rounded-md my-2'
                        placeholder='Username' />
                    {
                        errors.username && (
                            <p className='text-red-500 font-bold'>El Usuario es Obligatorio</p>
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
                    <button type='submit' className='bg-indigo-600 w-full p-3 text-white font-bold uppercase rounded-md hover:bg-indigo-700 cursor-pointer transition-all my-2'>Iniciar Sesión</button>
                </form>
                <p className='flex gap-x-2 justify-between font-bold'>
                    No tienes una cuenta? <Link to='/register' className='text-sky-500'>Registrate</Link>
                </p>
            </div>
        </div>
    )
}

export default LoginPage