const fetchUser = (userId) => {
    return fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
        .then((response) => {
            if (!response.ok) {
                throw new Error("Failed to fetch user");
            }

            return response.json();
        });
};

const fetchPosts = (userId) => {
    return fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
        .then((response) => {
            if (!response.ok) {
                throw new Error("Failed to fetch posts");
            }

            return response.json();
        });
};

fetchUser(1)
    .then((user) => {
        console.log("User:", user.name);

        return fetchPosts(user.id);
    })
    .then((posts) => {
        console.log("Posts:");

        posts.forEach((post) => {
            console.log("-", post.title);
        });
    })
    .catch((error) => {
        console.error("Error:", error.message);
    })
    .finally(() => {
        console.log("Request completed");
    });