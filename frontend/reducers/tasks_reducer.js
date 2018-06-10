const tasksArr = ["Delivery",
                "Event Planning",
                "Cleaning",
                "Event Staffing",
                "Personal Assistant",
                "Entertainment",
                "Furniture Assembly",
                "Heavy Lifting",
                "Minor Home Repairs",
                "Moving & Packing",
                "Organization",
                "Accounting",
                "Arts & Crafts",
                "Automotive",
                "Carpentry & Construction",
                "Computer Help",
                "Cooking & Baking",
                "Data Entry",
                "Decoration",
                "Deep Clean",
                "Electrician",
                "Errands",
                "Graphic Design",
                "Laundry and Ironing",
                "Marketing",
                "Mounting & Installation",
                "Office Administration",
                "Packing & Shipping",
                "Painting",
                "Pet Sitting",
                "Photography",
                "Plumbing",
                "Research",
                "Selling Online",
                "Sewing",
                "Shopping",
                "Usability Testing",
                "Videography",
                "Web Design & Development",
                "Wait In Line",
                "Window Cleaning",
                "Writing & Editing",
                "Yard Work & Removal",
                "Home Improvement",
                "General Handyman"];

const labbitURLS = [
    "https://images-na.ssl-images-amazon.com/images/I/810OXw43TkL._SX679_.jpg",
    "https://i.pinimg.com/564x/fb/51/47/fb5147c26fc3e9c8652e986095c7f4e3.jpg",
    "https://blog.kidrobot.com/wp-content/uploads/2011/11/Kringle-Labbit-1.jpg",
    "https://images-na.ssl-images-amazon.com/images/I/717AH%2B1clmL._SX466_.jpg",
    "https://cdn.shopify.com/s/files/1/0584/3841/products/polyester-happy-labbit-7-cow-plush-1_1000x.jpg?v=1527651430",
    "https://blog.kidrobot.com/wp-content/uploads/2012/01/cow-labbit-14-f.jpg",
    "https://cdn7.bigcommerce.com/s-fvv65gjhoq/products/869/images/1990/plushlabbit14_dalm__18428.1493062346.500.750.jpg?c=2",
    "https://www.think-pink-celle.de/images/product_images/info_images/hp1.jpg",
    "https://images-na.ssl-images-amazon.com/images/I/71fn2BpyDIL._SX679_.jpg",
    "https://cdn.shopify.com/s/files/1/0584/3841/products/100-polyester-7-happy-labbit-plush-labbitooth-2_1000x.jpg?v=1501727096",
    "https://i.pinimg.com/736x/03/db/74/03db7481ce67924b29ae0eebefb9cd27.jpg",
    "https://images-na.ssl-images-amazon.com/images/I/411GuS3sEdL._SY355_.jpg",
    "https://images-na.ssl-images-amazon.com/images/I/31-26Ts4UVL.jpg",
    "http://1.bp.blogspot.com/_VChD0TN44Cc/S8Heh5Myt7I/AAAAAAAAInc/ssXOgU_cNng/s400/14.jpg",
    "https://sl-production.s3.amazonaws.com/photos/506a535363051f3540000158/big_purple_plush_labbit.jpg",
    "https://blog.kidrobot.com/wp-content/uploads/2012/01/tiger-labbit-14-f.jpg",
    "https://cdn7.bigcommerce.com/s-fvv65gjhoq/images/stencil/1200x1200/products/844/1951/plushlabbit_moustache__04857.1493062306.jpg?c=2",
    "https://media.artoyz.net/shop/24449-large_default/14-wooly-stache-labbit.jpg",
    "https://i.pinimg.com/736x/fd/67/6d/fd676d44d3bf03ba3418bae4beb10bc9.jpg",
    "https://blog.kidrobot.com/wp-content/uploads/2012/07/stache-labbit-plush-5.jpg",
    "https://cdn-img-1.wanelo.com/p/9a0/81d/011/c316985529cb57aeb192288/x354-q80.jpg"
];


let initialState = tasksArr.reduce((acc, el, i) => {
    acc[el] = labbitURLS[i % labbitURLS.length];
    return acc
}, {});

const taskReducer = (state = initialState, action) => {
    Object.freeze(state);
    switch (action.type) {
        default:
        return state;
    }
};

export default taskReducer;