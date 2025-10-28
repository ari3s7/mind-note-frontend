import { useState, useRef } from "react";
import { Cross } from "../icons/Cross";
import { InputBox } from "./InputBox";
import { Button } from "./Button"
import { BACKEND_URL } from "../config";
import axios from "axios";
interface Modal {
    open: boolean;
    onClose: () => void
}

enum ContentType {
    Youtube = "youtube",
    Twitter = "twitter"
}

export function ContentModel ({open, onClose}: Modal) { 
    const titleRef = useRef<HTMLInputElement>(null);
    const linkRef = useRef<HTMLInputElement>(null);
    const [type, setType] = useState(ContentType.Youtube)

    async function addContent () {
           const title = titleRef.current?.value;
           const link = linkRef.current?.value;

            await axios.post(`${BACKEND_URL}/api/v1/content`, {
                link,
                title,
                type
            }, {
                headers: {
                    "Authorization": localStorage.getItem("token")
                }
            })
    }
    return <div>
      {open && <div className="w-screen h-screen bg-gray-200 fixed top-0 left-0 opacity-60 flex justify-center">
        <div className="flex flex-col justify-center ">
                <span className="bg-white opacity-200 p-80 rounded">
                <div className="flex justify-end">
                    <div onClick={onClose} className="cursor-pointer">
                        <Cross/>
                    </div>
                </div>
                 <div>
                    <InputBox ref={titleRef} placeholder={"Title"}/>
                    <div className="flex pt-20">
                        <InputBox ref={linkRef}  placeholder={"Link"}/>
                    </div>
                    
                 </div>
                 <h1>Type</h1>
                 <div className="flex gap-2 p-4">
                 <Button text="Youtube" variant={type === ContentType.Youtube ? "primary" : "secondary"} onClick={() => {
                    setType(ContentType.Youtube)
                 }}></Button>
                 <Button text="Twitter" variant={type === ContentType.Twitter ? "primary" : "secondary"} onClick={() => {
                    setType(ContentType.Twitter)
                 }}></Button>
                 <div className="flex justify-center pt-10">
                    <Button onClick={addContent} variant="primary" text="Submit"/>
                 </div>
                 </div>
                </span>
                
               
            </div>
        </div>
}</div>

}