export const menuItems = [
  {
    id: 1,
    label: "menuitems.menu.text",
    isTitle: true
  },
  {
    id: 2,
    label: "Dashboard",
    icon: "uil-dashboard",
    subItems: [
      {
        id: 100,
        label: "Beranda",
        link: "/",
        parentId: 2
      },
      {
        id: 100,
        label: "Dashboard",
        link: "/dashboard/dashboard",
        parentId: 2
      },
      {
        id: 100,
        label: "Complete Dashboard",
        link: "/dashboard/complete-dashboard",
        parentId: 2
      },
      {
        id: 100,
        label: "Riwayat",
        link: "/dashboard/riwayat",
        parentId: 2
      },
      {
        id: 100,
        label: "Export",
        link: "/dashboard/export",
        parentId: 2
      },
      {
        id: 100,
        label: "Overall Percentage",
        link: "/dashboard/overall-percentage",
        parentId: 2
      },
    ]
  },
  {
    id: 200,
    label: "Barang",
    icon: "uil-copy-alt",
    subItems: [
      {
        id: 201,
        label: "Input Barang",
        link: "/barang/input-barang",
        parentId: 200
      },
      {
        id: 201,
        label: "Daftar Barang",
        link: "/table/daftar-barang",
        parentId: 200
      }
    ]
  },
  {
    id: 300,
    label: "Referensi",
    icon: "uil-constructor",
    subItems: [
      {
        id: 301,
        label: "Judul",
        link: "/table/judul",
        parentId: 300
      },
      {
        id: 301,
        label: "Barang",
        link: "/table/barang",
        parentId: 300
      },
      {
        id: 301,
        label: "Area",
        link: "/table/area",
        parentId: 300
      },
      {
        id: 301,
        label: "Pekerjaan",
        link: "/table/pekerjaan",
        parentId: 300
      },
      {
        id: 301,
        label: "Pelaksana Pekerjaan",
        link: "/table/pelaksana-pekerjaan",
        parentId: 300
      },
      {
        id: 301,
        label: "Pengguna",
        link: "/table/pengguna",
        parentId: 300
      }
    ]
  }
];
