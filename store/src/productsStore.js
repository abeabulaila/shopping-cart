const productsArray = [
    {
        id: "price_1LwUukCRCPPM8IlHxeOeok8e",
        title: "Coffee",
        price: 4.99
    },
    {
        id: "price_1LwUvUCRCPPM8IlHstbgwzsV",
        title: "Sunglasses",
        price: 9.99
    },
    {
        id: "price_1LwUw4CRCPPM8IlHSTJGoDyb",
        title: "Camera",
        price: 39.99
    },

]

function getProductData(id) {
    let productData = productsArray.find(product => product.id === id)

    if (productData == undefined) {
        console.log("Product data does not exist for ID:" + id);
        return undefined;
    }
    return productData;
}

export { productsArray, getProductData };