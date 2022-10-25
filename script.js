let button = document.getElementById('btn')
button.addEventListener('click', ()=> {
    console.log('add')
    let wordcount = document.getElementById('text-area').value;
    wordcount = wordcount.match(/\w+/g)
    wordcount = wordcount.length;
    console.log(wordcount)
    document.getElementById('count_data').innerHTML = "Total words : " + wordcount;   

})

