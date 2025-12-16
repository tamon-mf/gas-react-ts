import { Button, Typography } from "@moneyforward/mfui-components";
import { DrilldownForward } from "@moneyforward/mfui-icons-react";
import { usePageManager } from "../hooks/usePageManager";

export function TopPage() {
	const { navigate } = usePageManager();

	return (
		<div className="p-0">
			<div className="bg-white rounded-[8px] overflow-hidden">
				<section className="border-b border-[#ccc] p-4 flex flex-col gap-3">
					<Typography variant="sectionHeading1">連携状況</Typography>

					<div className="flex flex-col gap-0.5">
						<Typography variant="label">連携中の事業者</Typography>
						<Typography variant="body">株式会社マネーフォワード</Typography>
					</div>

					<Button
						size="medium"
						onClick={() => navigate("trial-balance-reports")}
						className="w-fit"
					>
						再連携
					</Button>
				</section>

				<section className="border-b border-[#ccc] p-4 flex flex-col gap-3">
					<Typography variant="sectionHeading1">マスタ連携</Typography>
					<Button
						priority="primary"
						size="medium"
						onClick={() => navigate("master-integration")}
						className="w-fit"
						rightIcon={<DrilldownForward />}
					>
						マスタ
					</Button>
				</section>

				<section className="p-4 flex flex-col gap-3">
					<Typography variant="sectionHeading1">帳票連携</Typography>
					<div className="flex flex-col gap-2 items-start">
						<Button
							priority="primary"
							size="medium"
							onClick={() => navigate("trial-balance-reports")}
							className="w-fit"
							rightIcon={<DrilldownForward />}
						>
							残高試算表
						</Button>
						<Button
							priority="primary"
							size="medium"
							className="w-fit"
							onClick={() => navigate("transition-monthly-reports")}
							rightIcon={<DrilldownForward />}
						>
							推移表
						</Button>
						<Button
							priority="primary"
							size="medium"
							className="w-fit"
							onClick={() => navigate("trade-partner-reports")}
							rightIcon={<DrilldownForward />}
						>
							取引先別推移表
						</Button>
					</div>
				</section>
			</div>
		</div>
	);
}
