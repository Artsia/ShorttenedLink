const tokenKey = "";
let longURL = '';
let shortURL = '';

let txtFieldId = document.getElementById('txtField');
let truncResultId = document.getElementById('truncResult');
let btnId = document.getElementById('btn');


/*Uses the fetch API*/

function fTruncateURL() {

    longURL = txtFieldId.value;


    fetch(`https://tinyurl.com/api-create.php?url=${longURL}`, {
        headers: {
            'Authorization': `Bearer ${tokenKey}`,
            'Content-Type': 'application/json'

        }
    }).then(response => response.text())
        .then(result => {
            shortURL = result;
            truncResultId.textContent = shortURL;
            console.log(shortURL);
        })
        .catch((e) => {
            console.log(e);
        })


}

