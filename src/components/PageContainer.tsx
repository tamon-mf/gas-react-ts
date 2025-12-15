import { usePageManager } from "../hooks/usePageManager";
import { pageRegistry } from "../pages";

export function PageContainer() {
	const { currentPage } = usePageManager();
	const pageConfig = pageRegistry.find((p) => p.id === currentPage);

	if (!pageConfig) {
		return (
			<div className="flex items-center justify-center min-h-screen">
				<div className="text-center">
					<h1 className="text-2xl font-bold mb-2">Page Not Found</h1>
					<p className="text-gray-500">
						The page "{currentPage}" could not be found.
					</p>
				</div>
			</div>
		);
	}

	const PageComponent = pageConfig.component;

	return <PageComponent />;
}


