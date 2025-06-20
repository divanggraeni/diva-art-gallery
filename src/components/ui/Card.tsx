import { cn } from "@/lib/utils";
import { CardProps } from "@/types";

export default function Card({ variant = "default", children, className }: CardProps) {
    const variants = {
		default: "bg-white",
		outline: "border-2 border-gray-300",
	}

    return (
        <div className={cn("flex flex-col gap-4 rounded-2xl p-6", variants[variant], className)}>
            {children}
        </div>
    )
}