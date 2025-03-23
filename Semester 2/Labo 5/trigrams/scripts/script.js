function getTrigrams(wachtwoord) {
    const wachtwoordArray = wachtwoord.split('');
    const trigrams = [];

    for (let i = 0; i < wachtwoordArray.length - 2; i++) {
        const trigram = wachtwoordArray.slice(i, i + 3).join('');
        if (!trigrams.includes(trigram)) {
            trigrams.push(trigram);
        }
    }

    return trigrams;
}

const woord = 'onoorbaar';
const trigrams = getTrigrams(woord);

console.log(trigrams);