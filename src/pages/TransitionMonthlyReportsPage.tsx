import { Button } from "@moneyforward/mfui-components";
import { usePageManager } from "../hooks/usePageManager";

export function TransitionMonthlyReportsPage() {
	const { goBack, pageParams } = usePageManager();

	return (
		<div className="flex flex-col gap-4 p-4">
			<div className="flex items-center gap-2">
				<Button onClick={goBack} size="small">
					← Back
				</Button>
				<h1 className="text-2xl font-bold">Reports</h1>
			</div>
			<div className="flex flex-col gap-2">
				<p>Reports page content goes here.</p>
			</div>
		</div>
	);
}
