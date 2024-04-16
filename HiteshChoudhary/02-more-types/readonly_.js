var user = {
    _id: "123",
    name: 'a',
    email: 'a@a.com',
    isActive: false,
};
user.email = "a@gmail.com";
// Combining types from already defined types, assuming we have card_number and card_date type already defined
// Its very handy especially when the code is coming from other devs who might have created other types which works great even if its just one liner
// type carDetails = card_number & card_date & {
//     cvv: number
// }
