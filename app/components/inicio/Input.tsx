import React from "react";

interface InputInicioProps extends React.InputHTMLAttributes<HTMLInputElement> {
  tittle?: string;
  classNameName?: string;
  classNameInput?: string;
}

/**
 * Este componente está adaptado para funcionar con react-hook-form.
 * Permite pasar {...register("campo")} sin perder ref ni eventos.
 */
export const InputInicio = React.forwardRef<HTMLInputElement, InputInicioProps>(
  ({ tittle, classNameName, classNameInput, ...rest }, ref) => {
    return (
      <div className="flex flex-col justify-center items-center w-full h-2/12 my-3 lg:my-4">
        <h1
          className={`font-Login text-c text-3xl text-center w-full ${
            classNameName || ""
          }`}
        >
          {tittle || "Text"}
        </h1>
        <input
          ref={ref}
          {...rest}
          className={`w-full h-12 sm:h-15 bg-d focus:outline-solid focus:outline-4 focus:outline-b font-Login text-black text-lg font-medium pt-8 pb-2 pl-2 autocomplete-login ${
            classNameInput || "shadow_sie"
          }`}
        />
      </div>
    );
  }
);

InputInicio.displayName = "InputInicio";