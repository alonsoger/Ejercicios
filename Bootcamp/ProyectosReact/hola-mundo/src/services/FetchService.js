export const getAllUsers = async (page) => {

    let response = await fetch('https://reqres.in/api/users')
    console.log('Response:', response);
    console.log('Status:', response.status);
    console.log('OK?', response.ok);
    //We return the JSON
    return response.json()
}

export const getAllPageUsers = async (page) => {

    let response = await fetch(`https://reqres.in/api/users?page=${page}`);
    console.log('Response:', response);
    console.log('Status:', response.status);
    console.log('OK?', response.ok);
    //We return the JSON
    return response.json()
}

