var textcontent = 1
const infocontent = document.getElementById('text-1');
const referalcontent = document.getElementById('text-2');
const gamecontent = document.getElementById('text-3');

function getInfo(){
textcontent = 1
if(textcontent == 1){
  infocontent.style.display = 'block';
  
  gamecontent.style.display = 'none';
  textcontent = 1;
   
}
else{
    console.log('info content is not found')
}}
function getReferal(){
    textcontent = 2 
    if(textcontent == 2){
        infocontent.style.display = 'none';
      
        gamecontent.style.display = 'none';
        textcontent = 2;
        
    }
    else{
        console.log('referal content is not found')
    }
}
function getGame(){
    textcontent = 3
    if(textcontent == 3){
        infocontent.style.display = 'none';
       
        gamecontent.style.display = 'block';
        textcontent = 3;
        
    }
    else{
        console.log('game content is not found')
    }
}   
let Language  = 'rus'
let count = 0

    
    function chooselang() {
        var modal = document.getElementById("languageModal");
        modal.style.display = "block";
    }
    
    function closeModal() {
        var modal = document.getElementById("languageModal");
        modal.style.display = "none";
    }
    
    

function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(function() {
        console.log('Copying to clipboard was successful!');
        alert('Copied to clipboard!');
    }, function(err) {
        console.error('Could not copy text: ', err);
        alert('Failed to copy text. Please try again.');
    });
}