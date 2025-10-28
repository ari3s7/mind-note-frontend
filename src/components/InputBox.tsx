import React, { forwardRef } from "react";

interface InputProps {
  placeholder: string;
}

export const InputBox = forwardRef<HTMLInputElement, InputProps>(
  ({ placeholder }, ref) => {
    return (
      <div className="w-full max-w-sm min-w-[200px]">
        <input
          ref={ref}
          className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
          type="text"
          placeholder={placeholder}
        />
      </div>
    );
  }
);
