import type { ComponentType } from "react";

export type PageId =
	| "home"
	| "trial-balance-reports"
	| "transition-monthly-reports"
	| "trade-partner-reports";

export interface PageConfig {
	id: PageId;
	title: string;
	component: ComponentType;
	icon?: ComponentType;
	requiresAuth?: boolean;
	showInNav?: boolean;
}
