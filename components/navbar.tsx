import { ModeToggle } from "@/components/mode-toggle"
import { Button } from "./ui/button"

import Link from "next/link"

export const Navbar = () => {
  // T3581226a73e2b859c-e73b052aeffd0ef6eb807ec7fd973b52

  return (
    <nav className="flex justify-between p-2">
      <Link href={"/tickets"}>Tickets</Link>
      <div className="flex gap-2 items-center">
        <ModeToggle />
        <Button variant={"secondary"}>
          <Link href={"/login"}>Login</Link>
        </Button>
        <Button>
          <Link href={"/register"}>Sign Up</Link>
        </Button>
      </div>
    </nav>
  )
}