import DialogModal from "@/components/Modal/Modal";
import Table from "@/components/Table/Table";
import { Box } from "@mantine/core";
import { Button, Input, Select } from "@material-tailwind/react";
import { sortBy } from "lodash";
import { DataTable } from "mantine-datatable";
import React, { useEffect, useMemo, useState } from "react";
import { BiSolidEditAlt } from "react-icons/bi";
import { FaCheck, FaUniversalAccess, FaXmark } from "react-icons/fa6";

interface DatasProps {
    nik: string;
    namaPetugas: string;
    role: string;
    status: string;
    akunDefault: string;
}

const initialData: DatasProps = {
    nik: "0502500021",
    namaPetugas: "Asep Saepudin",
    role: "Petugas",
    akunDefault: "admin",
    status: "Aktif",
};

const datas: DatasProps[] = Array.from({ length: 40 }, (_, index) => ({
    ...initialData,
    namaRole: `Role ${index + 1}`,
}));

const datasModal = [
    { group: "group", namaMenu: "menu mana", status: "Aktif", akses: "bisa" },
    { group: "group", namaMenu: "menu mana", status: "Aktif", akses: "bisa" },
    { group: "group", namaMenu: "menu mana", status: "Aktif", akses: "bisa" },
    { group: "group", namaMenu: "menu mana", status: "Aktif", akses: "bisa" },
    { group: "group", namaMenu: "menu mana", status: "Aktif", akses: "bisa" },
];

const PAGE_SIZES = [10, 20, 30];

const Index = () => {
    const [pageSize, setPageSize] = useState(PAGE_SIZES[0]);
    const [page, setPage] = useState(1);
    const [sortStatus, setSortStatus] = useState<any>({
        columnAccessor: "namaRole",
        direction: "asc",
    });
    const sortedRecords = useMemo(() => sortBy(datas, "namaRole"), []);
    const [records, setRecords] = useState(sortedRecords.slice(0, pageSize));
    const [selectedRowData, setSelectedRowData] = useState<any>(null);
    const [openModal, setOpenModal] = useState(false);
    const [openAccessModal, setOpenAccessModal] = useState(false);
    const [openConfirmationModal, setOpenConfirmationModal] = useState(false);
    const [confirmationTitle, setConfirmationTitle] = useState("");
    const [confirmationAction, setConfirmationAction] = useState<"activate" | "deactivate" | "">("");

    useEffect(() => {
        setPage(1);
    }, [pageSize]);

    useEffect(() => {
        const from = (page - 1) * pageSize;
        const to = from + pageSize;
        setRecords(datas.slice(from, to));
    }, [page, pageSize]);

    useEffect(() => {
        const data = sortBy(datas, sortStatus.columnAccessor);
        setRecords(sortStatus.direction === "desc" ? data.reverse() : data);
    }, [sortStatus]);

    const handleAccess = (rowData: any) => {
        setSelectedRowData(rowData);
        setOpenAccessModal(true);
    };

    const handleEdit = (rowData: any) => {
        setSelectedRowData(rowData);
        setOpenModal(true);
    };

    const handleActivateConfirmation = (rowData: any) => {
        setSelectedRowData(rowData);
        setConfirmationTitle(`Apakah Anda yakin untuk mengaktifkan ${rowData}?`);
        setConfirmationAction("activate");
        setOpenConfirmationModal(true);
    };

    const handleDeactivateConfirmation = (rowData: any) => {
        setSelectedRowData(rowData);
        setConfirmationTitle(`Apakah Anda yakin untuk menonaktifkan ${rowData}?`);
        setConfirmationAction("deactivate");
        setOpenConfirmationModal(true);
    };

    const handleConfirmation = () => {
        if (confirmationAction === "activate") {
            handleActivateConfirmation(selectedRowData);
        } else if (confirmationAction === "deactivate") {
            handleDeactivateConfirmation(selectedRowData);
        }
        // Clear confirmation data
        setConfirmationTitle("");
        setConfirmationAction("");
        setSelectedRowData(null);
    };

    return (
        <>
            <div className="mb-4 w-fit">
                <Button color="green" onClick={() => setOpenModal(!openModal)}>
                    Tambah
                </Button>
            </div>

            <Box sx={{ height: records.length > 10 ? 750 : "auto", width: 900 }} className="mt-4">
                <DataTable
                    withColumnBorders
                    highlightOnHover
                    shadow="sm"
                    records={records}
                    columns={[
                        { accessor: "nik", width: 100, sortable: true },
                        { accessor: "namaPetugas", width: 100, sortable: true },
                        { accessor: "role", width: 100, sortable: true },
                        { accessor: "status", width: 100, sortable: true },
                        { accessor: "akunDefault", width: 100, sortable: true },
                    ]}
                    rowContextMenu={{
                        items: (record) => [
                            {
                                key: "akses",
                                icon: <FaUniversalAccess className="h-3 w-3" />,
                                onClick: () => handleAccess(selectedRowData),
                            },
                            {
                                key: "edit",
                                icon: <BiSolidEditAlt className="h-3 w-3" />,
                                title: `Ubah  ${record.namaPetugas}`,
                                onClick: () => handleEdit(selectedRowData),
                            },
                            {
                                key: "active",
                                icon: <FaCheck className="h-3 w-3" />,
                                title: `Aktifkan ${record.status}`,
                                onClick: () => handleActivateConfirmation(record.namaPetugas),
                            },
                            {
                                key: "nonactive",
                                icon: <FaXmark className="h-3 w-3" />,
                                title: `Non Aktifkan ${record.status}`,
                                onClick: () => handleDeactivateConfirmation(record.status),
                            },
                        ],
                    }}
                    totalRecords={datas.length}
                    sortStatus={sortStatus}
                    onSortStatusChange={setSortStatus}
                    recordsPerPage={pageSize}
                    page={page}
                    paginationSize="sm"
                    onPageChange={(p) => setPage(p)}
                    recordsPerPageOptions={PAGE_SIZES}
                    onRecordsPerPageChange={setPageSize}
                    paginationText={({ from, to, totalRecords }) => `Records ${from} - ${to} of ${totalRecords}`}
                />
            </Box>

            <DialogModal size="xs" open={openModal} handler={() => setOpenModal(!openModal)} heightFit={false} title={"Form Edit Role"}>
                <form action="#">
                    <div className="flex flex-col gap-4">
                        <div>
                            <Input label="NIK" className="dark:text-white" />
                        </div>

                        <div>
                            <Input label="Nama Petugas" className="dark:text-white" />
                        </div>

                        <div>
                            <Select label="Role" className="dark:text-white">
                                <option value="admin">Admin</option>
                                <option value="petugas">Petugas</option>
                            </Select>
                        </div>
                    </div>

                    <div className="mt-6 flex items-center justify-end gap-4">
                        <Button color="green" size="sm" className="capitalize" onClick={() => setOpenModal(false)}>
                            Simpan
                        </Button>

                        <Button color="red" size="sm" className="capitalize" onClick={() => setOpenModal(false)}>
                            Tutup
                        </Button>
                    </div>
                </form>
            </DialogModal>
        </>
    );
};

export default Index;
