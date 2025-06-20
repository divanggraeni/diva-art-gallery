import { cn } from "@/lib/utils"
import { ButtonProps } from "@/types"

export default function Button({ children, className, variant = "default", size = "md", isLoading, disabled, ...props }: ButtonProps) {
	const variants = {
		default: "border-2 border-gray-900 bg-gray-900 text-white hover:bg-gray-800 hover:border-gray-800",
		outline: "border-2 border-gray-800 text-primary hover:bg-gray-800 hover:text-white",
		ghost: "hover:bg-gray-200 text-gray-700",
		danger: "bg-red-600 text-white hover:bg-red-700",
	}

	const sizes = {
		sm: "px-3 py-1.5 text-sm",
		md: "px-4 py-2 text-base",
		lg: "px-6 py-3 text-lg",
	}

	return (
		<button className={cn("btn", variants[variant], sizes[size], isLoading && "opacity-70 cursor-wait", className)} disabled={disabled || isLoading} {...props}>
			{isLoading ? (
				<div className="flex items-center gap-2">
					<div className="w-4 h-4 border-2 border-primary border-t-transparent rounded-full animate-spin" />
					<span>Loading...</span>
				</div>
			) : (
				children
			)}
		</button>
	)
}
