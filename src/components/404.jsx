import { Link } from "react-router-dom";

export default function Notfound() {
	return (
		<>
			<h1 style={{marginTop: '5rem'}}>The Requested content is unavailable</h1>
			<Link to='/'>Back to Home</Link>
		</>
	);
}
