/* ─────────────────────────────────────────────
   Shared SVG Decorative Components
   "Sunshine & Doodles" design system
   ───────────────────────────────────────────── */

export function SparkleCluster({ className = "" }: { className?: string }) {
	return (
		<svg viewBox="0 0 60 60" fill="none" className={className}>
			<path
				d="M30 20 L33 27 L40 30 L33 33 L30 40 L27 33 L20 30 L27 27 Z"
				style={{ fill: "var(--sd-gold)" }}
				opacity={0.5}
			/>
			<circle cx="15" cy="15" r="2" style={{ fill: "var(--sd-gold)" }} opacity={0.3} />
			<circle cx="45" cy="12" r="1.5" style={{ fill: "var(--sd-gold)" }} opacity={0.4} />
			<circle cx="12" cy="45" r="1.5" style={{ fill: "var(--sd-gold)" }} opacity={0.35} />
			<circle cx="48" cy="42" r="2" style={{ fill: "var(--sd-gold)" }} opacity={0.3} />
		</svg>
	);
}

export function SunburstSVG({ className = "" }: { className?: string }) {
	const lines = Array.from({ length: 12 }, (_, i) => {
		const angle = (i * 30 * Math.PI) / 180;
		const len = i % 2 === 0 ? 32 : 24;
		return {
			x1: 40 + 14 * Math.cos(angle),
			y1: 40 + 14 * Math.sin(angle),
			x2: 40 + len * Math.cos(angle),
			y2: 40 + len * Math.sin(angle),
		};
	});
	return (
		<svg viewBox="0 0 80 80" fill="none" className={className}>
			<circle
				cx="40"
				cy="40"
				r="12"
				style={{ fill: "var(--sd-gold)", fillOpacity: 0.12 }}
				stroke="var(--sd-gold)"
				strokeWidth="2"
				opacity={0.4}
			/>
			{lines.map((l, i) => (
				<line
					key={i}
					x1={l.x1}
					y1={l.y1}
					x2={l.x2}
					y2={l.y2}
					stroke="var(--sd-gold)"
					strokeWidth="2"
					opacity={0.35}
				/>
			))}
		</svg>
	);
}

export function ScribblyUnderline({
	colorVar = "--sd-gold",
	className = "",
}: { colorVar?: string; className?: string }) {
	return (
		<svg
			viewBox="0 0 200 12"
			className={`h-3 mx-auto ${className}`}
			fill="none"
		>
			<path
				d="M5 8 C25 3, 45 11, 65 7 C85 3, 105 11, 125 7 C145 3, 165 11, 195 6"
				stroke={`var(${colorVar})`}
				strokeWidth="3"
				strokeLinecap="round"
				opacity={0.5}
			/>
		</svg>
	);
}

export function DoodleArrow({
	flip = false,
	className = "",
}: { flip?: boolean; className?: string }) {
	return (
		<svg
			viewBox="0 0 60 40"
			fill="none"
			className={className}
			style={flip ? { transform: "scaleX(-1)" } : undefined}
		>
			<path
				d="M5 30 C15 10, 35 5, 50 15"
				stroke="var(--sd-emerald)"
				strokeWidth="2.5"
				strokeLinecap="round"
				opacity={0.4}
			/>
			<path
				d="M45 8 L50 15 L42 17"
				stroke="var(--sd-emerald)"
				strokeWidth="2.5"
				strokeLinecap="round"
				strokeLinejoin="round"
				opacity={0.4}
			/>
		</svg>
	);
}

export function BigDoodleLeaf({
	flip = false,
	className = "",
}: { flip?: boolean; className?: string }) {
	return (
		<svg
			viewBox="0 0 80 110"
			fill="none"
			className={className}
			style={flip ? { transform: "scaleX(-1)" } : undefined}
		>
			<path
				d="M40 10 C60 20, 70 50, 60 80 C55 95, 45 100, 40 105 C35 100, 25 95, 20 80 C10 50, 20 20, 40 10Z"
				style={{ fill: "var(--sd-sage)", fillOpacity: 0.09 }}
				stroke="var(--sd-emerald)"
				strokeWidth="2.5"
			/>
			<path d="M40 15 L40 95" stroke="var(--sd-emerald)" strokeWidth="1.5" opacity={0.4} />
			<path d="M40 40 L55 30" stroke="var(--sd-emerald)" strokeWidth="1.5" opacity={0.3} />
			<path d="M40 60 L25 50" stroke="var(--sd-emerald)" strokeWidth="1.5" opacity={0.3} />
		</svg>
	);
}

export function BigDoodleStar({ className = "" }: { className?: string }) {
	return (
		<svg viewBox="0 0 70 70" fill="none" className={className}>
			<path
				d="M35 5 L42 25 L63 25 L46 38 L52 58 L35 46 L18 58 L24 38 L7 25 L28 25 Z"
				style={{ fill: "var(--sd-gold)", fillOpacity: 0.09 }}
				stroke="var(--sd-gold)"
				strokeWidth="2.5"
				opacity={0.5}
			/>
		</svg>
	);
}

export function WavyDivider({
	bgClass = "bg-sd-linen",
	showDot = true,
}: { bgClass?: string; showDot?: boolean }) {
	return (
		<div className={`flex justify-center py-4 ${bgClass}`}>
			<svg viewBox="0 0 400 20" className="w-80 h-5" fill="none">
				<path
					d="M0 10 C50 5 100 15 150 10 C200 5 250 15 300 10 C350 5 380 12 400 10"
					stroke="var(--sd-sage)"
					strokeWidth="2"
					strokeLinecap="round"
					opacity={0.3}
				/>
				{showDot && (
					<circle cx="200" cy="10" r="4" style={{ fill: "var(--sd-gold)" }} opacity={0.4} />
				)}
			</svg>
		</div>
	);
}

export function DoodleCard({
	children,
	className = "",
}: {
	children: React.ReactNode;
	className?: string;
}) {
	return (
		<div
			className={`relative doodle-hover flex flex-col ${className}`}
		>
			{/* Dashed border overlay */}
			<div className="absolute inset-[-3px] rounded-2xl pointer-events-none border-2 border-dashed border-sd-sage/35" />
			{/* Card body */}
			<div className="p-8 md:p-10 rounded-2xl relative bg-sd-cream flex-1">
				{children}
			</div>
		</div>
	);
}
