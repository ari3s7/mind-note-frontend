import { Button } from "../components/Button";
import { InputBox } from "../components/InputBox";
import { useRef } from "react";
import axios from "axios";
import { BACKEND_URL } from "../config"
import { useNavigate } from "react-router-dom";

export function Signin () {
        const usernameRef = useRef<HTMLInputElement>(null);
        const passwordRef = useRef<HTMLInputElement>(null);
        const navigate = useNavigate();

    async function signin () {
        const username = usernameRef.current?.value;
        const password = passwordRef.current?.value;
        const response =  await axios.post(`${BACKEND_URL}/api/v1/signin`, {
                username,
                password
    })
        const jwt = response.data.token;
        localStorage.setItem("token", jwt)
        navigate("/dashboard")
    }
    return <div className="h-screen w-screen bg-gray-200 flex justify-center items-center">
        <div className="bg-white rounded border min-w-100 min-h-90">
            <div className="flex pt-20">
                <InputBox ref={usernameRef} placeholder="Username" />
            </div>
           <div className="pt-10">
            <InputBox ref={passwordRef} placeholder="Password" />
           </div>
           
            <div className="flex justify-center pt-10">
                <Button onClick={signin} variant="primary" text="Signin" />
            </div>
           
        </div>
    </div>
}