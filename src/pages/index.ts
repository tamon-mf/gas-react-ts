import type { PageConfig } from "../types/pages";
import { MasterIntegrationPage } from "./MasterIntegrationPage";
import { TopPage } from "./TopPage";
import { TradePartnerReportsPage } from "./TradePartnerReportsPage";
import { TransitionMonthlyReportsPage } from "./TransitionMonthlyReportsPage";
import { TrialBalanceReportsPage } from "./TrialBalanceReportsPage";

export const pageRegistry: PageConfig[] = [
	{
		id: "top",
		title: "マネーフォワード クラウド会計Plus",
		component: TopPage,
	},
	{
		id: "master-integration",
		title: "マスタ連携",
		component: MasterIntegrationPage,
	},
	{
		id: "trial-balance-reports",
		title: "残高試算表",
		component: TrialBalanceReportsPage,
	},
	{
		id: "transition-monthly-reports",
		title: "推移表",
		component: TransitionMonthlyReportsPage,
	},
	{
		id: "trade-partner-reports",
		title: "取引先別推移表",
		component: TradePartnerReportsPage,
	},
];
