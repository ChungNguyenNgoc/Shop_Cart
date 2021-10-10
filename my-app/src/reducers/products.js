var initialState = [
    {
        id: 1,
        name: 'Iphone 7 Plus',
        image: 'https://cdn.tgdd.vn/Products/Images/42/78124/iphone-7-plus-32gb-gold-600x600-600x600.jpg',
        description: 'Sản phẩm của Apple',
        price: 500,
        inventory: 10,
        rating: 3,
    },
    {
        id: 2,
        name: 'Iphone 8 Plus',
        image: 'https://cdn.tgdd.vn/Products/Images/42/114110/iphone-8-plus-hh-600x600-600x600.jpg',
        description: 'Sản phẩm của Apple',
        price: 600,
        inventory: 10,
        rating: 4,
    },
    {
        id: 3,
        name: 'Iphone 6 Plus',
        image: 'https://cdn.tgdd.vn/Products/Images/42/87846/iphone-6s-plus-32gb-hh-600x600-600x600-600x600-600x600.jpg',
        description: 'Sản phẩm của Apple',
        price: 400,
        inventory: 10,
        rating: 5,
    },
];

const product = (state = initialState, action) => {
    switch(action.type) {
        default: return [...state];
    }
}

export default product;