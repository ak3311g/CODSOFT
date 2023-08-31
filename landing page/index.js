const slide = document.getElementById('slide-show');
const background = document.getElementById('hero_page');
const heading = document.getElementById('heading');
const description = document.getElementById('description');

const images = [
    {
        src: '/assets/1.png',
        background: '#7E7EBB',
        color: '#CBB178',
    },
    {
        src: '/assets/2.png',
        background: '#8D8E73',
        color: '#72718C',
    },
    {
        src: '/assets/3.png',
        background: '#EDE3EC',
        color: '#121C13',
    },
    {
        src: '/assets/4.png',
        background: '#344E87',
        color: '#CBB178',
    },
    {
        src: '/assets/5.png',
        background: '#28292F',
        color: '#D7D6D0',
    }
];

const data = [
    {
        title: 'News',
        description: 'Latest news from the world of gaming',
    },
    {
        title: 'Reviews',
        description: 'Reviews about the latest titles',
    },
    {
        title: 'Streaming',
        description: 'Streaming of the some popular titles',
    },
    {
        title: 'Trailers',
        description: 'Trailers of the upcoming games',
    },
    {
        title: 'Podcasts',
        description: 'Podcasts of the latest games',
    },
    {
        title: 'Events',
        description: 'Events of the latest games',
    },
    {
        title: 'Competitions',
        description: 'Competitions of the latest games',
    }
]


let currentImage = 0;
let currentData = 0;

function changeData() {
    heading.innerHTML = data[currentData].title;
    description.innerHTML = data[currentData].description;
    heading.style.color = images[currentImage].color;
    description.style.color = images[currentImage].color;
    currentData++;
    if (currentData >= data.length) {
        currentData = 0;
    }
}


function changeSrc() {
    slide.src = images[currentImage].src;
    background.style.background = images[currentImage].background;
}

function changeOpacity() {
    slide.style.opacity = 1;
    heading.style.opacity = 1;
    description.style.opacity = 1;
}

function nextImage() {
    currentImage++;
    if (currentImage >= images.length) {
        currentImage = 0;
    }
}


function changeImage() {
    slide.style.opacity = 0;
    heading.style.opacity = 0;
    description.style.opacity = 0;
    setTimeout(changeSrc, 1000);
    setTimeout(changeOpacity, 1000);
    setTimeout(nextImage, 1000);
    setTimeout(changeData, 1000);
}



setInterval(changeImage, 3000);