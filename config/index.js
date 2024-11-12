module.exports = {
    secret: process.env.NODE_ENV === "production" ? process.env.SECRET : "shQ2rW112WQevx9ipeH7oQzwlNvx9fc12zsXLR1NA05jHbD6tm",
    api: process.env.NODE_ENV === "production" ? "https://api.loja-ecommerce.com" : "http://localhost:3000", 
    loja: process.env.NODE_ENV === "production" ? "https://loja-ecommerce.com" : "http://localhost:8000", 
}; // shQ2rW112WQevx9ipeH7oQzwlNvx9fc12zsXLR1NA05jHbD6tm que eu criei aleatoriamente



