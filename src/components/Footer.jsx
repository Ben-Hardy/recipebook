export default function Footer() {
	const year = new Date().getFullYear();
	return (
		<div className="text-center py-4 text-gray-500">
			<p>Created in {year} by Ben Hardy</p>
		</div>
	)
}