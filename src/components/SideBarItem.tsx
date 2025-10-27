import type { ReactElement } from "react";


export function SideBarItem ({text, icon}: {text: string; icon: ReactElement}) {
    return (
      <div className="flex text-gray-500">
        {icon} {text}
      </div>
    )
}