
function sendViaEmail() {
    chrome.tabs.getSelected(null, function(tab) {
        // tab object has all the information
        window.open("mailto:?subject="+tab.title+"&body="+tab.url)
    });
}

function sendViaIM() {
    chrome.tabs.getSelected(null, function(tab) {
        // tab object has all the information
        copyToClipboard(tab.title+'\n'+tab.url)
        window.open('sip:Some.Guy@there.com')
    });
}

// Copy text to the clipboard function
// uses 'url' input element to select text
// parameters: text - text to be copied to the clipboard
function copyToClipboard( text )
{
    var input = document.getElementById( 'url' );
    input.value = text;
    input.focus();
    input.select();
    document.execCommand( 'Copy' );
}