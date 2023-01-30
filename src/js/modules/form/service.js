const post = async (url, data) => {
    const result = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });

    if (!result.ok) {
        throw new Error("We couldn't do fetch to " + url + ". The status: " + result.status);
    }

    return await result.json();
}

export {post};