'use client';
import Image from 'next/image';
import Link from 'next/link';
import { FiMail } from 'react-icons/fi';
import { RiKey2Fill } from 'react-icons/ri';
import { FcGoogle } from 'react-icons/fc';
import { SubmitHandler, useForm } from 'react-hook-form';
import { signIn, signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';

interface IformInput {
  email: string;
  password: string;
}

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IformInput>();

  const router = useRouter();

  const onSubmit: SubmitHandler<IformInput> = async (data) => {
    try {
      await signIn('credentials', {
        email: data.email,
        password: data.password,
        redirect: false,
      });
      router.push('/dashboard');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="flex h-screen">
      <div className="flex-col w-1/3 bg-primary ">
        <h2 className="text-5xl font-semibold mb-4 text-white flex justify-center w-full p-8">
          Bienvenido
        </h2>
        <h2
          className={`text-5xl font-thin mb-1 text-white flex justify-center w-full`}
        >
          Subastas
        </h2>
        <h2
          className={` text-5xl font-thin mb-6 text-white flex justify-center w-full`}
        >
          TJ-SJ
        </h2>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="p-8 rounded-lg w-full"
        >
          <div className="mb-6 relative flex items-center">
            <FiMail
              className="text-primary rounded-l-md absolute ml-3"
              size={18}
            />
            <input
              type="email"
              placeholder="Usuario o correo electrónico"
              id="email"
              className="placeholder-primary text-primary outline-none pl-10 p-2 rounded-md w-full"
              {...register('email', {
                required: {
                  value: true,
                  message: 'Este campo es obligatorio',
                },
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: 'Correo electrónico no válido',
                },
              })}
            />
          </div>
          {errors.email && (
            <span className="text-red-500">❌{errors.email.message}</span>
          )}
          <div className="mb-6 relative flex items-center">
            <RiKey2Fill
              className="text-primary rounded-l-md absolute ml-3"
              size={18}
            />
            <input
              type="password"
              placeholder="Contraseña"
              id="password"
              className="border placeholder-primary text-primary outline-none pl-10 p-2 rounded-md w-full"
              {...register('password', {
                required: {
                  value: true,
                  message: 'Este campo es obligatorio',
                },
              })}
            />
          </div>
          {errors.password && (
            <span className="text-red-500">❌{errors.password.message}</span>
          )}
          <div className="flex">
            <button
              type="submit"
              className="bg-tertiary hover:bg-tertiaryHover text-white py-2 px-4 rounded-md w-full font-semibold"
            >
              Iniciar Sesión
            </button>
          </div>
          <div className="flex flex-row justify-between items-center mt-5 mb-5">
            <hr className="border-1 w-full" />
            <span className="mr-4 ml-4">Ó</span>
            <hr className="border-1 w-full" />
          </div>
          <div>
            <button
              type="submit"
              className="flex items-center justify-center bg-white hover:bg-stone-200 text-primary py-2 px-4 rounded-md w-full font-semibold"
            >
              <FcGoogle className="mx-2" size={18} />
              Continuar con Google
            </button>
          </div>
          <Link href={''}>
            <button className="mt-5 hover:underline">Regístrate</button>
          </Link>
          <Link href={''}>
            <button className="mt-5 ml-5 hover:underline">
              ¿Olviaste tu contraseña?
            </button>
          </Link>
        </form>
      </div>
      <div className="w-2/3 relative">
        <Image
          src="/imgLogin2.png"
          alt="Imagen de fondo"
          layout="fill"
          objectFit="cover"
          objectPosition="top"
        />
      </div>
    </div>
  );
}
