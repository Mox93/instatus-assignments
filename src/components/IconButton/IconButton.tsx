import { cn } from "@/utils";
import { HTMLAttributes, ReactElement } from "react";

interface IconButtonProps
  extends Omit<HTMLAttributes<HTMLButtonElement>, "children"> {
  icon: ReactElement;
}

export default function IconButton({
  icon,
  className,
  ...props
}: IconButtonProps) {
  return (
    <button {...props} className={cn("IconButton", className)}>
      {icon}
    </button>
  );
}
