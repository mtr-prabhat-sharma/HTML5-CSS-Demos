document.addEventListener('DOMContentLoaded', async function () {
    const apiUrl = 'https://jsonplaceholder.typicode.com';
    const imagesContainer = document.getElementById('images-container');
    
    try {
    // Fetch 3 images with titles and posts concurrently
    const imagePromises = Array.from({ length: 3 }, (_, index) =>
    fetchImageWithPost(apiUrl, index + 1)
    );
    const images = await Promise.all(imagePromises);
    
    // Append each image to the container
    images.forEach(image => {
    const imgContainer = createImageContainer(image);
    imagesContainer.appendChild(imgContainer);
    });
    } catch (error) {
    console.error('Error fetching or processing:', error);
    }
    });
    
    // Helper function to fetch an image with title and post
    async function fetchImageWithPost(apiUrl, imageId) {
    const [imageResponse, postResponse] = await Promise.all([
    fetch(`${apiUrl}/photos/${imageId}`),
    fetch(`${apiUrl}/posts/${imageId}`)
    ]);
    
    if (!imageResponse.ok || !postResponse.ok) {
    throw new Error(`One of the requests failed`);
    }
    
    const image = await imageResponse.json();
    const post = await postResponse.json();
    
    return {
    url: image.url,
    title: image.title,
    post: {
    title: post.title,
    body: post.body
    }
    };
    }
    
    // Helper function to create an image container
    function createImageContainer(image) {
    const imgContainer = document.createElement('div');
    imgContainer.classList.add('image-container');
    
    // Create and append an image element
    const img = document.createElement('img');
    img.src = image.url;
    img.classList.add('image');
    img.alt = image.title;
    
    // Create and append title
    const title = document.createElement('div');
    title.classList.add('title');
    title.textContent = image.title;
    
    // Create and append post information
    const postInfo = document.createElement('div');
    postInfo.innerHTML = `
    <p>${image.post.body}</p>
    `;
    
    // Create comment section
    const commentSection = document.createElement('div');
    commentSection.classList.add('comment-section');
    
    // Create comment input
    const commentInput = document.createElement('input');
    commentInput.classList.add('comment-input');
    commentInput.placeholder = 'Enter your comment';
    
    // Create submit button
    const submitComment = document.createElement('div');
    submitComment.classList.add('submit-comment');
    submitComment.textContent = 'Submit Comment';
    submitComment.addEventListener('click', () => {
    const commentText = commentInput.value;
    if (commentText.trim() !== '') {
    // Handle the comment submission (you can add your logic here)
    alert(`Comment submitted for ${image.title}: ${commentText}`);
    // Clear the comment input
    commentInput.value = '';
    }
    });
    
    // Append elements to the comment section
    commentSection.appendChild(commentInput);
    commentSection.appendChild(submitComment);
    
    // Append elements to the container
    imgContainer.appendChild(title);
    imgContainer.appendChild(img);
   
    imgContainer.appendChild(commentSection);
    
    return imgContainer;
    }
    