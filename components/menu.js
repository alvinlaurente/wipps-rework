export const menuItems = [
  {
    id: 1,
    label: "menuitems.menu.text",
    isTitle: true,
    roles: ['super-admin','administrator','safety-inspector','safety-man','supervisor'],
    rus: ['ru2','ru3','ru4','ru5','ru6','loc'],
  },
  {
    id: 2,
    label: "Site Safety Inspection",
    icon: "uil-dashboard",
    roles: ['super-admin','administrator','safety-inspector','safety-man','supervisor'],
    rus: ['ru2','ru3','ru4','ru5','ru6','loc'],
    subItems: [
      {
        id: 100,
        label: "Beranda",
        icon: "uil-home-alt",
        link: "/",
        parentId: 2,
        roles: ['super-admin','administrator','safety-inspector','safety-man'],
        rus: ['ru2','ru3','ru4','ru5','ru6','loc'],
      },
      {
        id: 100,
        label: "Dashboard",
        icon: "uil-dashboard",
        link: "/dashboard/dashboard",
        parentId: 2,
        roles: ['super-admin','administrator','safety-inspector','supervisor'],
        rus: ['ru2','ru3','ru4','ru5','ru6','loc'],
      },
      {
        id: 100,
        label: "Complete Dashboard",
        icon: "uil-dashboard",
        link: "/dashboard/complete-dashboard",
        parentId: 2,
        roles: ['super-admin','administrator','safety-inspector','supervisor'],
        rus: ['ru3','ru6','loc'],
      },
      {
        id: 100,
        label: "Riwayat",
        icon: "uil-clipboard-alt",
        link: "/dashboard/riwayat",
        parentId: 2,
        roles: ['super-admin','administrator','safety-inspector','safety-man','supervisor'],
        rus: ['ru2','ru3','ru4','ru5','ru6','loc'],
      },
      {
        id: 100,
        label: "Export",
        icon: "uil-file-alt",
        link: "/dashboard/export",
        parentId: 2,
        roles: ['super-admin','administrator','safety-inspector','supervisor'],
        rus: ['ru2','ru3','ru4','ru5','ru6','loc'],
      },
      {
        id: 100,
        label: "Overall Percentage",
        icon: "uil-bullseye",
        link: "/dashboard/overall-percentage",
        parentId: 2,
        roles: ['super-admin','administrator','safety-inspector','supervisor'],
        rus: ['ru2','ru3','ru4','ru5','ru6','loc'],
      },
    ]
  },
  {
    id: 200,
    label: "Tools and Equipment Inspection",
    icon: "uil-copy-alt",
    roles: ['super-admin','administrator','safety-inspector','safety-man','supervisor'],
    rus: ['ru2','ru3','ru6','loc'],
    subItems: [
      {
        id: 201,
        label: "Input Tools and Equipment",
        icon: "uil-bag",
        link: "/barang/input-barang",
        parentId: 200,
        roles: ['super-admin','administrator','safety-inspector','safety-man','supervisor'],
        rus: ['ru2','ru3','ru6','loc'],
      },
      {
        id: 201,
        label: "Tools and Equipment List",
        icon: "uil-list-ul",
        link: "/table/daftar-barang",
        parentId: 200,
        roles: ['super-admin','administrator','safety-inspector','safety-man','supervisor'],
        rus: ['ru2','ru3','ru6','loc'],
      }
    ]
  },
  {
    id: 300,
    label: "Referensi",
    icon: "uil-constructor",
    roles: ['super-admin','administrator'],
    rus: ['ru2','ru3','ru4','ru5','ru6','loc'],
    subItems: [
      {
        id: 301,
        label: "Judul",
        icon: "uil-grip-horizontal-line",
        link: "/table/judul",
        parentId: 300,
        roles: ['super-admin','administrator'],
        rus: ['ru2','ru3','ru4','ru5','ru6','loc'],
      },
      {
        id: 301,
        label: "Barang",
        icon: "uil-bag",
        link: "/table/barang",
        parentId: 300,
        roles: ['super-admin','administrator'],
        rus: ['ru2','ru3','ru4','ru5','ru6','loc'],
      },
      {
        id: 301,
        label: "Area",
        icon: "uil-map-marker-shield",
        link: "/table/area",
        parentId: 300,
        roles: ['super-admin','administrator'],
        rus: ['ru2','ru3','ru4','ru5','ru6','loc'],
      },
      {
        id: 301,
        label: "Pekerjaan",
        icon: "uil-user-check",
        link: "/table/pekerjaan",
        parentId: 300,
        roles: ['super-admin','administrator'],
        rus: ['ru2','ru3','ru4','ru5','ru6','loc'],
      },
      {
        id: 301,
        label: "Pelaksana Pekerjaan",
        icon: "uil-building",
        link: "/table/pelaksana-pekerjaan",
        parentId: 300,
        roles: ['super-admin','administrator'],
        rus: ['ru2','ru3','ru4','ru5','ru6','loc'],
      },
      {
        id: 301,
        label: "Pengguna",
        icon: "uil-users-alt",
        link: "/table/pengguna",
        parentId: 300,
        roles: ['super-admin','administrator'],
        rus: ['ru2','ru3','ru4','ru5','ru6','loc'],
      }
    ]
  }
];
