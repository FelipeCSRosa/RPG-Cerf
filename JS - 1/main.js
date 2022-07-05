const rpgZone = document.querySelector('.rpg-zone');
let player;

class Player {
    constructor(name) {
        this.playerName = name;
        this.playerLife = 100;
        this.playerDamage = 10;
        this.playerLevel = 1;
        this.playerCritChance = 0.1;
    } addRole(role) {
        switch (role) {
            case 'warrior':
                this.playerDamage = 20;
                break;
            case 'mage':
                this.playerLife = 120;
                break;
            case 'rogue':
                this.playerCritChance = 0.6;
                break;
        }
    }
}

function resetHUD (){
    if(document.querySelector('.hud')){
        document.querySelector('.hud').remove();
    }

    const hud = document.createElement('div');
    hud.className = "hud";
    hud.innerHTML = `
    <div class="hud-inner">
        <p class="hud-inner-left">
            Vida: ${player.playerLife}
        </p>
        <p class="hud-inner-center">
            ${player.playerName}
        </p>
        <p class="hud-inner-right">
            Nível: ${player.playerLevel}
        </p>
    </div>
    `
    rpgZone.appendChild(hud);
}

function chooseRole(role) {
    document.querySelector('.class-choice').remove();
    player.addRole(role);
    console.log(player);
    resetHUD();
}

function showClassChoice(nome) {
    player = new Player(nome);
    console.log(player);

    document.querySelector('.title-area').remove();
    document.querySelector('.input-area').remove();
    const classChoice = document.createElement('div');
    classChoice.className = "class-choice";
    classChoice.innerHTML = `
    <div class="playerOptions">
        <p>OK ${nome}! Agora escolha a sua classe</p>
        <button onclick="chooseRole('warrior')">Guerreiro</button>
        <button onclick="chooseRole('mage')">Mago</button>
        <button onclick="chooseRole('rogue')">Ladino</button>
    </div>
    `

    rpgZone.appendChild(classChoice);
}

// Step 0
function handleNameSubmit() {
    const nameOfPlayer = document.querySelector('#input-0').value

    if(nameOfPlayer.length > 0) {
        showClassChoice(nameOfPlayer);
    }else {
        alert('Por favor, digite seu nome')
    }

}