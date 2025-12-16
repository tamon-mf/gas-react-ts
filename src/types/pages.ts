import type { ComponentType } from "react";

export type PageId =
	| "top"
	| "master-integration"
	| "trial-balance-reports"
	| "transition-monthly-reports"
	| "trade-partner-reports";

export interface PageConfig {
	id: PageId;
	title: string;
	component: ComponentType;
}
