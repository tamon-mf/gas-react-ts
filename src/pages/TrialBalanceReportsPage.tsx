import { Button, MultipleSelectBox } from "@moneyforward/mfui-components";
import Add from "@moneyforward/mfui-icons-react/Add";
import { useDevices } from "../hooks/useDevices";
import { usePageManager } from "../hooks/usePageManager";

export function TrialBalanceReportsPage() {
	const { data, isLoading } = useDevices();
	const { navigate, goBack } = usePageManager();

	return (
		<div className="flex flex-col gap-2 p-4">
			<div className="flex items-center gap-2 mb-4">
				<Button onClick={goBack} size="small">
					← Back
				</Button>
				<h1 className="text-2xl font-bold">残高試算表</h1>
			</div>
			<Button
				priority="primary"
				size="large"
				onClick={() => alert("Button clicked")}
				leftIcon={<Add />}
			>
				残高試算表
			</Button>
			<MultipleSelectBox
				placeholder="Select devices"
				options={data?.map((device) => ({
					label: device.name,
					value: device.id,
				}))}
				loading={isLoading}
			/>
		</div>
	);
}
