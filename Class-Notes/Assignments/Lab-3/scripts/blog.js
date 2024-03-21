//Curtis Hemminghaus, 100874539, 2024-03-14

document.getElementById("loadBlogs").addEventListener("click", function () {

    // var xhr = new XMLHttpRequest();
    // xhr.open("GET", "https://jsonplaceholder.typicode.com/posts?limit=20&offset=0");

    // xhr.onload = function () {
    // console.log("API has responded!");
    // //   console.log(this);
    // var response = JSON.parse(this.responseText);
    // console.log(response);
    // // var postString = "";
    // // response.results.forEach((posts) => {
    // //     postString += `<li>${posts.id}/li>`;
    // // });
    // // document.getElementById("postsList").innerHTML = postString;
    // };
    // xhr.send();

    let postsLists = fetch(
        "https://jsonplaceholder.typicode.com/posts?limit=20&offset=10",
        {
            method: "GET",
        }
    ).then((response) => {
        return response.json();
    }).then((jsonResult) => {
        let first20 = jsonResult.slice(0,20);
        console.log(first20);

        document.getElementById('twenty-cards').innerHTML = '';

        //Making the 20 cards
        first20.forEach((posts) => {
            let cardCreation = `
            <div class="card" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">${posts.title}</h5>
                    <img
                    <p class="card-text">${posts.body}</p>
                </div>
            </div>
        `;
        document.getElementById('twenty-cards').innerHTML += cardCreation;
        });
    })

    let imageLists = fetch(
        "https://pixabay.com/api/?key=42944494-fbd60779ac631f173709c01ab&q=yellow+flowers&image_type=photo",
        {
            method: "GET",
        }
    ).then((response) => {
        return response.json();
    }).then((jsonResult) => {
        let twentyImages = jsonResult.slice(0,20);

        twentyImages.forEach
    })
    
});