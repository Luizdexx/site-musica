const musicContainer = document.querySelector('.music-container');
const playBtn = document.querySelector('#play');
const prevBtn = document.querySelector('#prev');
const nextBtn = document.querySelector('#next');
const audio = document.querySelector('#audio');
const progress = document.querySelector('.progress');
const progressContainer = document.querySelector('.progress-container');
const title = document.querySelector('#title');
const cover = document.querySelector('#cover');

// array para as músicas
const songs = ['attention', 'hurt', 'hypeboy']

let songIndex = 0;

loadSong(songs[songIndex])

// update músicas
function loadSong(song) {
    title.innerText = song;
    audio.src = `assets/musicas/${song}.mp3`;
    cover.src = `assets/imagens/${song}.jpg`;
}

function playSong() {
    musicContainer.classList.add('play');
    playBtn.querySelector('i.fas').classList.remove('fa-play');
    playBtn.querySelector('i.fas').classList.add('fa-pause');

    audio.play();
}

function pauseSong() {
    musicContainer.classList.remove('play');
    playBtn.querySelector('i.fas').classList.add('fa-play');
    playBtn.querySelector('i.fas').classList.remove('fa-pause');

    audio.pause();
}

function prevSong() {
    songIndex--;

    if(songIndex < 0) {
        songIndex = songs.length - 1;
    }

    loadSong(songs[songIndex]);
    playSong();
}

function nextSong() {
    songIndex++;

    if(songIndex > songs.length - 1) {
        songIndex = 0;
    }

    loadSong(songs[songIndex]);
    playSong();
}

function updateProgress(e) {
    const { duration, currentTime } = e.srcElement;
    const progressPercent = (currentTime / duration) * 100;
    progress.style.width = `${progressPercent}%`;
}

function setProgress(e) {
    const width = this.clientWidth;
    const clickX = e.offsetX;
    const duration = audio.duration;

    audio.currentTime = (clickX / width) * duration;
    
}

// Carregar a música
loadSong(songs[songIndex])

// Atualizar detalhes da música
function loadSong(song) {
    // Seu código existente aqui...

    // Parar a música após 13 segundos
    setTimeout(function() {
        audio.pause();

        // Adicionar a classe 'moved' ao musicContainer para iniciar a animação
        musicContainer.classList.add('moved');

        // Exibir os botões de escolha da música após a animação
        setTimeout(function() {
            var buttons = document.createElement('div');
            buttons.className = 'buttons hidden';
            buttons.innerHTML = `
                <button id="song1">Música 1</button>
                <button id="song2">Música 2</button>
                <button id="song3">Música 3</button>
                <button id="song4">Música 4</button>
            `;
            document.body.appendChild(buttons);

            // Adicionar evento de clique ao botão da Música 3
            document.getElementById('song3').addEventListener('click', function() {
                alert('Você escolheu a música correta!');
            });
        }, 1000); // Aparecer os botões após 1 segundo (duração da animação)
    }
)}




// event listeners
playBtn.addEventListener('click', () => {
    const isPlaying = musicContainer.classList.contains('play')

    if(isPlaying) {
        pauseSong();
    } else {
        playSong();
    }
})

// mudar a música
prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);

audio.addEventListener('timeupdate', updateProgress);

progressContainer.addEventListener('click', setProgress);

audio.addEventListener('ended', nextSong);

// Crie os botões fora do setTimeout
var buttons = document.createElement('div');
buttons.className = 'buttons hidden'; // Adicione a classe 'hidden' aqui
buttons.innerHTML = `
    <button id="song1">Música 1</button>
    <button id="song2">Música 2</button>
    <button id="song3">Música 3</button>
    <button id="song4">Música 4</button>
`;
document.body.appendChild(buttons);

// Adicione evento de clique ao botão da Música 3
document.getElementById('song3').addEventListener('click', function() {
    alert('Você escolheu a música correta!');
});

// Carregar a música
loadSong(songs[songIndex])

// Atualizar detalhes da música
function loadSong(song) {
    // Seu código existente aqui...

    // Parar a música após 13 segundos
    setTimeout(function() {
        audio.pause();

        // Adicionar a classe 'moved' ao musicContainer para iniciar a animação
        musicContainer.classList.add('moved');

        // Exibir os botões de escolha da música após a animação
        setTimeout(function() {
            buttons.classList.remove('hidden'); // Remova a classe 'hidden' para exibir os botões
        }, 1000); // Aparecer os botões após 1 segundo (duração da animação)
    }, 13000); // Pausar a música e iniciar a animação após 13 segundos
}

