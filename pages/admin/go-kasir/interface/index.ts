import { ComponentPropsWithoutRef } from "react";

export interface SelectProps {
    label: string;
    options: any;
    withAsterisk?: boolean;
}
export interface SelectOptionsProps extends ComponentPropsWithoutRef<"div"> {
    label: string;
    value: string | number;
    notification?: number;
}
export interface DatasProps {
    namaRole: string;
    status: string;
}
export interface DataPetugasProps {
    nik: any;
    namaKaryawan: string;
    gedung: string;
    jabatan: string;
    username?: string | number;
    roles?: string;
    status?: string;
}
export interface DataSimulasiProps {
    noInvoice: number;
    tglDatang: any;
    namaLengkap: string;
    nohp: string;
    tahunAjaran: string;
    jenjang: string;
    tingkatKelas: string;
    namaBundling: string;
    hargaJual: number;
    totalBayar: number;
    nominalBayar: number;
    expired: any;
    tglDigunakan?: any;
    status: string;
}
