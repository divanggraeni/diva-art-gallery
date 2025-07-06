import { PageProps } from "@/types"

export default function Page({ title, description, className, children }: PageProps) {
	return (
		<div className={`py-16 px-4 w-full max-w-5xl flex flex-col gap-16 mx-auto lg:py-20 ${className}`}>
			<div className="flex flex-col items-start gap-6 w-full md:flex-row md:justify-between">
				<h2 className="text-4xl font-semibold">{title}</h2>

				{typeof description === "string" ? <p className="text-xl text-gray-500 tracking-wide leading-relaxed text-pretty md:w-1/2 md:text-2xl" dangerouslySetInnerHTML={{ __html: description }}></p> : <p className="text-xl text-gray-500 tracking-wide leading-relaxed text-pretty md:w-1/2 md:text-2xl">{description}</p>}
			</div>

			{children}
		</div>
	)
}
