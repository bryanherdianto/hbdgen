import { SignedIn, SignedOut, useAuth } from "@clerk/clerk-react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
	birthdayCardService,
	valentineCardService,
	setApiToken,
	BirthdayCard,
	ValentineCard,
} from "../services/api";

function Pages() {
	const [birthdays, setBirthdays] = useState<BirthdayCard[]>([]);
	const [valentines, setValentines] = useState<ValentineCard[]>([]);
	const [loading, setLoading] = useState(true);
	const { getToken, isLoaded, isSignedIn } = useAuth();

	const fetchData = async () => {
		if (!isLoaded || !isSignedIn) return;

		try {
			const token = await getToken();
			if (!token) return;
			setApiToken(token);

			const [birthdayData, valentineData] = await Promise.all([
				birthdayCardService.getAll(),
				valentineCardService.getAll(),
			]);

			setBirthdays(Array.isArray(birthdayData) ? birthdayData : []);
			setValentines(Array.isArray(valentineData) ? valentineData : []);
		} catch (error) {
			console.error("Error fetching pages:", error);
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		fetchData();
	}, [getToken, isLoaded, isSignedIn]);

	// Auto-refresh if any card is still "Generating" (previewImage is empty)
	useEffect(() => {
		const hasIncomplete = [...birthdays, ...valentines].some(
			(card) => !card.previewImage,
		);

		if (hasIncomplete && !loading && birthdays.length + valentines.length > 0) {
			const timer = setTimeout(() => fetchData(), 5000);
			return () => clearTimeout(timer);
		}
	}, [birthdays, valentines, loading]);

	if (!isLoaded) {
		return <div className="min-h-screen bg-transparent" />;
	}

	return (
		<>
			<SignedIn>
				<section className="mb-12">
					<div className="flex justify-between items-center mb-2">
						<h2 className="text-3xl font-bold tracking-tight text-stone-900">
							Birthday
						</h2>
					</div>

					{loading ? (
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
							{[1, 2, 3].map((i) => (
								<div
									key={i}
									className="h-48 bg-stone-100 animate-pulse rounded-2xl"
								/>
							))}
						</div>
					) : birthdays.length > 0 ? (
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
							{birthdays.map((card) => (
								<Link
									key={card._id}
									to={`/birthday/${card.slug}`}
									className="group bg-white border border-stone-200 rounded-3xl overflow-hidden hover:border-blue-400 transition-all duration-300 shadow-sm hover:shadow-xl"
								>
									<div className="aspect-video w-full overflow-hidden bg-stone-100 relative">
										{card.previewImage ? (
											<img
												src={card.previewImage}
												alt="Preview"
												className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
											/>
										) : (
											<div className="w-full h-full flex items-center justify-center">
												<span className="text-xs font-medium bg-white/80 backdrop-blur px-3 py-1 rounded-full text-stone-600 border border-stone-200 shadow-sm animate-pulse">
													Generating Preview...
												</span>
											</div>
										)}
									</div>
									<div className="p-6">
										<div className="flex justify-between items-start mb-4">
											<span className="text-2xl">🎂</span>
											<span className="text-xs text-stone-400">
												{card.createdAt
													? new Date(card.createdAt).toLocaleDateString()
													: ""}
											</span>
										</div>
										<h3 className="text-xl font-bold text-stone-900 mb-1">
											For {card.firstname} {card.lastname}
										</h3>
										<p className="text-sm text-stone-500 line-clamp-2">
											{card.cards?.[0]?.message || "No message provided."}
										</p>
									</div>
								</Link>
							))}
						</div>
					) : (
						<div className="text-center py-12 bg-stone-50 rounded-2xl border-2 border-stone-200">
							<p className="text-stone-500 mb-4">
								No birthday cards created yet
							</p>
						</div>
					)}
				</section>

				<section className="mb-12">
					<div className="flex justify-between items-center mb-2">
						<h2 className="text-3xl font-bold tracking-tight text-stone-900">
							Valentine
						</h2>
					</div>

					{loading ? (
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
							{[1].map((i) => (
								<div
									key={i}
									className="h-48 bg-stone-100 animate-pulse rounded-2xl"
								/>
							))}
						</div>
					) : valentines.length > 0 ? (
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
							{valentines.map((card) => (
								<Link
									key={card._id}
									to={`/valentine/${card.slug}`}
									className="group bg-white border border-stone-200 rounded-3xl overflow-hidden hover:border-blue-400 transition-all duration-300 shadow-sm hover:shadow-xl"
								>
									<div className="aspect-video w-full overflow-hidden bg-stone-100 relative">
										{card.previewImage ? (
											<img
												src={card.previewImage}
												alt="Preview"
												className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
											/>
										) : (
											<div className="w-full h-full flex items-center justify-center">
												<span className="text-xs font-medium bg-white/80 backdrop-blur px-3 py-1 rounded-full text-stone-600 border border-stone-200 shadow-sm animate-pulse">
													Generating Preview...
												</span>
											</div>
										)}
									</div>
									<div className="p-6">
										<div className="flex justify-between items-start mb-4">
											<span className="text-2xl">💖</span>
											<span className="text-xs text-stone-400">
												{card.createdAt
													? new Date(card.createdAt).toLocaleDateString()
													: ""}
											</span>
										</div>
										<h3 className="text-xl font-bold text-stone-900 mb-1">
											For {card.nickname}
										</h3>
										<p className="text-sm text-stone-500 line-clamp-2">
											{card.cards?.[0]?.message || "No message provided."}
										</p>
									</div>
								</Link>
							))}
						</div>
					) : (
						<div className="text-center py-12 bg-stone-50 rounded-2xl border-2 border-stone-200">
							<p className="text-stone-500">No valentine cards created yet</p>
						</div>
					)}
				</section>
			</SignedIn>
			<SignedOut>
				<section className="relative max-w-7xl mx-auto w-full py-20 text-center overflow-hidden rounded-3xl">
					<img
						src="/blue-rect.svg"
						alt="Background"
						className="absolute inset-0 w-full h-full object-cover -z-10"
					/>
					<h2 className="text-3xl font-bold mb-8 tracking-tight">
						Sign in to manage your content
					</h2>
					<Link to="/sign-up" className="inline-block">
						<button className="button-container rounded-full font-bold">
							<span className="circle1"></span>
							<span className="circle2"></span>
							<span className="circle3"></span>
							<span className="circle4"></span>
							<span className="circle5"></span>
							<span className="text">Join Us</span>
						</button>
					</Link>
				</section>
			</SignedOut>
		</>
	);
}

export default Pages;
