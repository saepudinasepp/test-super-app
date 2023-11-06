import { DataPetugasProps, DataSimulasiProps, DatasProps, SelectOptionsProps } from "../interface";

export const PAGE_SIZES = [10, 20, 30];

export const optionsProvinsi: SelectOptionsProps[] = [
    { value: "jawa barat", label: "Jawa Barat" },
    { value: "jawa timur", label: "Jawa Timur" },
    { value: "jawa tengah", label: "Jawa Tengah" },
];
export const optionsKota: SelectOptionsProps[] = [
    { value: "bandung", label: "Bandung", notification: 5 },
    { value: "surabaya", label: "Surabaya" },
    { value: "jakarta", label: "Jakarta" },
];
export const optionsKecamatan: SelectOptionsProps[] = [
    { value: "linggawastu", label: "Linggawastu", notification: 5 },
    { value: "punawarman", label: "Punawarman" },
    { value: "dago", label: "Dago" },
];
export const optionsKelurahan: SelectOptionsProps[] = [
    { value: "linggawastu", label: "Linggawastu", notification: 5 },
    { value: "punawarman", label: "Punawarman" },
    { value: "dago", label: "Dago" },
];
export const optionsGedung: SelectOptionsProps[] = [
    { value: "pw-36b", label: "PW-36B" },
    { value: "pw-31", label: "PW-31" },
    { value: "linggawastu", label: "Linggawastu" },
];
export const optionsTahunAjaran: SelectOptionsProps[] = [
    { value: "2021/2022", label: "2021/2022" },
    { value: "2022/2023", label: "2022/2023" },
    { value: "2023/2024", label: "2023/2024" },
];
export const optionsTingkat: SelectOptionsProps[] = [
    { value: "sd", label: "SD" },
    { value: "smp", label: "SMP" },
    { value: "sma", label: "SMA" },
];
export const optionsAsalSekolah: SelectOptionsProps[] = [
    { value: "SMAN 1 BANDUNG", label: "SMAN 1 BANDUNG" },
    { value: "SMAN 2 BANDUNG", label: "SMAN 2 BANDUNG" },
    { value: "SMAN 3 BANDUNG", label: "SMAN 3 BANDUNG" },
];
export const optionsAgama: SelectOptionsProps[] = [
    { value: "ISLAM", label: "ISLAM" },
    { value: "KRISTEN", label: "KRISTEN" },
    { value: "HINDU", label: "HINDU" },
];
export const datas: DatasProps[] = Array.from({ length: 10 }, () => ({
    namaRole: "Super Admin",
    status: "Aktif",
}));
export const dataPetugas: DataPetugasProps[] = Array.from({ length: 20 }, () => ({
    nik: 1080182081020,
    namaKaryawan: "Aceng Muslim",
    gedung: "PW-36B",
    jabatan: "Staf Sekretariat Pengajar",
    username: 199128230,
    roles: "Customer Service",
    status: "Tidak Aktif",
}));
export const dataSimulasi: DataSimulasiProps[] = Array.from({ length: 40 }, () => ({
    noInvoice: 1820292740291892,
    tglDatang: "2023-11-11",
    namaLengkap: "Bambanx Junior",
    nohp: "087830380318",
    tahunAjaran: "2023/2024",
    jenjang: "SMA",
    tingkatKelas: "12 SMA IPA",
    namaBundling: "TWT 12 SMA IPA K13R 4P 23/24",
    hargaJual: 12_000_000,
    totalBayar: 12_000_000,
    nominalBayar: 3_000_000,
    expired: "2023-12-31",
    tglDigunakan: "2023-11-20",
    status: "Sudah Dibayar",
}));
export const dataPilihBiodata: any = [{ noreg: 909182018308, nama: "Hadiyasa", tglLahir: "2004-09-01", nohp: "08721717390", alamat: "Bandung", status: "Aktif" }];
export const dataHistory: any = [{ tahunAjaran: "2023/2024", noreg: 909182018308, lokasi: "Bandung, PW-36B", kelas: "10-SMA-IPA" }];
