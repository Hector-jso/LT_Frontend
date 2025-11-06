"use client";

import { PolygonInicio } from "@/app/components/inicio/PolygonInicio";
import { InputInicio } from "@/app/components/inicio/Input";
import { ButtonLogin } from "@/app/components/inicio/Button";

import { useAuth } from "@/app/Context/AuthContext";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function RegisterPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    clearErrors,
    watch,
  } = useForm();
  const { signup, isAuthenticated, errors: registerErr } = useAuth();
  const router = useRouter();
  

  const password = watch("password");

  useEffect(() => {
    if (isAuthenticated) {
      router.push("/home");
    }
  }, [isAuthenticated, router]);

  useEffect(() => {
    if (Object.keys(errors).length > 0) {
      const timer = setTimeout(() => {
        clearErrors() 
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [errors, clearErrors]);

  const onSubmit = handleSubmit(async (values) => {
    signup(values);
  });

  return (
    <div className="flex min-h-screen min-w-screen bg-e">
      <PolygonInicio size="w-4/12 sm:w-2/12" sizeText="text-xl md:text-2xl lg:text-3xl" />
      <form className="flex flex-col items-center w-8/12 sm:w-10/12 h-screen" onSubmit={onSubmit}>
        <div className="flex flex-col justify-center items-center w-full h-1/6 ">
          <h1 className="font-Login font-bold text-5xl sm:text-6xl text-c text-center">Registro</h1>
          {Array.isArray(registerErr) && (
            <div className="flex flex-col items-center mb-2 bg-f shadow-sf px-1">
              {registerErr.map((error, i) => (
                <span key={i} className="text-c font-Login text-sm mb-0.5">
                  {error}
                </span>
              ))}
            </div>
          )}
        </div>
        <div className="flex flex-col justify-center h-4/6 w-10/12 sm:w-8/12 px-5">
          <InputInicio tittle="Nombre de usuario" type="text" {...register("name", { required: true })} />
          {errors.name && <span className="font-Login font-light text-sm text-c mt-0.5">*Este campo es obligatorio</span>}
          <InputInicio tittle="Correo" type="email" {...register("email", { required: true })} />
          {errors.email && <span className="font-Login font-light text-sm text-c mt-0.5">*Este campo es obligatorio</span>}
          <InputInicio tittle="Contraseña" type="password" {...register("password", { required: true })} />
          {errors.password && <span className="font-Login font-light text-sm text-c mt-0.5">*Este campo es obligatorio</span>}
          <InputInicio
            tittle="Repetir Contraseña"
            type="password"
            {...register("password2", {
              validate: (value) => {
                if (!value) return "Este campo es obligatorio";
                if (value !== password) return "Las contraseñas no coinciden";
                return true;
              },
            })}
          />
          {errors.password2 && <span className="flex font-Login font-light text-sm text-c mt-0.5">*{typeof errors.password2.message === "string" ? errors.password2.message : "Este campo es obligatorio"}</span>}
        </div>
        <div className="flex flex-col justify-center items-center w-full h-1/6 pt-5">
          <ButtonLogin text="Registrarse" />
          <Link className="font-Login underline text-b" href="/login">
            Ya tienes cuenta?
          </Link>
        </div>
      </form>
    </div>
  );
}
