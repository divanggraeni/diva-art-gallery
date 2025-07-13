export default function Footer() {
    const year = new Date().getFullYear();

	return (
		<footer className="w-full mt-auto bg-gray-100">
			<div className="px-4 pb-6 max-w-5xl gap-6 mx-auto w-full flex flex-col justify-between h-full">
                <hr className="text-gray-300 border-1" />

                <p className="text-lg text-gray-500 tracking-wide">&copy; {year} Diva Nur Anggraeni</p>
            </div>
		</footer>
	)
}
