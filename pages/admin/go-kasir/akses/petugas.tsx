import DialogModal from "@/components/Modal/Modal";
import ConfirmationModalTable from "@/components/Modal/ModalConfirmation";
import { Box } from "@mantine/core";
import { Button, Input } from "@material-tailwind/react";
import { sortBy } from "lodash";
import { DataTable, DataTableSortStatus } from "mantine-datatable";
import { useEffect, useMemo, useState } from "react";
import { BiSolidEditAlt } from "react-icons/bi";
import { FaCheck, FaXmark } from "react-icons/fa6";
import { PAGE_SIZES, dataPetugas, optionsGedung, optionsKota } from "../data";
import Selects from "@/components/Dropdown/Selects";
import Search from "@/components/Dropdown/Search";

export default function Petugas() {
    const [pageSize, setPageSize] = useState(PAGE_SIZES[0]);
    const [page, setPage] = useState(1);
    const [sortStatus, setSortStatus] = useState<DataTableSortStatus>({
        columnAccessor: "namaKaryawan",
        direction: "asc",
    });
    const sortedRecords = useMemo(() => sortBy(dataPetugas, "namaKaryawan"), []);
    const [records, setRecords] = useState(sortedRecords.slice(0, pageSize));
    const [selectedRowData, setSelectedRowData] = useState<any>(null);
    const [openTambahDataModal, setOpenTambahDataModal] = useState(false);
    const [openEditModal, setOpenEditModal] = useState(false);
    const [openConfirmationModal, setOpenConfirmationModal] = useState(false);
    const [confirmationTitle, setConfirmationTitle] = useState("");
    const [confirmationAction, setConfirmationAction] = useState<"activate" | "deactivate" | "">("");

    useEffect(() => {
        setPage(1);
    }, [pageSize]);

    useEffect(() => {
        const from = (page - 1) * pageSize;
        const to = from + pageSize;
        setRecords(dataPetugas.slice(from, to));
    }, [page, pageSize]);

    useEffect(() => {
        const data = sortBy(dataPetugas, sortStatus.columnAccessor);
        setRecords(sortStatus.direction === "desc" ? data.reverse() : data);
    }, [sortStatus]);

    const handleTambahData = () => {
        setOpenTambahDataModal(!openTambahDataModal);
    };

    const handleEdit = (rowData: any) => {
        setSelectedRowData(rowData);
        setOpenEditModal(!openEditModal);
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
            <div className="flex items-end gap-x-4">
                <Selects label="Kota" data={optionsKota} withAsterisk />
                <Selects label="Gedung" data={optionsGedung} withAsterisk />
                <Search label="Cari Nama Karyawan" onSearch={() => {}} />
                <Button className="max-w-max bg-primary" onClick={handleTambahData}>
                    Lihat Data
                </Button>
            </div>
            <Box sx={{ height: records.length > 10 ? 750 : "auto" }} className="z-50 mt-4">
                <DataTable
                    className="z-0"
                    withColumnBorders
                    highlightOnHover
                    shadow="sm"
                    records={records}
                    columns={[
                        {
                            accessor: "number",
                            title: "No",
                            render: (number) => dataPetugas.indexOf(number) + 1,
                        },
                        { accessor: "nik", sortable: true },
                        { accessor: "namaKaryawan", sortable: true },
                        { accessor: "gedung", sortable: true },
                        { accessor: "jabatan", sortable: true },
                        { accessor: "username", sortable: true },
                        { accessor: "roles", sortable: true },
                        {
                            accessor: "status",
                            sortable: true,
                            cellsStyle: ({ status }) =>
                                status === "Aktif"
                                    ? {
                                          color: "green",
                                      }
                                    : { color: "red" },
                        },
                    ]}
                    rowContextMenu={{
                        items: (record) => [
                            {
                                key: "edit",
                                icon: <BiSolidEditAlt className="h-3 w-3" />,
                                title: `Ubah  ${record.namaKaryawan}`,
                                onClick: () => handleEdit(selectedRowData),
                            },
                            {
                                key: "active",
                                icon: <FaCheck className="h-3 w-3" />,
                                title: `Aktifkan ${record.namaKaryawan}`,
                                onClick: () => handleActivateConfirmation(record.namaKaryawan),
                            },
                            {
                                key: "nonactive",
                                icon: <FaXmark className="h-3 w-3" />,
                                title: `Non Aktifkan ${record.namaKaryawan}`,
                                onClick: () => handleDeactivateConfirmation(record.namaKaryawan),
                            },
                        ],
                    }}
                    totalRecords={dataPetugas.length}
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
            <DialogModal size="xs" open={openTambahDataModal} handler={() => setOpenTambahDataModal(!openTambahDataModal)} heightFit={true} title={"Form Tambah Petugas"}>
                <form action="#">
                    <Input label="Nama Petugas" className="bg-white text-black dark:bg-black dark:text-white-light" />

                    <div className="mt-6 flex items-center justify-end gap-4">
                        <Button color="green" size="sm" className="capitalize" onClick={() => setOpenTambahDataModal(false)}>
                            Simpan
                        </Button>

                        <Button color="red" size="sm" className="capitalize" onClick={() => setOpenTambahDataModal(false)}>
                            Tutup
                        </Button>
                    </div>
                </form>
            </DialogModal>
            <DialogModal size="xs" open={openEditModal} handler={() => setOpenEditModal(!openEditModal)} heightFit={true} title={"Form Edit Petugas"}>
                <form action="#">
                    <Input label="Nama Petugas" className="bg-white text-black dark:bg-black dark:text-white-light" />

                    <div className="mt-6 flex items-center justify-end gap-4">
                        <Button color="green" size="sm" className="capitalize" onClick={() => setOpenEditModal(false)}>
                            Simpan
                        </Button>

                        <Button color="red" size="sm" className="capitalize" onClick={() => setOpenEditModal(false)}>
                            Tutup
                        </Button>
                    </div>
                </form>
            </DialogModal>
            <ConfirmationModalTable open={openConfirmationModal} setOpen={setOpenConfirmationModal} header={confirmationTitle} onConfirm={handleConfirmation} />
        </>
    );
}
