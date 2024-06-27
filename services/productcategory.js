async function category(){

    const category = await fetch('https://retoolapi.dev/LVDn1j/data')
    return category.json()

}

export default category