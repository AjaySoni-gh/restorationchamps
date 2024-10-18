import { HomeIcon, File, UserRound } from "lucide-react"
import Link from "next/link"
import { NavButton } from "./NavButton"
import { ModeToggle } from "./modeToggle"

export function Header(){
    return (
        <header className="animate-slide bg-background h-12 p-2 border-b stickey top-0 z-20">

            <div className="flex h-8 items-center justify-between w-full">
           
            
                <div className="flex items-center gap-2">
                <NavButton href="/Home" label="Home" icon={HomeIcon} />
                <Link href="/home" className="flex justify-center items-center gap-2 ml-0 "title="home">
                <h1 className="hidden sm:block text-xl font-bold m-0 mt-1">
                    Computer repair shop
                    </h1>
                    </Link>

                </div>
                    <div className="flex items-center">
                    <NavButton href="/tickets" label="Tickets" icon={File} />
                    <NavButton href="/customers" label="Customers" icon={UserRound} />
                    <ModeToggle />
                    </div>
                
               

            </div>
        </header>
    )
}