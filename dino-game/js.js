const dino = document.querySelector('.dino');
const background = document.querySelector('.background');
let isJumping = false;
let position = 0;



function handleKeyUp(event){
    if(event.keyCode === 32){
        if(!isJumping){
            jump();
        }
        
    }
}

function jump(){
    

    let upInterval = setInterval(() =>{
        if(position >= 150){
            clearInterval(upInterval);
            // descendo
            
            let downInterval = setInterval(() =>{
                if(position <= 0){
                    clearInterval(downInterval);
                    isJumping = false;
                }else{
                    position -= 20;
                    dino.style.bottom = position + 'px';
                }
            },15);

        }else{
            // subindo 
            position += 20;
            dino.style.bottom = position + 'px';

        }
        
    },15)
}

function createCactus(){
    const cactus = document.createElement('div');
    let cactusPositon = 1500;
    let randomTime = Math.random() * 2000;

    cactus.classList.add('cactus');
    cactus.style.left = 2000  + 'px';
    background.appendChild(cactus);

    let leftInterval = setInterval(() =>{
        cactusPositon -= 10;
        cactus.style.left = cactusPositon + 'px';

        if(cactusPositon < -60 ){
            clearInterval(leftInterval);
            background.removeChild(cactus);
        }else if(cactusPositon > 0 && cactusPositon < 60 && position < 60){
            //
            clearInterval(leftInterval);
            document.body.innerHTML = '<div id="over-content"><h1 class="game-over">Game over </h1> <button class="btn">Press space </button></div>'

            window.addEventListener('keyup', () =>{
                location.reload();
            });
            
        }else{
            cactusPositon -= 10;
            cactus.style.left = cactusPositon + 'px';
        }
    }, 20);

    setTimeout(createCactus, randomTime);
}

createCactus();
document.addEventListener('keyup', handleKeyUp);
