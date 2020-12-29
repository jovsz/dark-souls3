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
        img: './img/boss/1.png'
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
        img: './img/boss/2.jpg'
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
        img: './img/boss/3.png'
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
        img: './img/boss/4.jpg'
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
        img: './img/boss/5.png'
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
        img: './img/boss/6.jpg'
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
        img: './img/boss/7.jpg'
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
        img: './img/boss/8.jpg'
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
        img: './img/boss/9.png'
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
        drops: 'Soul of Pontiff Sulyvahn ',
        itemDetail: 'Can be used to make Greatsword of the judgment or Profaned Greatsword',
        img: './img/boss/10.jpg'
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
        img: './img/boss/11.png'
    },
    {
        id: 12,
        name: 'Dancer of the Boreal Valley',
        hp: '5115 hp',
        soul: 60000,
        ability: 'Fire/Magic',
        weakness: 'Dark/Lightning',
        resistances: 'Bleed',
        inmune: 'Poison/Toxic/Frost',
        location: 'High Wall of Lothric',
        drops: 'Soul of the Dancer',
        itemDetail: 'Can be used to make Dancer`s Encanted Swords or Soothing sunlight(Miracle)',
        img: './img/boss/12.jpg'
    },
    {
        id: 13,
        name: 'Oceiros, The consumed King',
        hp: '8050 hp',
        soul: 58000,
        ability: 'Magic, causes FP damage',
        weakness: 'Lightning',
        resistances: 'Magic/Bleed',
        inmune: 'Poison/Toxic',
        location: 'Consumed king`s Garden',
        drops: 'Soul of Consumed Oceiros',
        itemDetail: 'Can be used to make White Dragon Breath (Sorcery) or moonlight Greatword',
        img: './img/boss/13.png'
    },
    {
        id: 14,
        name: 'Dragonslayer Armour',
        hp: '4580 hp',
        soul: 64000,
        ability: 'Lightning/Pilgrim Butterfly (Fire/Dark)',
        weakness: 'Frost/Abyssal',
        resistances: 'Dark/Lightning',
        inmune: 'Poison/Toxic/Bleed',
        location: 'Lothric Castle',
        drops: 'Soul of Dragonslayer',
        itemDetail: 'Can be used to make Dragonslayer greataxe or Dragonslayer Greatshield',
        img: './img/boss/14.jpg'
    },
    {
        id: 15,
        name: 'Champion Gundyr',
        hp: '4950 hp',
        soul: 45000,
        ability: 'None',
        weakness: 'Lightning/Frost/Abyssal',
        resistances: 'Poison/Toxic/Bleed',
        inmune: 'None',
        location: 'Untended Graves',
        drops: 'Soul of the champion gundyr',
        itemDetail: 'Can be used to make Gundyr`s halberd or prisoner`s Chain(Ring)',
        img: './img/boss/15.jpg'
    },
    {
        id: 16,
        name: 'Ancient Wyvern',
        hp: '7880 hp',
        soul: 70000,
        ability: 'Fire',
        weakness: 'Lightning/Frost',
        resistances: 'Poison/Toxic/Bleed',
        inmune: 'None',
        location: 'Archdragon Peak',
        drops: 'Dragon head stone',
        itemDetail: 'Used to gain the head of a dragon',
        img: './img/boss/16.jpg'
    },
    {
        id: 17,
        name: 'Lothric and Lorian',
        hp: 'Lorian 4300 hp/ Lorian&Lothric 5700 Hp',
        soul: 85000,
        ability: 'Lorian(Fire/Magic) - Lothric(Physical)',
        weakness: 'Lorian(Lightning/Frost) - Lothric(Physical)',
        resistances: 'Dark',
        inmune: 'Poison/Toxic',
        location: 'Lothric Castle (After Grand Archives)',
        drops: 'Soul of the Twin Princes',
        itemDetail: 'Can be used to make Lothric`s Holy Sword or Lorian`s Greatword. If you have both swords you can transpose them to create the twin prince`s greatsword',
        img: './img/boss/17.jpg'
    },
    {
        id: 18,
        name: 'Nameless King',
        hp: '7100 hp',
        soul: 80000,
        ability: 'Lightning - King of the Storm(Fire)',
        weakness: 'Fire - King of the Storm(Lightning)',
        resistances: 'Lightning - King of the Storm(Fire/Poison/Toxic/Bleed)',
        inmune: 'Poison/Toxic - King of the Storm (None)',
        location: 'Archdragon peak',
        drops: 'Soul of the Nameless King',
        itemDetail: 'Can be used to make Storm curved sword or Dragonslayer swordspear or lightning Storm(Miracle)',
        img: './img/boss/18.jpg'
    }

]



function showMenu() {
    document.getElementById('menu').classList.toggle('hide');
}

function printBoss() {
    const container = document.getElementById('menu-bosses');
    let html = '';

    bosses.forEach((boss) => {
        html += `<li><button onclick="printBossDetail(${boss.id-1})">${boss.name}</a></li>`;
    });
    container.innerHTML = html;
}

function printBossDetail(id) {
    const container = document.getElementById('boss-main');
    let html = '';
    //const index = bosses.findIndex((boss) => boss.id == id);


    html += `
            <h2 class="nameboss">${bosses[id].name}</h2>
            <img src= "${bosses[id].img}">
            <h4>HP</h4>
            <p>${bosses[id].hp}</p>
            <h4>SOULS</h4>
            <p>${bosses[id].soul}</p>  
            <h4>ABILITY</h4>
            <p>${bosses[id].ability}</p>  
            <h4>WEAKNESS</h4>
            <p>${bosses[id].weakness}</p>
            <h4>RESISTANCES</h4>
            <p>${bosses[id].resistances}</p>  
            <h4>INMUNE</h4>
            <p>${bosses[id].inmune}</p>
            <h4>LOCATION</h4>
            <p>${bosses[id].location}</p>
            <h4>DROPS</h4>
            <p>${bosses[id].drops} : ${bosses[id].itemDetail}</p>
                        
    `;
    container.innerHTML = html;
}
printBoss();