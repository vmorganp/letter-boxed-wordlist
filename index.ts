async function get_valid_words(box: string) {
    let pruned: string[] = [];
    let valid_letters = new RegExp('^[' + box + ']*$')
    let duplicate_chars = new RegExp('(.)\\1')
    let same_side_check = new RegExp(`[${box.substring(0, 3)}]{2,}|[${box.substring(3, 6)}]{2,}|[${box.substring(6, 9)}]{2,}|[${box.substring(9, 12)}]{2,}`)
    let words = await fetchWordList()
    words.forEach(word => {
        word = word.trim()
        if (valid_letters.test(word) && !duplicate_chars.test(word) && !same_side_check.test(word)) {
            pruned.push(word)
        }
    });
    return pruned
}
async function fetchWordList() {
    const response = await fetch('twl06.txt', {
    });
    const data = await response.text();
    const words = data.split("\n").slice(2,)
    return words
}

