const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
     '/': ' ',
};

function decode(expr) {
  let temp = ''
    let morseCode = []
    expr.replace('11', '-').replace('10', '.').replace('0', '')
    for (let i = 10; i <= expr.length; i = i + 10) {
        temp = expr.slice(i - 10, i)//
        if (temp === '**********') temp = '/'
        morseCode.push(temp.replaceAll('11', '-').replaceAll('10', '.').replaceAll('0', ''))
    }
    return morseCode.map(item => MORSE_TABLE[item]).join('')
}

module.exports = {
    decode
}
