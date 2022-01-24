export default function Footer() {
	const year = new Date().getFullYear();
	return (
		<div className="Footer">
			<p>&#169;{year} Ben Hardy</p>
		</div>
	)
}