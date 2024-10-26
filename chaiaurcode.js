const btn = document.querySelector('.btn');
const container = document.querySelector('.container');
const url = 'https://api.thecatapi.com/v1/images/search';

// Function to fetch and display random cat image
const getRandomCatImage = async () => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    const catImageUrl = data[0].url;
    
    // Clear the container and add the new image
    container.innerHTML = `<img src="${catImageUrl}" alt="Random Cat" class="cat-image">`;
    let imgOriginal=document.querySelector('.cat-image');
    imgOriginal.style.width="500px";
    imgOriginal.style.height="500px";
    imgOriginal.style.margin="auto";

  } catch (error) {
    console.error('Error fetching cat image:', error);
    container.innerHTML = `<p>Failed to load image. Try again later.</p>`;
  }
};

// Add event listener to the button
btn.addEventListener('click', getRandomCatImage);
