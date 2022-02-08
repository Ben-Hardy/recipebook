export default function Footer() {
	const year = new Date().getFullYear();
	return (
		<div className="text-center py-4 text-gray-500">
			<p>&#169;{year} Ben Hardy</p>
		</div>
	)
}