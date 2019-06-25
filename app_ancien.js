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
nav.innerHTML = `<ul>
<li><button class="noobBtn">Noob</a></li>
<li><button class="hardcoreBtn">Hardcore</a></li>
<li><button class="ultraBtn">Ultraviolence</a></li>
</ul>`

let main = document.createElement("div");
main.className += "fond";
document.body.appendChild(nav);
document.body.appendChild(main);

let board = document.createElement("div");
board.className += "board";

main.appendChild(board);

// Création des formes
let shape = document.createElement("div");

function level(target, bombs) {

    for (let i = 0; i < target; i++) {

        // Formes random
        let formes = ["square", "circle"];
        let forme = Math.floor(Math.random() * formes.length);

        // Couleurs random
        let colors = ["blue", "green", "yellow", "red"];
        let color = Math.floor(Math.random() * colors.length);

        shape.classList.add(formes[forme], colors[color]);

        let pos_x = Math.floor(Math.random() * 94);
        let pos_y = Math.floor(Math.random() * 87);

        shape.style.left = `${pos_x}%`;
        shape.style.top = `${pos_y}%`;

        board.appendChild(shape);
    }
    for (let i = 0; i < bombs; i++) {
        // Génération de bombes

        // Formes random
        let formes = ["square", "circle"];
        let forme = Math.floor(Math.random() * formes.length);

        shape.classList.add(formes[forme], "black");


        let pos_x = Math.floor(Math.random() * 94);
        let pos_y = Math.floor(Math.random() * 87);

        shape.style.left = `${pos_x}%`;
        shape.style.top = `${pos_y}%`;

        let noire = shape.classList.add("black");
        board.appendChild(shape);

    }
}


document.getElementsByClassName("noobBtn").addEventListener("click", level(17, 3));
