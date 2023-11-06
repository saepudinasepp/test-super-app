import { AiOutlineShoppingCart } from "react-icons/ai";
import { BiBook, BiVideo } from "react-icons/bi";
import { BsBox2, BsJournalBookmarkFill, BsKey, BsListUl, BsPersonLock, BsStack } from "react-icons/bs";
import { FaBoxArchive, FaRectangleList } from "react-icons/fa6";

export const menuSmba = [
    {
        kategori: "SMBA",
        menu: [
            {
                icon: BsPersonLock,
                name: "Akses SMBA",
                submenu: [
                    {
                        name: "Role",
                        path: "/admin/smba/roles",
                    },
                    {
                        name: "Petugas",
                        path: "/admin/smba/roles/petugas",
                    },
                ],
            },
            {
                icon: BiBook,
                name: "Master SMBA",
                submenu: [
                    {
                        name: "Mata Pelajaran",
                        path: "/admin/smba/master/mata-pelajaran",
                    },
                    {
                        name: "Kurikulum",
                        path: "/admin/smba/master/kurikulum",
                    },
                    {
                        name: "Bab",
                        path: "/admin/smba/master/bab",
                    },
                    {
                        name: "Silabus",
                        path: "/admin/smba/master/silabus",
                    },
                    {
                        name: "Mata Ajar",
                        path: "/admin/smba/master/mata-ajar",
                    },
                ],
            },
            {
                icon: BsListUl,
                name: "Soal",
                submenu: [
                    {
                        name: "Sumber Soal",
                        path: "#",
                    },
                    {
                        name: "Wacana",
                        path: "#",
                    },
                    {
                        name: "Upload Video",
                        path: "#",
                    },
                    {
                        name: "Mengisi Soal",
                        path: "/admin/smba/soal/mengisi-soal",
                    },
                    {
                        name: "Verifikasi Soal",
                        path: "#",
                    },
                    {
                        name: "Target Pengerjaan Soal",
                        path: "#",
                    },
                ],
            },
            {
                icon: FaBoxArchive,
                name: "Paket dan Bundel Soal",
                submenu: [
                    {
                        name: "Membuat Bundel",
                        path: "#",
                    },
                    {
                        name: "Membuat Paket",
                        path: "#",
                    },
                ],
            },
            {
                icon: BsJournalBookmarkFill,
                name: "Buku",
                submenu: [
                    {
                        name: "Mengisi Teori",
                        path: "#",
                    },
                    {
                        name: "Membuat Buku",
                        path: "#",
                    },
                    {
                        name: "Buku Teori Teaser",
                        path: "#",
                    },
                ],
            },
            {
                icon: FaRectangleList,
                name: "BAH",
                submenu: [
                    {
                        name: "Membuat BAH",
                        path: "#",
                    },
                    {
                        name: "Menautkan BAH-Kelas",
                        path: "#",
                    },
                    {
                        name: "Monitoring BAH-Kelas",
                        path: "#",
                    },
                ],
            },
            {
                icon: BsBox2,
                name: "TOB",
                submenu: [
                    {
                        name: "Membuat TOB",
                        path: "#",
                    },
                    {
                        name: "Paket Soal Teaser",
                        path: "#",
                    },
                ],
            },
            {
                icon: BiVideo,
                name: "Video Teaser",
                submenu: [
                    {
                        name: "Membuat Video Teaser",
                        path: "#",
                    },
                ],
            },
            {
                icon: BiVideo,
                name: "Video Ekstra",
                submenu: [
                    {
                        name: "Membuat Video Ekstra",
                        path: "#",
                    },
                ],
            },
            {
                icon: AiOutlineShoppingCart,
                name: "Produk Kelompok",
                submenu: [
                    {
                        name: "Kelola Produk Kelompok",
                        path: "#",
                    },
                ],
            },
            {
                icon: BsStack,
                name: "JPMP",
                submenu: [
                    {
                        name: "JPMP",
                        path: "#",
                    },
                    {
                        name: "JPMP Kelas",
                        path: "#",
                    },
                    {
                        name: "Validasi JPMP Kelas",
                        path: "#",
                    },
                ],
            },
            {
                icon: BsKey,
                name: "Kunci Jawaban",
                submenu: [
                    {
                        name: "Download Kunci Jawaban",
                        path: "#",
                    },
                ],
            },
        ],
    },
];
