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
        thumbnail: "../../public/assets/images/urbaslove24/1.webp",
        images: [
            "../../public/assets/images/urbaslove24/1.webp",
            "../../public/assets/images/urbaslove24/2.webp",
            "../../public/assets/images/urbaslove24/3.webp",
            "../../public/assets/images/urbaslove24/4.webp"
        ]
    },
    {
        id: "AV00206",
        name: "Vintas Vivu - Low top",
        price: 434000,
        colors: [{ name: "Plantation", code: "#001F3F" }],
        category: "Vintas",
        available: true,
        limited: true,
        thumbnail: "../../public/assets/images/vintasvivu/1.jpeg",
        images: [
            "../../public/assets/images/vintasvivu/1.jpeg",
            "../../public/assets/images/vintasvivu/2.jpeg",
            "../../public/assets/images/vintasvivu/3.jpeg",
            "../../public/assets/images/vintasvivu/4.jpeg"
        ]
    }
];
