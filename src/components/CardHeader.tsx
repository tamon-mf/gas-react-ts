import { Typography } from "@moneyforward/mfui-components";

interface CardHeaderProps {
	title: string;
	description: string;
}

export function CardHeader({ title, description }: CardHeaderProps) {
	return (
		<div className="border-b border-[#ccc] p-4 flex flex-col gap-1">
			<div className="flex items-center justify-between gap-2 w-full">
				<Typography variant="pageHeading2">{title}</Typography>
			</div>
			<Typography variant="body">{description}</Typography>
		</div>
	);
}
