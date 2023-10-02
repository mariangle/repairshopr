"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { buttonVariants } from "@/components/ui/button"
import { Globe } from "lucide-react"
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
    <nav className="flex justify-between p-4 sticky top-0 backdrop-blur-lg">
      <div>
      { apiStore.isLogged && (
        <div className="flex items-center gap-1">
          <Globe className="w-4 h-4"/>
          <Link href={"/tickets"}>{apiStore.credentials.subdomain}</Link>
        </div>
      )}
      </div>
      <div className="flex gap-2 items-center">
        <ModeToggle />
        { apiStore.isLogged ? (
          <>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="border-none px-2 hover:bg-none">
                  {apiStore.user.name}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuLabel>{apiStore.user.email}{' '}{ apiStore.user.isAdmin && <Badge variant="outline">Admin</Badge>}</DropdownMenuLabel>
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