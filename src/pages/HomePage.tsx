import { Button } from "@moneyforward/mfui-components";
import { usePageManager } from "../hooks/usePageManager";

export function HomePage() {
	const { navigate } = usePageManager();

	return (
		<div className="flex flex-col gap-4 p-4">
			帳票連携
			<div className="flex flex-col gap-2">
				<Button
					priority="primary"
					size="medium"
					onClick={() => navigate("trial-balance-reports")}
					className="w-fit"
				>
					残高試算表
				</Button>
				<Button
					priority="primary"
					size="medium"
					className="w-fit"
					onClick={() => navigate("transition-monthly-reports")}
				>
					推移表
				</Button>

				<Button
					priority="primary"
					size="medium"
					className="w-fit"
					onClick={() => navigate("trade-partner-reports")}
				>
					取引先別推移表
				</Button>
			</div>
		</div>
	);
}
