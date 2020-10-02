export const menuItems = [
  {
    id: 1,
    label: "menuitems.menu.text",
    isTitle: true
  },
  {
    id: 2,
    label: "menuitems.dashboard.text",
    icon: "uil-home-alt",
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
        link: "/",
        parentId: 2
      },
      {
        id: 100,
        label: "Complete Dashboard",
        link: "/",
        parentId: 2
      },
      {
        id: 100,
        label: "Riwayat",
        link: "/",
        parentId: 2
      },
      {
        id: 100,
        label: "Export",
        link: "/",
        parentId: 2
      },
      {
        id: 100,
        label: "Overall Percentage",
        link: "/",
        parentId: 2
      },
    ]
  },
  {
    id: 88,
    label: "Pengguna",
    icon: "uil-share-alt",
    subItems: [
      {
        id: 89,
        label: "Profil",
        link: "/account/profil",
        parentId: 88
      },
      {
        id: 89,
        label: "Logout",
        link: "",
        parentId: 88
      }
    ]
  },
  {
    id: 200,
    label: "Barang",
    icon: "uil-share-alt",
    subItems: [
      {
        id: 201,
        label: "Input Barang",
        link: "/super-admin/barang/input-barang",
        parentId: 200
      },
      {
        id: 201,
        label: "Daftar Barang",
        link: "/super-admin/barang/daftar-barang",
        parentId: 200
      }
    ]
  },
  {
    id: 300,
    label: "Referensi",
    icon: "uil-share-alt",
    subItems: [
      {
        id: 301,
        label: "Judul",
        link: "/super-admin/referensi/judul",
        parentId: 300
      },
      {
        id: 301,
        label: "Barang",
        link: "/super-admin/referensi/barang",
        parentId: 300
      },
      {
        id: 301,
        label: "Area",
        link: "/super-admin/referensi/area",
        parentId: 300
      },
      {
        id: 301,
        label: "Pekerjaan",
        link: "/super-admin/referensi/pekerjaan",
        parentId: 300
      },
      {
        id: 301,
        label: "Pelaksanaan Pekerjaan",
        link: "/super-admin/referensi/pelaksanaan-pekerjaan",
        parentId: 300
      },
      {
        id: 301,
        label: "Pengguna",
        link: "/super-admin/referensi/pengguna",
        parentId: 300
      }
    ]
  }
];
