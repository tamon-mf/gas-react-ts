import { useQuery } from "@tanstack/react-query";
import type { Device } from "../../server/modules/mockModule";
import GoogleScriptUtils from "../utils/googleScriptUtils";

const getDevices = async () => {
	const response = await GoogleScriptUtils.runAsync<Device[]>("serverFunction");
	return response;
};

export const useDevices = () => {
	return useQuery({
		queryKey: ["devices"],
		queryFn: () => getDevices(),
	});
};
