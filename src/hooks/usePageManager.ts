import { usePageManagerContext } from "../contexts/PageManagerContext";

/**
 * Hook to access page manager functionality
 * @returns Page manager context with navigation methods and current page state
 */
export function usePageManager() {
	return usePageManagerContext();
}


