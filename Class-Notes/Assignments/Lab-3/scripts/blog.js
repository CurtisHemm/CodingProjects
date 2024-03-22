//Curtis Hemminghaus, 100874539, 2024-03-14

// If currently on the blog page
if(window.location.pathname == "/blog.html"){

    // Make it asyncronous to the fetches can happan together
    (async () => {
    
    // Fetch the json of the posts
    let postsLists = await fetch(
        "https://jsonplaceholder.typicode.com/posts?limit=20&offset=0",
        {
            method: "GET",
        },
    );
    // Fetch the images from the api
    let imageLists = await fetch(
        "https://pixabay.com/api/?key=42944494-fbd60779ac631f173709c01ab&q=yellow+flowers&image_type=photo/hits?limit=20&offset=0",
        {
            method: "GET",
        },
    )

    // Get the responses from the fetches
    var jsonPosts = await postsLists.json();
    var jsonImages = await imageLists.json();

    // Get the twenty-cards element from the html page
    document.getElementById('twenty-cards').innerHTML = '';

    // For loop that loops 20 times creating cards with the titles and body from the posts, and images from pixabay 
    for (let i = 0; i < 20; i++) {
        let cardCreation = `
            <div class="card" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">${jsonPosts[i].title}</h5>
                    <img class="card-image-middle" id="blogImage" src="${jsonImages.hits[i].userImageURL}" alt="Card image cap">
                    <p class="card-text">${jsonPosts[i].body}</p>
                </div>
            </div>
        `;
        document.getElementById('twenty-cards').innerHTML += cardCreation;               // Insert the card into the html
    }
    })()};
