$("#project-background").hide();
$("#project-detail").hide();
$("#project-background").removeClass("hidden");
$("#project-detail").removeClass("hidden");


$(document).ready(function(){
  startSlick();
});

function showProject(project) {
  setProject(project);
  $("#project-background").show();
  $("#project-detail").show();

  $("#project-background").addClass("animated fadeIn");
  $("#project-detail").addClass("animated slideInUp");

  setTimeout(function() {
    $("#project-background").removeClass("animated fadeIn");
    $("#project-detail").removeClass("animated slideInUp");
  }, 1000);
}

function hideProject() {
  $("#project-background").addClass("animated fadeOut");
  $("#project-detail").addClass("animated slideOutDown");

  setTimeout(function() {
    $("#project-background").removeClass("animated fadeOut");
    $("#project-detail").removeClass("animated slideOutDown");

    $("#project-background").hide();
    $("#project-detail").hide();
  }, 1000);
}

function startSlick() {
  $("#project-carousel").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    dots: true,
    arrows: false
  });

  $("#project-thumbnails img").click(function(){
    var id = $("#project-thumbnails img").index(this);
    $("#project-carousel").slick('slickGoTo', id);
  });
}

var projectsTitle = {
  Dronefpv: "Drone First Person View",
  DIT: "Drone d'imagerie et télémétrie",
  Datalogger: "Boitier d'enregistrement pour onduleur",
  WeatherDashboard: "Tableau de bord de capteurs météorologiques",
  AmbassadeurIsen: "Organisation des rencontre de l'école",
  BuyNothingDay: "Création d'une vidéo de sensibilisation au 'Buy Nothing Day'",
  PTI: "Protection du Travailleur isolé",
  KronosRespo: "Responsable événementiel",
  Louie21: "Création d'une boutique de vente en ligne",
  RenovaService:"Création d'un site vitrine",
  Keykof:"Création d'une interface clé-café / utilisateur",
  IzenTravel:"Création d'un site d'agence de voyage",
  FOA:"Trésorier du Forum Ouest Avenir",
  AtaxxReloaded: "Jeux d'arcade 'Ataxx Reloaded'"
};
var projectsImage = {
  Dronefpv: 1,
  DIT: 2,
  Datalogger: 1,
  WeatherDashboard: 6,
  AmbassadeurIsen: 1,
  BuyNothingDay: 1,
  PTI: 1,
  KronosRespo: 1,
  Louie21:3,
  RenovaService:5,
  Keykof:4,
  IzenTravel:1,
  FOA:2,
  AtaxxReloaded:4
};
var projectsInfo = {
  Dronefpv: `
    <tr><td>Cadre</td><td>Projet personnel</td></tr>
    <tr><td>Date</td><td>2021</td></tr>
    <tr><td>Langages utilisés</td><td>Arduino</td></tr>
  `,
  DIT: `
    <tr><td>Cadre</td><td>Projet scolaire</td></tr>
    <tr><td>Date</td><td>2020/2021</td></tr>
    <tr><td>Langages utilisés</td><td>Arduino</td></tr>
  `,
  Datalogger: `
    <tr><td>Cadre</td><td>Stage de 1<sup>ère</sup> année de BTS</td></td></tr>
    <tr><td>Date</td><td>mai-juillet 2020</td></tr>
    <tr><td>Participant au projet</td><td>2</td></tr>
    <tr><td>Langage utilisé</td><td>Arduino</td></tr>
  `,
  AtaxxReloaded: `
    <tr><td>Cadre</td><td>Cours de C++ - 2<sup>ème</sup> année</td></td></tr>
    <tr><td>Date</td><td>2019 - 2<sup>ème</sup> année d'étude</td></tr>
    <tr><td>Participant au projet</td><td>1</td></tr>
    <tr><td>Rôle</td><td>Développeur</td></tr>
    <tr><td>Langage utilisé</td><td>C++</td></tr>
    <tr><td>Technologie utilisée</td><td>Qt</td></tr>
  `,
  WeatherDashboard: `
    <tr><td>Cadre</td><td>Projet de fin de 1<sup>ère</sup> année</td></tr>
    <tr><td>Date</td><td>2018</td></tr>
    <tr><td>Participants au projet</td><td>3</td></tr>
    <tr><td>Rôle</td><td>Développeur et Designer</td></tr>
    <tr><td>Langages utilisés</td><td>HTML / CSS / SASS / JavaScript</td></tr><tr><td>Logiciels utilisés</td><td>Illustrator</td></tr>
    <tr><td>Bibliothèques utilisées</td><td>jQuery, chart.js</td></tr>
    <tr><td>Technologies utilisées</td><td>Ajax + API rest</td></tr>
  `,
  AmbassadeurIsen: `
    <tr><td>Cadre</td><td>Études au sein de l'ISEN</td></tr>
    <tr><td>Date</td><td>2018 - 2019 - 2<sup>ère</sup> année d'étude</td></tr>
    <tr><td>Rôles</td><td>Organisation des salons/forums et portes ouvertes</td></tr>
  `,
    BuyNothingDay: `
    <tr><td>Cadre</td><td>Projet personnel</td></tr>
    <tr><td>Date</td><td>2016</td></tr>
  `
  ,
    PTI: `
    <tr><td>Cadre</td><td>Projet de fin de BTS</td></tr>
    <tr><td>Date</td><td>2021-2022</td></tr>
    <tr><td>Participants au projet</td><td>4</td></tr>
    <tr><td>Rôle</td><td>Mise en place du GPS</td></tr>
  `
  ,
    KronosRespo: `
    <tr><td>Cadre</td><td>Études au sein de l'ISEN</td></tr>
    <tr><td>Date</td><td>2019 - 2020 - 3<sup>ème</sup> année d'étude</td></tr>
    <tr><td>Rôles</td><td>Organisation des soirées étudiantes</td></tr>
  `
  ,
    Louie21: `
    <tr><td>Cadre</td><td>Projet personnel</td></tr>
    <tr><td>Date</td><td>2016</td></tr>
    <tr><td>Rôle</td><td>Développeur et Designer</td></tr>
    <tr><td>Langages utilisés</td><td>HTML / CSS / JavaScript</td></tr>
    <tr><td>Technologies utilisées</td><td>Shopify</td></tr>
  `
  ,
    RenovaService: `
    <tr><td>Cadre</td><td>Projet avec l'entreprise Jungle Agency</td></tr>
    <tr><td>Date</td><td>2019</td></tr>
    <tr><td>Rôle</td><td>Développeur et Designer</td></tr>
    <tr><td>Langages utilisés</td><td>HTML / CSS / JavaScript</td></tr>
    <tr><td>Technologies utilisées</td><td>Ajax</td></tr>
  `
  ,
    Keykof: `
    <tr><td>Cadre</td><td>Projet de milieu de 3<sup>ème</sup> année</td></tr>
    <tr><td>Date</td><td>2019-2020</td></tr>
    <tr><td>Participants au projet</td><td>2</td></tr>
    <tr><td>Rôle</td><td>Développeur et Designer</td></tr>
    <tr><td>Langages utilisés</td><td>HTML / CSS / JavaScript</td></tr>
    <tr><td>Logiciels utilisés</td><td>Illustrator</td></tr>
    <tr><td>Bibliothèques utilisées</td><td>jQuery, chart.js</td></tr>
    <tr><td>Technologies utilisées</td><td>Symfony et Angular.js</td></tr>
  `
  ,
    IzenTravel: `
    <tr><td>Cadre</td><td>Projet de fin de 2<sup>ème</sup> année</td></tr>
    <tr><td>Date</td><td>2019-2020</td></tr>
    <tr><td>Participants au projet</td><td>2</td></tr>
    <tr><td>Rôle</td><td>Développeur et Designer</td></tr>
    <tr><td>Langages utilisés</td><td>HTML / CSS / JSON / JavaScript</td></tr>
    <tr><td>Bibliothèques utilisées</td><td>jQuery</td></tr>
    <tr><td>Technologies utilisées</td><td>Ajax + API rest</td></tr>
  `
  ,
    FOA: `
    <tr><td>Cadre</td><td>Projet personnel</td></tr>
    <tr><td>Date</td><td>2020</td></tr>
    <tr><td>Rôles</td><td>Trésorier de l'association</td></tr>
  `
};
var projectsDescription = {
  Dronefpv: `
    Dans le cadre d'un projet personnel j'ai décidé de réalisé par mes propres moyen un drone "first person view".
    `,
  DIT: `
  Dans le cadre des mini projets de BTS de 1<sup>ère</sup> année j'ai eu pour mission de réalisé la carte électronique des capteurs du drone
  <br />
  le projets nécéssitait de construire un programme qui prenne en compte les capteurs suivant : un compas magnétique 3 axes, un GPS et un écran LCD
  `,
  Datalogger: `
   Dans le cadre d'un stage éffectué à tahiti, j'ai eu pour objectif de réalisé un boitier d'enregistrement pour onduleur de panneaux solaire. <br/>
   Celui-ci avait pour mission de récupérer les informations (consommation,production,...) émisent par un onduleur afin de les stockées dans une banque de donnée

  `,
  AtaxxReloaded: `
    Ataxx est un jeu vidéo de réflexion sorti en 1990 sur système d'arcade.<br/>
    Dans le cadre de l'apprentissage du C++ j'ai développé une réédition de ce jeu.<br/>
    Ainsi, j'ai redesigner et ajouté des options de jeux comme la possibilité de choisir la taille du plateau mais aussi de jouer à 2 ou 4 joueurs.
  `,
  WeatherDashboard: `
    Pour finir notre première année d'études supérieures, étudiants de l'ISEN Rennes et Nantes devait collaborer par groupe
    de 3 dans ce projet. L'objectif était de récupérer les données fournies par une multitude de capteurs de température
    et d'humidité et de les afficher sur une page web. Nous devions imaginer la manière dont ces données sont affichées et éventuellement
    des fonctionnalités supplémentaires. <br /><br />
    Le site se compose d'une seule page avec : <br />
    - Le panneau principal, avec les jauges, graphiques et onglets correspondants aux différents capteurs ainsi qu'un bouton permettant d'afficher plus de détails. <br />
    - Le menu déroulant à droite, avec la possibilité de : changer la langue et les unités (Degré, Fahrenheit, Kelvin) de la page, changer l'affichage en fonction de l'environnement (mode jour/nuit) et réinitialiser les valeurs acquises (vider la base de données)<br /><br />

    Au niveau de l'affichage, le fond d'écran réagit en fonction de la température du capteur choisi.

    Pour permettre le fonctionnement du site sans avoir de capteur, des valeurs aléatoires sont générées.
  `,
  AmbassadeurIsen: `
    En tant qu'ambassadeur de l'ISEN de Rennes, je suis chargé d'organiser les salons et forums au sein des lycées.<br/><br/>
    J'ai aussi été chargé d'organiser les portes ouvertes de l'ISEN de Rennes, cette expérience m'a permis de constater mon aisance dans la gestion d'équipe et m'a appris beaucoup de choses quant à l'organisation d'un tel évènement.
  `,
    BuyNothingDay: `
    Le Black Friday se déroule chaque année aux USA, lors du dernier week-end de Novembre au cours duquel plusieurs commerçants proposent des soldes importantes.<br/><br/>


Le Buy Nothing Day, ou "journée sans achat" est une manifestation non-violente de boycott des achats, pour protester contre le gaspillage de la société de consommation. <br/>

Les organisateurs de cette manifestation luttent contre une société de consommation et ses effets néfastes : dégradation de l'environnement, exploitation des populations ou encore perte des valeurs humaines, emprise de la publicité qui pousse à avoir plutôt que d'être.<br/><br/>

Cette vidéo a pour but de faire rendre compte des inégalités, en particulier lors de cet évènement qui pousse les populations à la surconsommation.<br/><br/>

Mais surtout, de faire connaître ce mouvement.

  `,
  KronosRespo: `
    En tant que membre de Kronos, le BDE de l'ISEN de Brest pendant l'année 2019-2020, j'ai été responsable de l'organisation des soirées étudiantes.
  `,
  PTI: `
  Afin d'amélioré la sécurité des employés isolé comme les ouvriers du bâtiment. Nous avons, à 4, conçu un prototype de protection du
  travailleur isolé avec la technologie
  LoRa Wan. Il s'agit d'un boitier electronique porter à la ceinture de l'individu permettant d'envoyer un signe à la personne chargé de le surveiller et de l'informer sur la position (coordonnée et position par rapport au sol)
  de l'ouvrier.

  `,
  Louie21: `
    Lors de mon stage au sein de l'entreprise "Jungle Agency", j'ai été chargé de 2 projets dont celui ci.<br><br>
    Louie21.fr est un site de vente de produit de soin du visage pour homme. Une révolution de le monde de la cosmétique !
    Sur ce site développé grâce à Shopify, j'ai été chargé d'effectuer plusieurs modifications visuelles et de créer la page de présentation d'un produit.
  `,
  RenovaService: `
    Lors de mon stage au sein de l'entreprise "Jungle Agency", j'ai été chargé de 2 projets dont celui ci.<br><br>
    renovaservices.fr est un site vitrine d'entreprise.<br> Ce site existait déjà auparavant sous Wordpress.<br><br>
    J'ai décidé de tout reprendre du début pour le rendre plus esthétique mais surtout de pouvoir afficher les 200 images sans latences.
  `,
  Keykof: `
    Dans le cadre de notre 3<sup>ème</sup> année au sein de l'ISEN Brest, nous avons eu a réaliser une interface utilisant les deux frameworks les plus poplulaires : Angular.js et Sumfony.<br>
    Cette interface avait pour but de gérer les différents utilisateurs et leurs clés cafés associés. <br><br>Une clé café permet à un utilisateur de payer son café aux machines à cafés de son établissement.
    Nous n'avons pas eu à aller aussi loin, nous devions réaliser un "front" sous Angular, récupérant les informations via une API créer sous Symfony.<br>
    Ainsi qu'un "back" sous Symfony 3.4.<br> Je me suis occupé de la partie "back".
  `,
  IzenTravel: `
    Dans le cadre de notre 2<sup>ème</sup> année au sein de l'ISEN Brest, afin de concrétiser nos connaissances, nous avons eu à réaliser un site d'agence de voyage.<br>
    Sur lequel on pouvait trouver les différents voyages ajoutés par les administrateurs. Nous avions donc à coder un "font" et un "back".
  `,
  FOA: `
    En début d'année 2020, je me suis lancé dans l'aventure du Forum Ouest Avenir.<br><br> Ce forum regroupant entreprises, start-up et écoles a lieu tous les ans à Brest.
    Je suis chargé de la trésorerie de cette association (50 000€ de budget).
  `,
};
var projectsRessources = {
  HUSH: ``,
  RobotPompier: ``,
  WeatherDashboard: ``,
  AmbassadeurIsen: ``,
  BuyNothingDay: `
    <div class="project-ress">
      <a href="https://www.youtube.com/watch?v=D_1l7at0UGI&t=1s" style="background:black;color:white;padding:5px;">
    Voir la vidéo</a>
    </div>
  `,
  AtaxxReloaded: `
    <div class="project-ress">
      <a href="https://www.youtube.com/watch?v=Q1M6kIj7YQg" style="background:black;color:white;padding:5px;">
    Voir la vidéo</a>
    </div>
  `,
  CustomIphone: ``,
  KronosShop: ``,
  KronosRespo: ``,
  Louie21: `<div class="project-ress">
  <a href="https://www.louie21.fr/" style="background:black;color:white;padding:5px;">
Visiter le site</a>
</div> `,
  RenovaService:`<div class="project-ress">
  <a href="https://www.renovaservice.fr/" style="background:black;color:white;padding:5px;">
Visiter le site</a>
</div> `,
  Keykof:``,
  IzenTravel:``,
  FOA:`<div class="project-ress">
  <a href="https://forumouestavenir.com/" style="background:black;color:white;padding:5px;">
Visiter le site</a>
</div> `
};

function setProject(project) {
  $("#project-carousel").slick("unslick");
  $("#project-thumbnails img").unbind("click");
  var str="";

  for(var i=1; i<=projectsImage[project]; i++)
    str += "<img src='img/projects/" + project + "/" + project + "_" + i + ".jpg'/>";

  $(".project-title").html(projectsTitle[project]);
  $("#project-carousel").html(str);
  $("#project-thumbnails").html(str);
  $("#project-table").html(projectsInfo[project]);
  $("#project-desc").html(projectsDescription[project]);

  if(projectsRessources[project] === "")
    $("#project-ress-title").hide();
  else
    $("#project-ress-title").show();
  $("#project-ressources").html(projectsRessources[project]);

  startSlick();
}
