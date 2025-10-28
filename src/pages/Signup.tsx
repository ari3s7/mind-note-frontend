import { Button } from "../components/Button";
import { InputBox } from "../components/InputBox";

export function Signup () {
    return <div className="h-screen w-screen bg-gray-200 flex justify-center items-center">
        <div className="bg-white rounded border min-w-100 min-h-90">
            <div className="flex pt-20">
                <InputBox placeholder="Username" />
            </div>
           <div className="pt-10">
            <InputBox placeholder="Password" />
           </div>
           
            <div className="flex justify-center pt-10">
                <Button variant="primary" text="Signup" />
            </div>
           
        </div>
    </div>
}