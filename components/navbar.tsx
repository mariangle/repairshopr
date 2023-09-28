import { ModeToggle } from "@/components/mode-toggle"
import { buttonVariants } from "@/components/ui/button"

import Link from "next/link"

export const Navbar = () => {
  return (
    <nav className="flex justify-between p-4 sticky top-0">
      <Link href={"/tickets"}>Tickets</Link>
      <div className="flex gap-2 items-center">
        <ModeToggle />
        <Link className={buttonVariants({ variant: "secondary" })} href={"/login"}>Login</Link>
      </div>
    </nav>
  )
}