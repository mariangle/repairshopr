import Link from "next/link";
import { LoginForm } from "./components/login-form";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";

const Login = () => {

  const NavLink = ({ href, children } : { href: string, children: React.ReactNode}) => {
    return (
      <Link href={href} target="_blank" className={cn(
        buttonVariants({ variant: "ghost" }), "px-2 text-xs",
        )}>
        {children}
      </Link>
    )
  };

  return (
    <div className="grid lg:grid-cols-2 min-h-screen">
      <div className="w-full grid content-center mx-auto my-auto h-full relative">
        <div className="flex flex-col space-y-2 text-center p-2">
          <nav className="absolute left-4 top-4 md:left-8 md:top-8 flex items-center gap-2">
            <ModeToggle />
            <NavLink href="https://github.com/mariangle/ticketshopr"> GitHub</NavLink>
            <NavLink href="https://api-docs.repairshopr.com/"> API Docs</NavLink>
          </nav>
          <h1 className="text-2xl font-semibold tracking-tight">Sign In</h1>
          <p className="text-sm text-muted-foreground">
            Sign in with your RepairShopr subdomain and API key.
          </p>
          <LoginForm />
        </div>
      </div>
      <div className="relative lg:block hidden bg-muted">
        <div className="absolute right-4 bottom-4 md:right-8 md:bottom-8 p-4 grid gap-2 z-20 mt-auto text-right">
            <p className="text-xs">
              An efficient application for quick ticket retrieval, 
              helping you save valuable time.              
            </p>
            <h5 className="font-medium">ticketshopr</h5>
          </div>
      </div>
    </div>
  );
};

export default Login;
