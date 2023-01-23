const post = async (url, data) => {
    const result = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({name: data.get("name"), phone: data.get("phone"), email: data.get("email")})
    });

    if (!result.ok) {
        throw new Error("We couldn't do fetch to " + url + ". The status: " + result.status);
    }

    return await result.json();
}

export {post};