import { useState } from "react";
import { Cross } from "../icons/Cross";
import { InputBox } from "./InputBox";
import { Button } from "./Button"

interface Modal {
    open: boolean;
    onClose: () => void
}

export function ContentModel ({open, onClose}: Modal) { 
    return <div>
      {open && <div className="w-screen h-screen bg-gray-200 fixed top-0 left-0 opacity-70 flex justify-center">
        <div className="flex flex-col justify-center ">
                <span className="bg-white opacity-100 p-80 rounded">
                <div className="flex justify-end">
                    <div onClick={onClose} className="cursor-pointer">
                        <Cross/>
                    </div>
                </div>
                 <div>
                    <InputBox placeholder={"Title"}/>
                    <div className="flex pt-20">
                        <InputBox placeholder={"Link"}/>
                    </div>
                    
                 </div>
                 <div className="flex justify-center pt-10">
                    <Button variant="primary" text="Submit"/>
                 </div>
                 
                </span>
               
            </div>
        </div>
}</div>

}