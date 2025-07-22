export interface ProductType {
    id: string;
    name: string;
    price: number;
    colors: { name: string; code: string }[];
    category: string;
    available: boolean;
    limited: boolean;
    thumbnail: string;
    images: string[];
}

export const products: ProductType[] = [
    {
        id: "ALP2402",
        name: "Basas Love+ 24 - Low top",
        price: 650000,
        colors: [{ name: "Oyster White", code: "#000000" }],
        category: "Basas",
        available: true,
        limited: false,
        thumbnail: "../images/urbaslove24/1.webp",
        images: [
            "/assets/images/urbaslove24/1.webp",
            "/assets/images/urbaslove24/2.webp",
            "/assets/images/urbaslove24/3.webp",
            "/assets/images/urbaslove24/4.webp"
        ]
    },
    {
        id: "AV00206",
        name: "Vintas Vivu - Low top",
        price: 434000,
        colors: [{ name: "Plantation", code: "#001F3F" }],
        category: "Vintas",
        available: true,
        limited: false,
        thumbnail: "../images/vintasvivu/1.webp",
        images: [
            "/assets/images/vintasvivu/1.webp",
            "/assets/images/vintasvivu/2.webp",
            "/assets/images/vintasvivu/3.webp",
            "/assets/images/vintasvivu/4.webp"
        ]
    },
    {
        id: "T600001",
        name: "Track 6 OG - Low top",
        price: 990000,
        colors: [{ name: "70s White", code: "#001F3F" }],
        category: "Track 6",
        available: false,
        limited: false,
        thumbnail: "../images/track6og/1.webp",
        images: [
            "/assets/images/track6og/1.webp",
            "/assets/images/track6og/2.webp",
            "/assets/images/track6og/3.webp",
            "/assets/images/track6og/4.webp"
        ]
    },
    {
        id: "T600002",
        name: "Track 6 2.Blues - Low top",
        price: 1290000,
        colors: [{ name: "Bluewash", code: "#001F3F" }, {name: "Navy Blue", code: "#001F3F" }],
        category: "Track 6",
        available: true,
        limited: false,
        thumbnail: "../images/track62blues/1.webp",
        images: [
            "/assets/images/track62blues/1.webp",
            "/assets/images/track62blues/2.webp",
            "/assets/images/track62blues/3.webp",
            "/assets/images/track62blues/4.webp"
        ]
    },
    {
        id: "T600003",
        name: "Track 6 Triple White - Low top",
        price: 1290000,
        colors: [{ name: "Triple White", code: "#001F3F" }],
        category: "Track 6",
        available: true,
        limited: false,
        thumbnail: "../images/track6triplewhite/1.webp",
        images: [
            "/assets/images/track6triplewhite/1.webp",
            "/assets/images/track6triplewhite/2.webp",
            "/assets/images/track6triplewhite/3.webp",
            "/assets/images/track6triplewhite/4.webp"
        ]
    },
    {
        id: "T600004",
        name: "Track 6 Track 6 Unnamed No.1 C in Minor - Low top",
        price: 1090000,
        colors: [{ name: "Triple White", code: "#001F3F" }],
        category: "Track 6",
        available: true,
        limited: true,
        thumbnail: "../images/track6unnamedno1/1.webp",
        images: [
            "/assets/images/track6unnamedno1/1.webp",
            "/assets/images/track6unnamedno1/2.webp",
            "/assets/images/track6unnamedno1/3.webp",
            "/assets/images/track6unnamedno1/4.webp"
        ]
    },
    {
        id: "T600005",
        name: "Track 6 I.S.E.E - Low top",
        price: 1490000,
        colors: [{ name: "Icy Blue", code: "#001F3F" }],
        category: "Track 6",
        available: false,
        limited: true,
        thumbnail: "../images/track6isee/1.webp",
        images: [
            "/assets/images/track6isee/1.webp",
            "/assets/images/track6isee/2.webp",
            "/assets/images/track6isee/3.webp",
            "/assets/images/track6isee/4.webp"
        ]
    },
    {
        id: "T600006",
        name: "Track 6 Moonphase - Low top",
        price: 1290000,
        colors: [{ name: "Moonphase", code: "#001F3F" }],
        category: "Track 6",
        available: true,
        limited: false,
        thumbnail: "../images/track6moonphase/1.webp",
        images: [
            "/assets/images/track6moonphase/1.webp",
            "/assets/images/track6moonphase/2.webp",
            "/assets/images/track6moonphase/3.webp",
            "/assets/images/track6moonphase/4.webp"
        ]
    },
    {
        id: "AV00186",
        name: "Urbas SC - Low top",
        price: 580000,
        colors: [{ name: "Corn Silk", code: "#001F3F" }],
        category: "Urbas",
        available: true,
        limited: false,
        thumbnail: "../images/urbassc/1.webp",
        images: [
            "/assets/images/urbassc/1.webp",
            "/assets/images/urbassc/2.webp",
            "/assets/images/urbassc/3.webp",
            "/assets/images/urbassc/4.webp"
        ]
    },
    {
        id: "AV00186",
        name: "Ananas x Doraemon 50 Years Pattas",
        price: 890000,
        colors: [{ name: "White/Corydalis 50th", code: "#001F3F" }],
        category: "Pattas",
        available: true,
        limited: true,
        thumbnail: "../images/pattasdoraemon/1.webp",
        images: [
            "/assets/images/pattasdoraemon/1.webp",
            "/assets/images/pattasdoraemon/2.webp",
            "/assets/images/pattasdoraemon/3.webp",
            "/assets/images/pattasdoraemon/4.webp"
        ]
    },
    {
        id: "AV00135",
        name: "Basas RAW - Low top",
        price: 350000,
        colors: [{ name: "Rustic", code: "#001F3F" }],
        category: "Basas",
        available: true,
        limited: false,
        thumbnail: "../images/bassasraw/1.webp",
        images: [
            "/assets/images/bassasraw/1.webp",
            "/assets/images/bassasraw/2.webp",
            "/assets/images/bassasraw/3.webp",
            "/assets/images/bassasraw/4.webp"
        ]
    },
    {
        id: "AV00011",
        name: "Basas Hook N'Loop NE - Low top",
        price: 520000,
        colors: [{ name: "Whtie", code: "#001F3F" }],
        category: "Basas",
        available: true,
        limited: false,
        thumbnail: "../images/basashooknloop/1.webp",
        images: [
            "/assets/images/basashooknloop/1.webp",
            "/assets/images/basashooknloop/2.webp",
            "/assets/images/basashooknloop/3.webp",
            "/assets/images/basashooknloop/4.webp"
        ]
    },
];
