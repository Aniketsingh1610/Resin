async function productdata() {
    const data = await fetch('https://retoolapi.dev/K2izaE/data')
    return data.json();
}

export default productdata
