const champions = [
  {
    name: "Aatrox",
    img: "https://ddragon.leagueoflegends.com/cdn/13.12.1/img/champion/Aatrox.png",
    cost: "5",
  },
  {
    name: "Ahri",
    img: "https://ddragon.leagueoflegends.com/cdn/13.12.1/img/champion/Ahri.png",
    cost: "5",
  },
  {
    name: "Akshan",
    img: "https://ddragon.leagueoflegends.com/cdn/13.12.1/img/champion/Akshan.png",
    cost: "3",
  },
  {
    name: "Aphelios",
    img: "https://ddragon.leagueoflegends.com/cdn/13.12.1/img/champion/Aphelios.png",
    cost: "4",
  },
  {
    name: "Ashe",
    img: "https://ddragon.leagueoflegends.com/cdn/13.12.1/img/champion/Ashe.png",
    cost: "2",
  },
  {
    name: "Azir",
    img: "https://ddragon.leagueoflegends.com/cdn/13.12.1/img/champion/Azir.png",
    cost: "4",
  },
  {
    name: "Bel'Veth",
    img: "https://ddragon.leagueoflegends.com/cdn/13.12.1/img/champion/Belveth.png",
    cost: "5",
  },
  {
    name: "Cassiopeia",
    img: "https://ddragon.leagueoflegends.com/cdn/13.12.1/img/champion/Cassiopeia.png",
    cost: "1",
  },
  {
    name: "Cho'Gath",
    img: "https://ddragon.leagueoflegends.com/cdn/13.12.1/img/champion/Chogath.png",
        cost: "1",
  },
  {
    name: "Darius",
    img: "https://ddragon.leagueoflegends.com/cdn/13.12.1/img/champion/Darius.png",
    cost: "3",
  },
  {
    name: "Ekko",
    img: "https://ddragon.leagueoflegends.com/cdn/13.12.1/img/champion/Ekko.png",
    cost: "3",
  },
  {
    name: "Galio",
    img: "https://ddragon.leagueoflegends.com/cdn/13.12.1/img/champion/Galio.png",
    cost: "2",
  },
  {
    name: "Garen",
    img: "https://ddragon.leagueoflegends.com/cdn/13.12.1/img/champion/Garen.png",
    cost: "3",
  },
  {
    name: "Gwen",
    img: "https://ddragon.leagueoflegends.com/cdn/13.12.1/img/champion/Gwen.png",
    cost: "4",
  },
  {
    name: "Heimerdinger",
    img: "https://ddragon.leagueoflegends.com/cdn/13.12.1/img/champion/Heimerdinger.png",
    cost: "5",
  },
  {
    name: "Irelia",
    img: "https://ddragon.leagueoflegends.com/cdn/13.12.1/img/champion/Irelia.png",
    cost: "1",
  },
  {
    name: "Jarvan IV",
    img: "https://ddragon.leagueoflegends.com/cdn/13.12.1/img/champion/JarvanIV.png",
    cost: "4",
  },
  {
    name: "Jayce",
    img: "https://ddragon.leagueoflegends.com/cdn/13.12.1/img/champion/Jayce.png",
    cost: "3",
  },
  {
    name: "Jhin",
    img: "https://ddragon.leagueoflegends.com/cdn/13.12.1/img/champion/Jhin.png",
    cost: "1",
  },
  {
    name: "Jinx",
    img: "https://ddragon.leagueoflegends.com/cdn/13.12.1/img/champion/Jinx.png",
    cost: "2",
  },
  {
    name: "K'Sante",
    img: "https://ddragon.leagueoflegends.com/cdn/13.12.1/img/champion/KSante.png",
    cost: "5",
  },
  {
    name: "Kai'Sa",
    img: "https://ddragon.leagueoflegends.com/cdn/13.12.1/img/champion/Kaisa.png",
    cost: "4",
  },
  {
    name: "Kalista",
    img: "https://ddragon.leagueoflegends.com/cdn/13.12.1/img/champion/Kalista.png",
    cost: "3",
  },
  {
    name: "Karma",
    img: "https://ddragon.leagueoflegends.com/cdn/13.12.1/img/champion/Karma.png",
    cost: "3",
  },
  {
    name: "Kassadin",
    img: "https://ddragon.leagueoflegends.com/cdn/13.12.1/img/champion/Kassadin.png",
    cost: "2",
  },
  {
    name: "Katarina",
    img: "https://ddragon.leagueoflegends.com/cdn/13.12.1/img/champion/Katarina.png",
    cost: "3",
  },
  {
    name: "Kayle",
    img: "https://ddragon.leagueoflegends.com/cdn/13.12.1/img/champion/Kayle.png",
    cost: "1",
  },
  {
    name: "Kled",
    img: "https://ddragon.leagueoflegends.com/cdn/13.12.1/img/champion/Kled.png",
    cost: "2",
  },
  {
    name: "Lissandra",
    img: "https://ddragon.leagueoflegends.com/cdn/13.12.1/img/champion/Lissandra.png",
    cost: "3",
  },
  {
    name: "Lux",
    img: "https://ddragon.leagueoflegends.com/cdn/13.12.1/img/champion/Lux.png",
    cost: "4",
  },
  {
    name: "Malzahar",
    img: "https://ddragon.leagueoflegends.com/cdn/13.12.1/img/champion/Malzahar.png",
    cost: "1",
  },
  {
    name: "Maokai",
    img: "https://ddragon.leagueoflegends.com/cdn/13.12.1/img/champion/Maokai.png",
    cost: "1",
  },
  {
    name: "Nasus",
    img: "https://ddragon.leagueoflegends.com/cdn/13.12.1/img/champion/Nasus.png",
    cost: "4",
  },
  {
    name: "Orianna",
    img: "https://ddragon.leagueoflegends.com/cdn/13.12.1/img/champion/Orianna.png",
    cost: "1",
  },
  {
    name: "Poppy",
    img: "https://ddragon.leagueoflegends.com/cdn/13.12.1/img/champion/Poppy.png",
    cost: "1",
  },
  {
    name: "Rek'Sai",
    img: "https://ddragon.leagueoflegends.com/cdn/13.12.1/img/champion/RekSai.png",
    cost: "3",
  },
  {
    name: "Renekton",
    img: "https://ddragon.leagueoflegends.com/cdn/13.12.1/img/champion/Renekton.png",
    cost: "1",
  },
  {
    name: "Ryze",
    img: "https://ddragon.leagueoflegends.com/cdn/13.12.1/img/champion/Ryze.png",
    cost: "5",
  },
  {
    name: "Samira",
    img: "https://ddragon.leagueoflegends.com/cdn/13.12.1/img/champion/Samira.png",
    cost: "1",
  },
  {
    name: "Sejuani",
    img: "https://ddragon.leagueoflegends.com/cdn/13.12.1/img/champion/Sejuani.png",
    cost: "4",
  },
  {
    name: "Senna",
    img: "https://ddragon.leagueoflegends.com/cdn/13.12.1/img/champion/Senna.png",
    cost: "5",
  },
  {
    name: "Sett",
    img: "https://ddragon.leagueoflegends.com/cdn/13.12.1/img/champion/Sett.png",
    cost: "2",
  },
  {
    name: "Shen",
    img: "https://ddragon.leagueoflegends.com/cdn/13.12.1/img/champion/Shen.png",
    cost: "4",
  },
  {
    name: "Sion",
    img: "https://ddragon.leagueoflegends.com/cdn/13.12.1/img/champion/Sion.png",
    cost: "5",
  },
  {
    name: "Sona",
    img: "https://ddragon.leagueoflegends.com/cdn/13.12.1/img/champion/Sona.png",
    cost: "3",
  },
  {
    name: "Soraka",
    img: "https://ddragon.leagueoflegends.com/cdn/13.12.1/img/champion/Soraka.png",
    cost: "2",
  },
  {
    name: "Swain",
    img: "https://ddragon.leagueoflegends.com/cdn/13.12.1/img/champion/Swain.png",
    cost: "2",
  },
  {
    name: "Taliyah",
    img: "https://ddragon.leagueoflegends.com/cdn/13.12.1/img/champion/Taliyah.png",
    cost: "2",
  },
  {
    name: "Taric",
    img: "https://ddragon.leagueoflegends.com/cdn/13.12.1/img/champion/Taric.png",
    cost: "3",
  },
  {
    name: "Teemo",
    img: "https://ddragon.leagueoflegends.com/cdn/13.12.1/img/champion/Teemo.png",
    cost: "2",
  },
  {
    name: "Tristana",
    img: "https://ddragon.leagueoflegends.com/cdn/13.12.1/img/champion/Tristana.png",
    cost: "1",
  },
  {
    name: "Urgot",
    img: "https://ddragon.leagueoflegends.com/cdn/13.12.1/img/champion/Urgot.png",
    cost: "4",
  },
  {
    name: "Vel'Koz",
    img: "https://ddragon.leagueoflegends.com/cdn/13.12.1/img/champion/Velkoz.png",
    cost: "3",
  },
  {
    name: "Vi",
    img: "https://ddragon.leagueoflegends.com/cdn/13.12.1/img/champion/Vi.png",
    cost: "2",
  },
  {
    name: "Viego",
    img: "https://ddragon.leagueoflegends.com/cdn/13.12.1/img/champion/Viego.png",
    cost: "1",
  },
  {
    name: "Warwick",
    img: "https://ddragon.leagueoflegends.com/cdn/13.12.1/img/champion/Warwick.png",
    cost: "2",
  },
  {
    name: "Yasuo",
    img: "https://ddragon.leagueoflegends.com/cdn/13.12.1/img/champion/Yasuo.png",
    cost: "4",
  },
  {
    name: "Zed",
    img: "https://ddragon.leagueoflegends.com/cdn/13.12.1/img/champion/Zed.png",
    cost: "2",
  },
  {
    name: "Zeri",
    img: "https://ddragon.leagueoflegends.com/cdn/13.12.1/img/champion/Zeri.png",
    cost: "4",
  },
];
export default champions;

