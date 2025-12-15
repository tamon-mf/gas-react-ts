import { Button } from "@moneyforward/mfui-components";
import { usePageManager } from "../hooks/usePageManager";

export function HomePage() {
	const { navigate } = usePageManager();

	return (
		<div className="flex flex-col gap-4 p-4">
			<h1 className="text-2xl font-bold">Home</h1>
			<div className="flex flex-col gap-2">
				<Button
					priority="primary"
					size="large"
					onClick={() => navigate("trial-balance-reports")}
				>
					残高試算表
				</Button>
				<Button
					priority="primary"
					size="large"
					onClick={() => navigate("transition-monthly-reports")}
				>
					推移表
				</Button>

				<Button
					priority="primary"
					size="large"
					onClick={() => navigate("trade-partner-reports")}
				>
					取引先別推移表
				</Button>
			</div>
		</div>
	);
}
