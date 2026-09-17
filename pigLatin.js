const input = process.argv[2];
const words = input.split(' ');
const vowels = ['a', 'e', 'i', 'o', 'u'];
const translatedWords = words.map(word => {
    const firstLetter = word[0];
    const secondLetter = word[1];
    const isVowel = ['a', 'e', 'i', 'o', 'u'].includes(firstLetter.toLowerCase());
    const isSecondLetterVowel = vowels.includes(secondLetter.toLowerCase());
        if (isVowel) {
            return word + 'way';
        }
        if (!isVowel && isSecondLetterVowel) {
            return word.slice(1) + firstLetter + 'ay';
        }
        if (!isVowel && !isSecondLetterVowel) {
            return word.slice(2) + firstLetter + secondLetter + 'ay';
        }
});
console.log(translatedWords.join(' '));
