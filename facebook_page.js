function getNotifications() {
    console.log("dsadksahd");
}

var jsonArr = [];
fetch('https://jsonplaceholder.typicode.com/posts')
        .then((data)=>data.json())
        .then((dataJson) => {
            jsonArr = dataJson;
            console.log("length",jsonArr)
            document.getElementById('unread-messages').innerText = jsonArr.length;
        
});

fetch('https://jsonplaceholder.typicode.com/photos')
.then((data) => data.json())
.then((jsonData) => {
    
    const friendPostsContainer = document.getElementById('friend-posts');

    for(let i=0;i<10;i++) {
        let post = jsonData[i];
        // Create a div for each post
        const postDiv = document.createElement('div');
        postDiv.classList.add('friend-post');
           
        // Create an image element
        const postImage = document.createElement('img');
        postImage.src = post.url;
        postImage.alt = post.title;

        postImage.style.height = '200px';
        postImage.style.width = '200px';
        postImage.style.borderRadius = '10px';

        // Create a div for the title
        const titleDiv = document.createElement('div');
        titleDiv.classList.add('title');
        titleDiv.textContent = `Title:${post.title}`;
        titleDiv.style.fontWeight = 'bold';
        
        postDiv.appendChild(postImage);
        postDiv.appendChild(titleDiv);

        const commentButton = document.createElement('button');
        commentButton.type = 'button';
        commentButton.classList.add('btn', 'btn-success');
        commentButton.textContent = 'Comment';
        commentButton.addEventListener('click', function () {
            showComments();
        });

        function showComments() {
            const commentsDiv = document.createElement('div');
            commentsDiv.textContent = 'Some comment';
            commentsDiv.style.position = 'relative';
            commentsDiv.classList.add('alert', 'alert-secondary');
            commentsDiv.style.bottom = '70%';
            commentsDiv.style.left = '24%';
            commentsDiv.style.width = 'fit-content';
            postDiv.appendChild(commentsDiv);
        }
        postDiv.appendChild(commentButton);
        friendPostsContainer.appendChild(postDiv);

        }
});


