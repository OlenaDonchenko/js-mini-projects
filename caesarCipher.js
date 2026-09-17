const input = process.argv[2];
const shift = Number(process.argv[3]);
const alphabet = 'abcdefghijklmnopqrstuvwxyz';
const letters = input.toLowerCase().split('');
const whereIsLetter = letters.map((letter) => {
    const index = alphabet.indexOf(letter);
        if (index === -1) {
            return letter;
        }
    const newIndex = ((index + shift) % alphabet.length + alphabet.length) % alphabet.length;
    return alphabet[newIndex];
});
const allText = whereIsLetter.join('');

console.log(allText);
