import { Delete } from "../icons/Delete";
import { Notes } from "../icons/Notes";

import { ShareIcon } from "../icons/ShareIcon";

interface CardProps {
    title: string,
    link: string,
    type: "twitter" | "youtube";
}


export function Card ({title, link, type}: CardProps) {
    return <div className="flex mr-20">
        <div className="p-4 bg-white rounded-md border-gray-200 max-w-100 border h-70 ">
        <div className="flex justify-between">
            <div className="flex items-center text-md">
            <div className="text-gray-500 pr-20 ">
                <Notes />
                </div>
                <div className="mr-15">
                     Project Ideas
                </div>
               
            </div>
            <div className="flex items-center">
                <div className="pr-2 text-gray-500">
                    <a href={link} target="_blank"><ShareIcon /></a>
                    
                </div>
                <div className="text-gray-500">
                    <Delete />
                </div>
                
            </div>

        </div>
        <div className="pt-3 pl-5">
           { type === "youtube" && <iframe className= "w-70 h-55" src={link.replace("watch", "embed")} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>}

        {type === "twitter" && <blockquote className="twitter-tweet"><a href={link.replace("x.com", "twitter.com")}></a></blockquote>}
        </div>
        
    </div>
        </ div>
}