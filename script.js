function updateApp() {
    const now = new Date();
    const month = now.getMonth() + 1;
    const hour = now.getHours();
    const day = now.getDay(); // 0: Vasárnap, 1: Hétfő ... 6: Szombat

    // A dátum és az idő kiírása
    const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        weekday: 'long',
        hour: '2-digit',
        minute: '2-digit',
    };
    document.getElementById('datetime').innerText = now.toLocaleDateString('hu-HU', options);

    // Évszakok
    let seasonText = '';
    let seasonClass = '';
    if ([3, 4, 5].includes(month)) {
        seasonText = 'Tavasz';
        seasonClass = 'spring';
    } else if ([6, 7, 8].includes(month)) {
        seasonText = 'Nyár';
        seasonClass = 'summer';
    } else if ([9, 10, 11].includes(month)) {
        seasonText = 'Ősz';
        seasonClass = 'autumn';
    } else {
        seasonText = 'Tél';
        seasonClass = 'winter';
    }
    document.getElementById('season').innerText = seasonText;
    document.body.className = seasonClass;

    // Napszak
    let todText = "";
    if (hour >= 5 && hour < 12) todTxt = "Délelőtt";
    else if (hour >= 12 && hour < 18) todText = "Délután";
    else if (hour >= 18 && hour < 22) todText = "Este";
    else todText = "Éjszaka";
    document.getElementById('tod').innerText = todText;

    // A hét napjaira vonatkozó kedves üzenet
    let dayMessage = '';
    if (day === 1 || day === 2) {
        dayMessage = "A hét elején járunk, kitartást! :)";
    } else if (day === 3 || day === 4) {
        dayMessage = "A hét közepe van, a felén már mindjárt túl vagy! :)! :)";
    } else if (day === 5) {
        dayMessage = "Végre péntek! :)";
    } else {
        dayMessage = "Jó pihenést a hétvégére! :)";
    }        
    document.getElementById('dayMessage').innerText = dayMessage;
}

updateApp();