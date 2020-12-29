const bosses = [{
        id: 1,
        name: 'Ludex Gundyr',
        hp: '1055 hp',
        soul: 3000,
        ability: 'none',
        weakness: 'Frost/Fire(Phase2)',
        resistances: 'Dard/Bleed',
        inmune: 'Posion/Toxic',
        location: 'Cementery of Ash',
        drops: 'Coiled Sword',
        itemDetail: 'Active the bonfire warp in Firelink Shrine Bonfire',
        img: '../../img/boss/1.png'
    },
    {
        id: 2,
        name: 'Vordt Of the Boreal Valley',
        hp: '1330 hp',
        soul: 3000,
        ability: 'Frost',
        weakness: 'Dark/Fire',
        resistances: 'Slash/Thrust',
        inmune: 'Posion/Toxic/Bleed/Frost',
        location: 'High Wall of Lothric',
        drops: 'Soul of Boreal Valley Vordt',
        itemDetail: 'Can be used to make Pontff`s left eye(Ring) or Vordt`s great hammer',
        img: '../../img/boss/2.jpg'
    },
    {
        id: 3,
        name: 'Curse-Roted Greatwood',
        hp: '5600 hp',
        soul: 7000,
        ability: 'None',
        weakness: 'Slash/Thrust/Fire',
        resistances: 'None',
        inmune: 'Posion/Toxic/Bleed/Frost',
        location: 'Undead Settlement',
        drops: 'Soul of the Rotted Greatwood',
        itemDetail: 'Can be usead to make Hollowslayer greatsword or Astor`s spear',
        img: '../../img/boss/3.png'
    },
    {
        id: 4,
        name: 'Crystal Sage',
        hp: '2725 hp',
        soul: 8000,
        ability: 'Magic',
        weakness: 'Phycal/Lightning/Poison/Toxic',
        resistances: 'Magic',
        inmune: 'None',
        location: 'Road of Sacrifices',
        drops: 'Soul of Crystal Sage',
        itemDetail: 'Can be used to make Crystal Hail(Sircery) or Crystal Sage`s Rapier',
        img: '../../img/boss/4.jpg'
    },
    {
        id: 5,
        name: 'Abyss Watchers',
        hp: '1550 hp',
        soul: 18000,
        ability: 'Fire',
        weakness: 'Lightning/Backstab',
        resistances: 'Dark/Bleed',
        inmune: 'Poison/Toxic',
        location: 'Farron Keep',
        drops: 'Soul of the Blood of the Wolf',
        itemDetail: 'Can be used to make Farron Greatword or Wolf Knight`s Greatsword',
        img: '../../img/boss/5.jpg'
    },
    {
        id: 6,
        name: 'Deacons of the Deep',
        hp: '4100/300*1 hp',
        soul: 13000,
        ability: 'Fire/Dark',
        weakness: 'Phycal/Backstab/Hollow',
        resistances: 'Magic/Poison/Toxic/Bleed',
        inmune: 'None',
        location: 'Cathedral of the Deep',
        drops: 'Soul of Deacons of the deep',
        itemDetail: 'Can be used to make Deep sould (Sorcery) or Cleric`s candlestick(Sword)',
        img: '../../img/boss/6.jpg'
    },
    {
        id: 7,
        name: 'Hight Lord Wolnir',
        hp: '7050 hp',
        soul: 22000,
        ability: 'Dark',
        weakness: 'None/Bracelets',
        resistances: 'Dark',
        inmune: 'Poison/Toxic/Bleed/Frost',
        location: 'Catacombs of Carthus',
        drops: 'Soul of the High Lord Wolnir',
        itemDetail: 'Can be used to make Black serpent(Pyromancy) or wolnir`s holy sword',
        img: '../../img/boss/7.jpg'
    },
    {
        id: 8,
        name: 'Old Demon King',
        hp: '5300 hp',
        soul: 25000,
        ability: 'Fire',
        weakness: 'Dark(Light)/Demon',
        resistances: 'Fire/Poison/Toxic',
        inmune: 'Bleed/Frost',
        location: 'Smouldering Lake',
        drops: 'Soul of the Old Demon King',
        itemDetail: 'Can be used to make Chaos bed vestiges (Pyromancy) and old King`s Great hammer',
        img: '../../img/boss/8.jpg'
    },
    {
        id: 9,
        name: 'Yhorm The Giant',
        hp: '27830 hp',
        soul: 36000,
        ability: 'Fire',
        weakness: 'Lightning/Storm Ruler (Skill: Storm King)',
        resistances: 'Slash/Thrust',
        inmune: 'Fire/Poison/Toxic/Bleed/Frost',
        location: 'Profaned Capital',
        drops: 'Soul of Yhorm the Giant ',
        itemDetail: 'Can be used to make Yhorm`s Great Machete',
        img: '../../img/boss/9.png'
    },
    {
        id: 10,
        name: 'Pontiff Sulyvhan',
        hp: '5100 hp',
        soul: 28000,
        ability: 'Fire/Magic',
        weakness: 'Lightning(Light)/Thrust',
        resistances: 'Poison/Toxic/Bleed/Frost',
        inmune: 'None',
        location: 'Irithyll of the Boreal Valley',
        drops: 'Soul of Pntiff Sulyvahn ',
        itemDetail: 'Can be used to make Greatsword of the judgment or Profaned Greatsword',
        img: '../../img/boss/10.jpg'
    },
    {
        id: 11,
        name: 'Aldrich, Devourer of Gods',
        hp: '4730 hp',
        soul: 50000,
        ability: 'Magic/Dark/Fire',
        weakness: 'Lightning/Fire/Abyssal',
        resistances: 'Magic/Dark',
        inmune: 'Poison/Toxic/Bleed',
        location: 'Anor Londo',
        drops: 'Soul of Aldrich ',
        itemDetail: 'Can be used to make Lifehunt Scythe(Miracles) or Darkmoon Longbow',
        img: '../../img/boss/9.jpg'
    },
    {
        id: 9,
        name: 'Pontiff Sulyvhan',
        hp: '5100 hp',
        soul: 28000,
        ability: 'Fire/Magic',
        weakness: 'Lightning(Light)/Thrust',
        resistances: 'Poison/Toxic/Bleed/Frost',
        inmune: 'None',
        location: 'Irithyll of the Boreal Valley',
        drops: 'Soul of Pntiff Sulyvahn ',
        itemDetail: 'Can be used to make Greatsword of the judgment or Profaned Greatsword',
        img: '../../img/boss/9.jpg'
    },
]



function showMenu() {
    document.getElementById('menu').classList.toggle('hide');
}

function printBoss() {
    const container = document.getElementById('menu-bosses');
    let html = '';

    bosses.forEach((boss) => {
        html += `<li>${boss.name}</li>`;
    });
    container.innerHTML = html;
}

printBoss();