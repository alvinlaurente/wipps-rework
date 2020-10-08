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
        icon: "uil-home-alt",
        link: "/",
        parentId: 2
      },
      {
        id: 100,
        label: "Dashboard",
        icon: "uil-dashboard",
        link: "/dashboard/dashboard",
        parentId: 2
      },
      {
        id: 100,
        label: "Complete Dashboard",
        icon: "uil-dashboard",
        link: "/dashboard/complete-dashboard",
        parentId: 2
      },
      {
        id: 100,
        label: "Riwayat",
        icon: "uil-clipboard-alt",
        link: "/dashboard/riwayat",
        parentId: 2
      },
      {
        id: 100,
        label: "Export",
        icon: "uil-file-alt",
        link: "/dashboard/export",
        parentId: 2
      },
      {
        id: 100,
        label: "Overall Percentage",
        icon: "uil-bullseye",
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
        icon: "uil-bag",
        link: "/barang/input-barang",
        parentId: 200
      },
      {
        id: 201,
        label: "Daftar Barang",
        icon: "uil-list-ul",
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
        icon: "uil-grip-horizontal-line",
        link: "/table/judul",
        parentId: 300
      },
      {
        id: 301,
        label: "Barang",
        icon: "uil-bag",
        link: "/table/barang",
        parentId: 300
      },
      {
        id: 301,
        label: "Area",
        icon: "uil-map-marker-shield",
        link: "/table/area",
        parentId: 300
      },
      {
        id: 301,
        label: "Pekerjaan",
        icon: "uil-user-check",
        link: "/table/pekerjaan",
        parentId: 300
      },
      {
        id: 301,
        label: "Pelaksana Pekerjaan",
        icon: "uil-building",
        link: "/table/pelaksana-pekerjaan",
        parentId: 300
      },
      {
        id: 301,
        label: "Pengguna",
        icon: "uil-users-alt",
        link: "/table/pengguna",
        parentId: 300
      }
    ]
  }
];
