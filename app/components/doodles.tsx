/* ─────────────────────────────────────────────
   The Worn Journal — Shared UI Primitives
   Ambient blobs, soft card/divider components.
   ───────────────────────────────────────────── */

import { useRef, useEffect, useState } from "react";

/* ── Scroll-Reveal Wrapper ── */
export function FadeIn({
	children,
	className = "",
	delay = 0,
}: {
	children: React.ReactNode;
	className?: string;
	delay?: number;
}) {
	const ref = useRef<HTMLDivElement>(null);
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const el = ref.current;
		if (!el) return;

		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setIsVisible(true);
					observer.disconnect();
				}
			},
			{ threshold: 0.1, rootMargin: "0px 0px -40px 0px" },
		);

		observer.observe(el);
		return () => observer.disconnect();
	}, []);

	return (
		<div
			ref={ref}
			className={`gs-reveal ${isVisible ? "gs-visible" : ""} ${className}`}
			style={delay ? { transitionDelay: `${delay}ms` } : undefined}
		>
			{children}
		</div>
	);
}

/* ── Ambient Background Blob ── */
export function AmbientBlob({
	color = "gold",
	size = "40vw",
	position = "top-0 right-0",
	className = "",
}: {
	color?: "gold" | "mist";
	size?: string;
	position?: string;
	className?: string;
}) {
	const bgColor = color === "gold" ? "bg-gs-gold" : "bg-gs-mist";
	return (
		<div
			className={`absolute ${position} rounded-full ${bgColor} opacity-40 dark:opacity-[0.007] blur-[100px] dark:blur-[200px] pointer-events-none animate-[gentle-pulse_8s_ease-in-out_infinite_alternate] ${className}`}
			style={{ width: size, height: size }}
		/>
	);
}

/* ── Pill Divider ── */
export function PillDivider({ className = "" }: { className?: string }) {
	return (
		<div className={`w-24 h-1 bg-gs-mist mx-auto rounded-full ${className}`} />
	);
}

/* ── Gentle Card ── */
export function GentleCard({
	children,
	className = "",
	variant = "white",
}: {
	children: React.ReactNode;
	className?: string;
	variant?: "white" | "cream";
}) {
	const bgClass = variant === "white"
		? "bg-gs-surface border border-gs-mist/20"
		: "bg-gs-cream/50 border border-gs-mist/15";

	return (
		<div
			className={`rounded-[1.5rem] ${bgClass} shadow-[0_1px_3px_oklch(0%_0_0/0.04),0_8px_24px_oklch(0%_0_0/0.06)] p-8 md:p-10 gs-card-hover ${className}`}
		>
			{children}
		</div>
	);
}

/* ── Section card (larger border-radius) ── */
export function SectionCard({
	children,
	className = "",
}: {
	children: React.ReactNode;
	className?: string;
}) {
	return (
		<div
			className={`rounded-[2rem] bg-gs-surface border border-gs-mist/20 shadow-[0_1px_3px_oklch(0%_0_0/0.04),0_8px_24px_oklch(0%_0_0/0.06)] p-10 md:p-16 ${className}`}
		>
			{children}
		</div>
	);
}
