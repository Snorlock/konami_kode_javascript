var section_keys = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
var firstname_letter_keys = [81, 87, 69, 82, 84, 89, 49, 50, 51, 52];
var social_media_keys = [37, 39, 38, 40, 32, 32, 17];
var pressed_index = 0;
var cheat_switch = false;

$(document).ready(function() {
    if($("#message_box").html().indexOf('( ¬‿¬)')!=-1) {
        cheat_switch = true;
    }
})

$(document).keydown(function(e){
    if(!cheat_switch) {
        if(e.keyCode === section_keys[pressed_index]){
            pressed_index++;
            if(pressed_index === section_keys.length){
                pressed_index = 0;
                getSection()
            }
        }else if(e.keyCode === firstname_letter_keys[pressed_index]) {
            pressed_index++;
            if(pressed_index === firstname_letter_keys.length){
                pressed_index = 0;
                getFirstnameLetter()
            }
        }else if(e.keyCode === social_media_keys[pressed_index]) {
            pressed_index++;
            if(pressed_index === social_media_keys.length){
                pressed_index = 0;
                getSnapchatSocialMedia()
            }
        }else{
            pressed_index = 0;
        };
    }
});

function getSection() {
    $.get('URL', function(section) {
        alert("Personen er i seksjon " + section)
    })
}

function getFirstnameLetter() {
    $.get('URL', function(firstLetter) {
        alert("Første bokstaven i fornavnet er "+firstLetter)
    })
}

function getSnapchatSocialMedia() {
    $.get('URL', function(username) {
        if(username) {
            alert("Personen har snapchat brukernavn "+username)
        }
        else {
            alert("Denne personen har ikke snapchat brukernavn, prøv å få den personen til å legge til i sosiale medier")
        }
    })
}
