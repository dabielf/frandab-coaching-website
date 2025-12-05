import { Outlet } from "react-router";
import { Footer } from "~/components/Footer";
import { Navigation } from "~/components/Navigation";

export default function Layout() {
	return (
		<div className="min-h-screen flex flex-col">
			<Navigation />
			<main className="flex-1">
				<Outlet />
			</main>
			<Footer />
		</div>
	);
}
