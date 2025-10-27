import { Twitter } from "../icons/Twitter";
import { Youtube } from "../icons/Youtube";
import { SideBarItem } from "./SideBarItem";


export function SideBar () {
    return <>
    <div className="h-screen bg-white border-r w-72 fixed left-0 top-0 border-2">
          <div className="pt-4">
            <div className="mt-30">
                <SideBarItem text="Twitter" icon ={<Twitter/>} />
            </div>
            <div className="mt-10">
                <SideBarItem text="Youtube" icon={<Youtube/>} />
            </div>
            
          </div>
    </div>
    
    
    </>
}