import type { PageConfig } from "../types/pages";
import { HomePage } from "./HomePage";
import { TradePartnerReportsPage } from "./TradePartnerReportsPage";
import { TransitionMonthlyReportsPage } from "./TransitionMonthlyReportsPage";
import { TrialBalanceReportsPage } from "./TrialBalanceReportsPage";

export const pageRegistry: PageConfig[] = [
	{
		id: "home",
		title: "Home",
		component: HomePage,
		showInNav: true,
	},
	{
		id: "trial-balance-reports",
		title: "残高試算表",
		component: TrialBalanceReportsPage,
		showInNav: true,
	},
	{
		id: "transition-monthly-reports",
		title: "推移表",
		component: TransitionMonthlyReportsPage,
		showInNav: true,
	},
	{
		id: "trade-partner-reports",
		title: "取引先別推移表",
		component: TradePartnerReportsPage,
		showInNav: true,
	},
];
