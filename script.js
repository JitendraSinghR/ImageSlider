const images = [
    'https://images.unsplash.com/photo-1574068468668-a05a11f871da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8YW5pbWFsc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1535083783855-76ae62b2914e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGFuaW1hbHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1591824438708-ce405f36ba3d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YW5pbWFsc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1456926631375-92c8ce872def?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGFuaW1hbHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
]

const n = images.length;
const flexContainer = document.getElementById('flex-container');
const leftButton = document.getElementById('left-btn');
const rightButton = document.getElementById('right-btn');

// const boxWidth = document.getElementById('box').offsetWidth;
const containerWidth = 80

for (let i = 0; i < n; i++) {
    const newImg = document.createElement('img')
    newImg.src = images[i];
    flexContainer.appendChild(newImg);
    newImg.classList.add('img-style')
}

let curPosition = 0;
leftButton.addEventListener('click', () => {
    if (curPosition > 0) {
        curPosition--;
        console.log(`curPosition after left click: ${curPosition}`);
    } else { curPosition = n - 1 }
    showImg();
})
rightButton.addEventListener('click', () => {
    if (curPosition < n - 1) {
        curPosition++;
        console.log(`curPosition after right click: ${curPosition}`);
    } else { curPosition = 0 }
    showImg();
})

function showImg() {
    const transformXDistance = -curPosition * containerWidth
    console.log(`transformXDistance: ${transformXDistance}`);
    flexContainer.style.transform = `translateX(${transformXDistance}vw)`;
}