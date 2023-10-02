"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { buttonVariants } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { ModeToggle } from "@/components/mode-toggle"
import { useApiStore } from "@/hooks/use-api-store"
import Link from "next/link"
import { useStore } from "@/hooks/use-store"

export const Navbar = () => {
  const apiStore = useStore(useApiStore, (store) => store);

  if (!apiStore) return null;

  const onLogout = () => {
    apiStore.logout();
  }

  return (
    <nav className="flex justify-between p-4 sticky top-0">
      <div>
      { apiStore.isLogged && <Link href={"/tickets"}>{apiStore.credentials.subdomain}</Link>}
      </div>
      <div className="flex gap-2 items-center">
        <ModeToggle />
        { apiStore.isLogged ? (
          <>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">
                  {apiStore.user.name}
                  { apiStore.user.isAdmin && <Badge variant="outline">Admin</Badge>}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuLabel>{apiStore.user.email}</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={onLogout}>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          </>
        ) : (
          <>
            <Link className={buttonVariants({ variant: "secondary" })} href={"/login"}>Login</Link>
          </>
        )}
      </div>
    </nav>
  )
}
