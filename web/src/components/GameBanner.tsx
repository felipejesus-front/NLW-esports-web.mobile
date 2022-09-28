interface GameBannerProps {
	bannerUrl: string;
	title: string;
	adsCount: number;
}

function GameBanner(Props: GameBannerProps) {
	return (
		<a
			href={Props.bannerUrl}
			className="relative rounded-lg overflow-hidden "
		>
			<img src={Props.bannerUrl} alt={Props.title} />
			<div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 right-0 left-0">
				<strong className="font-bold text-white block">
					{Props.title}
				</strong>
				<span className="text-zinc-300 font-sm block mt-1">
					{Props.adsCount} anúncio(s)
				</span>
			</div>
		</a>
	);
}

export default GameBanner;
