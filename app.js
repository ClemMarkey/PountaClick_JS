/*
! Consigne: développer un jeu en JavaScript. Le <body> doit être vide !
! La V1 doit être push sur GitHub avant le 28 Juin Minuit !


*   Règles du jeu:
*   Le joueur doit cliquer sur des formes pour les éliminer dans un temps imparti
*   Chaque élimination rapporte 1 point au joueur
*   Les objets de couleur noire sont les ennemis. Si on en élimine, la partie est terminée
*   Si tous les autres objets sont éliminés il reste donc uniquement les noirs. La partie est gagnée !

?   Le jeu contient 3 niveaux de difficulté dont dépend le nombre de formes
*   Noob = Objets: 20 dont 3 noirs| Temps: 60 secondes
*   Hardcore = Objets: 80 dont 20 noirs | Temps: 45 secondes
*   Ultraviolence = Objets: 200 dont 70 noirs | Temps: 30 secondes

*   Conditions:
*   Tout le code doit être généré via le JS !
*   Les objets ne peuvent pas être des images, ils sont full code !
*   A chaque objet éliminé, les autres restants changent de position
*   Si le temps imparti est terminé et que tous les objetsne sont pas éliminés: Afficher score
*   Si la partie est gagnée (Touts les formes ont été eliminées dans le temps imparti): Afficher le temps

*/

/*

Pseudo code:

Créer une div container
Créer les formes en CSS


*/

let nav = document.createElement("nav");
document.body.appendChild(nav);

let btnNoob = document.createElement("button");
let btnHardcore = document.createElement("button");
let btnUltra = document.createElement("button");

let score = document.createElement("div");
score.textContent = "0"
let scoreNum = 0;

nav.appendChild(btnNoob);
nav.appendChild(btnHardcore);
nav.appendChild(btnUltra);
nav.appendChild(score);

score.className += "score"

btnNoob.textContent = "Noob";
btnHardcore.textContent = "Hardcore";
btnUltra.textContent = "Ultraviolence";

let board = document.createElement("div");
board.className += "board";
document.body.appendChild(board);


btnNoob.addEventListener("click", function () {
    level(17, 3, 60);
    scoreNum = 0;
})

btnHardcore.addEventListener("click", function () {
    level(60, 20, 45);
    scoreNum = 0;
})

btnUltra.addEventListener("click", function () {
    level(130, 70, 30);
    scoreNum = 0;
})


function level(items, bombs) {

    // Reset de la planche de jeu
    while (board.firstChild) {
        board.removeChild(board.firstChild);
    }

    // Création des formes
    for (let i = 0; i < items; i++) {
        let shape = document.createElement("div");
        shape.className += "shape";

        // Formes random
        let formes = ["square", "circle"];
        let forme = Math.floor(Math.random() * formes.length);

        // Couleurs random
        let colors = ["blue", "green", "yellow", "red"];
        let color = Math.floor(Math.random() * colors.length);

        // Tailles random
        let tailles = ["small", "medium", "large"];
        let taille = Math.floor(Math.random() * tailles.length);

        // Application aléatoire des classes
        shape.classList.add(formes[forme], colors[color], tailles[taille]);

        // Attribution aléatoire des positions
        pos_x = Math.floor(Math.random() * 96);
        pos_y = Math.floor(Math.random() * 91);

        shape.style.left = `${pos_x}%`;
        shape.style.top = `${pos_y}%`;

        // Création effective de la forme générée ci-dessus
        board.appendChild(shape);
    }


    let shapeDel = document.querySelectorAll(".shape");


    // Boucle de suppresion de formes et d'incrémentation du score;

    for (let i = 0; i < shapeDel.length; i++) {
        shapeDel[i].addEventListener("click", function (event) {
            event.target.remove();

            scoreNum++;

            if (scoreNum === shapeDel.length) {

                while (board.firstChild) {
                    board.removeChild(board.firstChild);
                }
                
                let win = document.createElement("div");

                win.className += "win";
    
                win.innerText = `Tu as gagné, pompélup !`
    
                board.appendChild(win);


            }

            score.textContent = scoreNum;
            let bombs = document.querySelectorAll(".black");

            // Boucle de randomisation des positions à chaque clic
            // Formes colorées random au clic
            for (let j = 0; j < shapeDel.length; j++) {
                pos_x = Math.floor(Math.random() * 96);
                pos_y = Math.floor(Math.random() * 91);
                shapeDel[j].style.left = `${pos_x}%`;
                shapeDel[j].style.top = `${pos_y}%`;

                // Formes noires random au clic
                for (let k = 0; k < bombs.length; k++) {
                    pos_x = Math.floor(Math.random() * 96);
                    pos_y = Math.floor(Math.random() * 91);
                    bombs[k].style.left = `${pos_x}%`;
                    bombs[k].style.top = `${pos_y}%`;
                }
            }
        });

    }

    // Création de bombes
    for (let i = 0; i < bombs; i++) {
        let bombe = document.createElement("div")
        //    for (let i = 0; i < items; i++) {

        // Formes random
        let formes = ["square", "circle"];
        let forme = Math.floor(Math.random() * formes.length);

        // Couleurs random
        let colors = ["blue", "green", "yellow", "red"];
        let color = Math.floor(Math.random() * colors.length);

        // Tailles random
        let tailles = ["small", "medium", "large"];
        let taille = Math.floor(Math.random() * tailles.length);

        // Application aléatoire des classes
        bombe.classList.add(formes[forme], "black", tailles[taille]);

        // Attribution aléatoire des positions
        pos_x = Math.floor(Math.random() * 96);
        pos_y = Math.floor(Math.random() * 91);

        bombe.style.left = `${pos_x}%`;
        bombe.style.top = `${pos_y}%`;

        board.appendChild(bombe);

        bombe.addEventListener("click", function boom() {
            while (board.firstChild) {
                board.removeChild(board.firstChild);
            }
            let lost = document.createElement("div");

            lost.className += "lost";

            lost.innerText = `Tu as explosé ! \n Ton score: ${scoreNum}`

            board.appendChild(lost);


        })

    }
}