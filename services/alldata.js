async function alldata() {

    const alldata = await fetch('https://retoolapi.dev/E9bLJI/data')
    return alldata.json()
}

export default alldata