"use client";

import { PolygonInicio } from "@/app/components/inicio/PolygonInicio";
import { InputInicio } from "@/app/components/inicio/Input";
import { ButtonLogin } from "@/app/components/inicio/Button";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useAuth } from "@/app/Context/AuthContext";
import Link from "next/link";

export default function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { signin, errors: siginnErr, isAuthenticated } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (isAuthenticated) {
      router.push("/home");
    }
  }, [isAuthenticated, router]);

  const onSubmit = handleSubmit((data) => {
    signin(data);
  });

  return (
    <div className="flex min-h-screen min-w-screen bg-e">
      <PolygonInicio size="w-4/12 sm:w-2/12" sizeText="text-xl md:text-2xl lg:text-3xl" />
      <form className="flex flex-col items-center w-8/12 sm:w-10/12 h-screen" onSubmit={onSubmit}>
        <div className="flex flex-col items-center justify-center w-full h-1/6">
          <h1 className="mt-10 sm:mt-15 lg:mt-20 font-Login font-bold text-5xl sm:text-6xl text-c text-center">Inicio de Sesion</h1>
          {Array.isArray(siginnErr) && (
            <div className="flex flex-col items-center mb-2 bg-f shadow-sf px-1 w-6/12">
              {siginnErr.map((error, i) => (
                <span key={i} className="text-c font-Login text-sm mb-0.5">
                  {error}
                </span>
              ))}
            </div>
          )}
        </div>
        <div className="flex flex-col justify-center h-4/6 w-10/12 sm:w-8/12">
          <InputInicio tittle="Nombre de usuario" type="text" {...register("name", { required: true })} />
          {errors.name && <span className="font-Login font-light text-sm text-c mt-1.5">*Este campo es obligatorio</span>}
          <InputInicio tittle="Contraseña" type="password" {...register("password", { required: true })} />
          {errors.password && <span className="font-Login font-light text-sm text-c mt-1.5">*Este campo es obligatorio</span>}
        </div>
        <div className="flex flex-col items-center justify-center w-full h-1/6">
          <ButtonLogin text="Iniciar Sesion" />
          <Link className="font-Login underline text-b" href="/register">Aun no tienes cuenta?</Link>
        </div>
      </form>
    </div>
  );
}
