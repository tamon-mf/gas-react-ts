import {
	Button,
	SelectBox,
	TextBox,
	Typography,
} from "@moneyforward/mfui-components";
import { useState } from "react";
import { CardHeader } from "../components/CardHeader";

const masterTypeOptions = [
	{ label: "勘定科目", value: "accounts" },
	{ label: "勘定科目(補助科目あり)", value: "sub_accounts" },
	{ label: "税区分", value: "taxes" },
	{ label: "部門", value: "departments" },
	{ label: "取引先", value: "counterparties" },
	{ label: "プロジェクト", value: "projects" },
];

export function MasterIntegrationPage() {
	const [masterType, setMasterType] = useState("accounts");
	const [startCell, setStartCell] = useState("A1");

	return (
		<div className="p-0">
			<div className="bg-white rounded-[8px] overflow-hidden">
				<CardHeader
					title="マスタ"
					description="会計Plusに登録済みのマスタデータを取得"
				/>

				<section className="p-4 flex flex-col gap-3">
					<div className="flex flex-col gap-1">
						<Typography variant="label">
							マスタ種別<span className="text-[#D7383C]">*</span>
						</Typography>
						<SelectBox
							options={masterTypeOptions}
							value={masterType}
							onChange={(v) => setMasterType(v ?? "")}
							size="medium"
						/>
					</div>

					<div className="flex flex-col gap-1">
						<Typography variant="label">
							開始セル<span className="text-[#D7383C]">*</span>
						</Typography>
						<TextBox
							value={startCell}
							onChange={(e) => setStartCell(e.target.value)}
							textBoxSize="medium"
						/>
					</div>

					<div className="pt-4 flex flex-col gap-1">
						<Button
							priority="primary"
							size="large"
							className="w-full"
							onClick={() =>
								alert(
									`データ取得を実行: masterType=${masterType}, startCell=${startCell}`,
								)
							}
						>
							データ取得を実行
						</Button>
						<Typography
							variant="helpMessage"
							className="text-[rgba(0,0,0,0.6)]"
						>
							※ 現在開いているファイル・シートにデータを取り込みます
						</Typography>
					</div>
				</section>
			</div>
		</div>
	);
}
