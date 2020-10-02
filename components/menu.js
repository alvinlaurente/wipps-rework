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

        link: "/"
    },
    {
        id: 42,
        label: "menuitems.uielements.text",
        icon: "uil-flask",
        subItems: [
            {
                id: 43,
                label: "menuitems.uielements.list.alerts",
                link: "/ui/alerts",
                parentId: 42
            },
            {
                id: 44,
                label: "menuitems.uielements.list.buttons",
                link: "/ui/buttons",
                parentId: 42
            },
            {
                id: 45,
                label: "menuitems.uielements.list.cards",
                link: "/ui/cards",
                parentId: 42
            },
            {
                id: 46,
                label: "menuitems.uielements.list.carousel",
                link: "/ui/carousel",
                parentId: 42
            },
            {
                id: 47,
                label: "menuitems.uielements.list.dropdowns",
                link: "/ui/dropdown",
                parentId: 42
            },
            {
                id: 48,
                label: "menuitems.uielements.list.grid",
                link: "/ui/grid",
                parentId: 42
            },
            {
                id: 49,
                label: "menuitems.uielements.list.images",
                link: "/ui/images",
                parentId: 42
            },
            {
                id: 50,
                label: "menuitems.uielements.list.lightbox",
                link: "/ui/lightbox",
                parentId: 42
            },
            {
                id: 51,
                label: "menuitems.uielements.list.modals",
                link: "/ui/modals",
                parentId: 42
            },
            {
                id: 52,
                label: "menuitems.uielements.list.rangeslider",
                link: "/ui/rangeslider",
                parentId: 42
            },
            {
                id: 53,
                label: "menuitems.uielements.list.progressbar",
                link: "/ui/progressbar",
                parentId: 42
            },
            {
                id: 54,
                label: "menuitems.uielements.list.sweetalert",
                link: "/ui/sweet-alert",
                parentId: 42
            },
            {
                id: 55,
                label: "menuitems.uielements.list.tabs",
                link: "/ui/tabs-accordions",
                parentId: 42
            },
            {
                id: 56,
                label: "menuitems.uielements.list.typography",
                link: "/ui/typography",
                parentId: 42
            },
            {
                id: 57,
                label: "menuitems.uielements.list.video",
                link: "/ui/video",
                parentId: 42
            },
            {
                id: 58,
                label: "menuitems.uielements.list.general",
                link: "/ui/general",
                parentId: 42
            },
            {
                id: 59,
                label: "menuitems.uielements.list.colors",
                link: "/ui/colors",
                parentId: 42
            },
            {
                id: 60,
                label: "menuitems.uielements.list.rating",
                link: "/ui/rating",
                parentId: 42
            },
            {
                id: 61,
                label: "menuitems.uielements.list.notifications",
                link: "/ui/notifications",
                parentId: 42
            }
        ]
    },
    {
        id: 62,
        label: "menuitems.forms.text",
        icon: "uil-shutter-alt",
        badge: {
            variant: "danger",
            text: 'menuitems.forms.badge'
        },
        subItems: [
            {
                id: 63,
                label: "menuitems.forms.list.elements",
                link: "/form/elements",
                parentId: 62
            },
            {
                id: 64,
                label: "menuitems.forms.list.validation",
                link: "/form/validation",
                parentId: 62
            },
            {
                id: 65,
                label: "menuitems.forms.list.advanced",
                link: "/form/advanced",
                parentId: 62
            },
            {
                id: 66,
                label: "menuitems.forms.list.editor",
                link: "/form/editor",
                parentId: 62
            },
            {
                id: 67,
                label: "menuitems.forms.list.fileupload",
                link: "/form/upload",
                parentId: 62
            },
            {
                id: 68,
                label: "menuitems.forms.list.repeater",
                link: "/form/repeater",
                parentId: 62
            },
            {
                id: 69,
                label: "menuitems.forms.list.wizard",
                link: "/form/wizard",
                parentId: 62
            },
            {
                id: 70,
                label: "menuitems.forms.list.mask",
                link: "/form/mask",
                parentId: 62
            }
        ]
    },
    {
        id: 71,
        icon: "uil-list-ul",
        label: "menuitems.tables.text",
        subItems: [
            {
                id: 72,
                label: "menuitems.tables.list.basic",
                link: "/tables/basic",
                parentId: 71
            },
            {
                id: 73,
                label: "menuitems.tables.list.advanced",
                link: "/tables/advanced",
                parentId: 71
            }
        ]
    },
    {
        id: 74,
        icon: "uil-chart",
        label: "menuitems.charts.text",
        subItems: [
            {
                id: 75,
                label: "menuitems.charts.list.apex",
                link: "/charts/apex",
                parentId: 74
            },
            {
                id: 76,
                label: "menuitems.charts.list.chartjs",
                link: "/charts/chartjs",
                parentId: 74
            },
            {
                id: 77,
                label: "menuitems.charts.list.chartist",
                link: "/charts/chartist",
                parentId: 74
            },
            {
                id: 78,
                label: "menuitems.charts.list.echart",
                link: "/charts/echart",
                parentId: 74
            }
        ]
    },
    {
        id: 79,
        label: "menuitems.icons.text",
        icon: "uil-streering",
        subItems: [
            {
                id: 80,
                label: "menuitems.icons.list.unicons",
                link: "/icons/unicons",
                parentId: 79
            },
            {
                id: 81,
                label: "menuitems.icons.list.boxicons",
                link: "/icons/boxicons",
                parentId: 79
            },
            {
                id: 82,
                label: "menuitems.icons.list.materialdesign",
                link: "/icons/materialdesign",
                parentId: 79
            },
            {
                id: 83,
                label: "menuitems.icons.list.dripicons",
                link: "/icons/dripicons",
                parentId: 79
            },
            {
                id: 84,
                label: "menuitems.icons.list.fontawesome",
                link: "/icons/fontawesome",
                parentId: 79
            }
        ]
    },
    {
        id: 85,
        label: "menuitems.maps.text",
        icon: "uil-location-point",
        subItems: [
            {
                id: 86,
                label: "menuitems.maps.list.googlemap",
                link: "/maps/google",
                parentId: 85
            },
            {
                id: 87,
                label: "menuitems.maps.list.leafletmap",
                link: "/maps/leaflet",
                parentId: 85
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
                link: "javascript: void(0);",
                parentId: 88
            },
            {
                id: 89,
                label: "Logout",
                link: "",
                parentId: 88
            }
        ]
    }
];

