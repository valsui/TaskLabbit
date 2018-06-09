const initialState = ["Delivery",
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

const taskReducer = (state = initialState, action) => {
    Object.freeze(state);
    switch (action.type) {
        default:
        return state;
    }
};

export default taskReducer;