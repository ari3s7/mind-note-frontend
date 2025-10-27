import type { ReactElement } from "react";


export function SideBarItem ({text, icon}: {text: string; icon: ReactElement}) {
    return (
      <div className="flex text-gray-700 py-1 cursor-pointer hover:bg-gray-200 rounded max-w-72 transition-all duration-300ms">
        {icon} {text}
      </div>
    )
}