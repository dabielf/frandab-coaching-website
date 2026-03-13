import {
	Tooltip,
	TooltipContent,
	TooltipTrigger,
} from "~/components/ui/Tooltip";
import { cn } from "~/lib/utils";

function ContactEmailLink({
	className,
	children,
}: {
	className?: string;
	children?: React.ReactNode;
}) {
	return (
		<Tooltip>
			<TooltipTrigger>
				<a
					href="mailto:hello@frandab.com?subject=I have a question&body=Hi Francois,%0D%0A%0D%0AI have a question !%0D%0A%0D%0AThanks!"
					className={cn(
						"text-sm leading-relaxed",
						className,
					)}
				>
					{children || "hello@frandab.com"}
				</a>
			</TooltipTrigger>
			<TooltipContent className="text-primary-foreground">
				<p>This email will be already pre-filled to make your life simpler</p>
			</TooltipContent>
		</Tooltip>
	);
}

function SessionEmailLink({
	className,
	children,
}: {
	className?: string;
	children?: React.ReactNode;
}) {
	return (
		<Tooltip>
			<TooltipTrigger>
				<a
					href="mailto:hello@frandab.com?subject=Vibe Check Call Request&body=Hi Francois,%0D%0A%0D%0AI'd like to schedule a Vibe Check call. Here are a few times that might work for me:%0D%0A%0D%0A[Please list 2-3 time options with your timezone]%0D%0A%0D%0AThanks!"
					className={cn(
						"text-base leading-relaxed",
						className,
					)}
				>
					{children || "hello@frandab.com"}
				</a>
			</TooltipTrigger>
			<TooltipContent className="text-primary-foreground">
				<p>This email will be already pre-filled to make your life simpler</p>
			</TooltipContent>
		</Tooltip>
	);
}

export { ContactEmailLink, SessionEmailLink };
