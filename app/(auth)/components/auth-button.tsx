import { Button as StyledButton, ButtonProps } from "@/components/ui/button";
import { Loader2Icon } from "lucide-react";

export const AuthButton: React.FC<ButtonProps> = ({
  onClick,
  variant,
  disabled,
  children
}) => {
  return (
    <StyledButton
      className="w-full"
      onClick={onClick}
      variant={variant}
      >
        {disabled && <Loader2Icon className="mr-2 h-4 w-4 animate-spin" />}
        {children}
    </StyledButton>
  )
};