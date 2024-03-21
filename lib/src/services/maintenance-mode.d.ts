export declare const getParamValue: (route: string) => Promise<string>;
export declare const getMobileMaintenanceStatus: () => Promise<{
    status: number;
    message: string;
    outageState: string;
}>;
export declare const getWebMaintenanceStatus: () => Promise<{
    status: number;
    message: string;
    outageState: string;
}>;
//# sourceMappingURL=maintenance-mode.d.ts.map