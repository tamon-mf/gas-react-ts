import { Button, MultipleSelectBox } from "@moneyforward/mfui-components";
import Add from "@moneyforward/mfui-icons-react/Add";
import { useDevices } from "../hooks/useDevices";

export function TrialBalanceReportsPage() {
	const { data, isLoading } = useDevices();

	return (
		<div className="flex flex-col gap-2 p-4">
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
