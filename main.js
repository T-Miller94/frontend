//buttons///////////////////////////////////////////////////////////////////////////////////////////////////

//images////////////
$('#dog-button').click(function(){
    $('#result').empty()
    dogButton()
})


$('#cat-button').click(function(){
    $('#result').empty()
    catButton()
})

//facts/////////////
$('#dog-fact-button').click(function(){
    $('#fact-result').empty()
    dogFact()
})

$('#cat-fact-button').click(function(){
    $('#fact-result').empty()
    catFact()
})

//functions///////////////////////////////////////////////////////////////////////////////////////////////////////

//images////////////
function dogButton() {
    $.get('https://dog.ceo/api/breeds/image/random', (data) => {
        let img = $(`<img class="card-image" src="${data.message}">`)
        $('#result').append(img)
    })
}

function catButton() {
    $.get('https://api.thecatapi.com/v1/images/search', (data) => {
        let img = $(`<img class="card-image" src="${data[0].url}">`)
        $('#result').append(img)
    })
}

//facts/////////////
function dogFact() {
    $.get('https://cat-fact.herokuapp.com/facts/random?animal_type=dog&amount=1', (data) => {
        $(data).each(function() {
            let p = $(`<p id="fact-text">${data.text}</p>`)
            $('#fact-result').append(p)
        })
    })
}

function catFact() {
    $.get('https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=1', (data) => {
        $(data).each(function() {
            let p = $(`<p id="fact-text">${data.text}</p>`)
            $('#fact-result').append(p)
        })
    })
}

//loads random img on page-load///////////////////////////////////////////////////////////////////////////////////
function init() {
    let initVal = Math.ceil(Math.random() * 10)
    if(initVal % 2 === 0) {
        dogButton()
    } else {
        catButton()
    }
}
init()