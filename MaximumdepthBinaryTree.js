function funWithAnagram(text) {
    for(let i = 0; i < text.length; i++) {
        let newArr = [];
        let word = text[i];
        for(let j = i + 1; j < text.length; j++){
            let word2 = text[j];
            if(word.length === word2.length && word.split("").sort().join() === word2.split("").sort().join()) {
                text.splice(j, 1); 
                j--;
            }
        }

    }

    return text.sort();
}

let str = ['code', 'doce', 'ecod', 'framer', 'frame'];
// result = ['code', framer, 'frame]


let message = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis partu sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore ver rup. Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica, sport etc, litot Europa."

function vanity(message) {
    let lengthOfString = message.length;
    const segmentsNum = Math.ceil(lengthOfString / 160);
    let newArr = message.split(' ');
    let counter = 0; 
    let start = 0;
    let pointer = 0; 

    for(let i = 0; i < segmentsNum; i++) {
        let lengthOfWord = newArr[start].length + 1;
        while (counter <= 160 && counter + lengthOfWord <= 160){
            counter+=newArr[start].length + 1;
            newArr.splice()
            start++;
        } 


        str+= "(" + (i + 1) + "/" + segmentsNum + ")\n";
        counter = 0;

    }

    return str;
}

console.log(vanity(message));