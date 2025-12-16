import { DropdownMenu, IconButton, Typography } from "@moneyforward/mfui-components";
import {
	DrilldownBackward,
	MoreVertical,
} from "@moneyforward/mfui-icons-react";
import React from "react";
import { usePageManager } from "../hooks/usePageManager";

interface PageHeaderProps {
	title: string;
}

export function PageHeader({ title }: PageHeaderProps) {
	const { history, goBack } = usePageManager();
	const canGoBack = history.length > 1;

	return (
		<header className="bg-[#2E72D8] w-full">
			<div className="flex justify-between items-center gap-2 px-4 py-5">
				<div className="flex items-center justify-start gap-2 min-w-0">
					{canGoBack ? (
						<IconButton onClick={goBack} color="transparent">
							<DrilldownBackward color="white" />
						</IconButton>
					) : (
						null
					)}

					<Typography variant="contentHeading" className="text-white truncate">
						{title}
					</Typography>
				</div>

				<DropdownMenu icon={<MoreVertical color="white" />} label="Menu">
					<React.Fragment key=".0">
						<DropdownMenu.Item href="https://example.com">
							Menu Item 1
						</DropdownMenu.Item>
						<DropdownMenu.Item href="https://example.com">
							Menu Item 2
						</DropdownMenu.Item>
						<DropdownMenu.Divider />
						<DropdownMenu.Item href="https://example.com" target="_blank">
							Menu Item 3
						</DropdownMenu.Item>
					</React.Fragment>
				</DropdownMenu>
			</div>
		</header>
	);
}
