import {
	createContext,
	type ReactNode,
	useCallback,
	useContext,
	useState,
} from "react";
import type { PageId } from "../types/pages";

interface PageManagerContextValue {
	currentPage: PageId;
	navigate: (pageId: PageId, params?: Record<string, unknown>) => void;
	goBack: () => void;
	history: PageId[];
	pageParams: Record<string, unknown>;
}

const PageManagerContext = createContext<PageManagerContextValue | undefined>(
	undefined,
);

interface PageManagerProviderProps {
	children: ReactNode;
	initialPage?: PageId;
}

export function PageManagerProvider({
	children,
	initialPage = "top",
}: PageManagerProviderProps) {
	const [currentPage, setCurrentPage] = useState<PageId>(initialPage);
	const [history, setHistory] = useState<PageId[]>([initialPage]);
	const [pageParams, setPageParams] = useState<Record<string, unknown>>({});

	const navigate = useCallback(
		(pageId: PageId, params?: Record<string, unknown>) => {
			setCurrentPage(pageId);
			setPageParams(params ?? {});
			setHistory((prev) => [...prev, pageId]);
		},
		[],
	);

	const goBack = useCallback(() => {
		setHistory((prev) => {
			if (prev.length <= 1) {
				return prev;
			}
			const newHistory = prev.slice(0, -1);
			const previousPage = newHistory[newHistory.length - 1];
			setCurrentPage(previousPage);
			setPageParams({});
			return newHistory;
		});
	}, []);

	const value: PageManagerContextValue = {
		currentPage,
		navigate,
		goBack,
		history,
		pageParams,
	};

	return (
		<PageManagerContext.Provider value={value}>
			{children}
		</PageManagerContext.Provider>
	);
}

export function usePageManagerContext() {
	const context = useContext(PageManagerContext);
	if (context === undefined) {
		throw new Error(
			"usePageManagerContext must be used within a PageManagerProvider",
		);
	}
	return context;
}
