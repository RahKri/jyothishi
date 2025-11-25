// Configuration: YOUR NUMBER
const WHATSAPP_NUMBER = "91 9496793866"; 

function contactWhatsApp(customMessage) {
    let msgToSend = customMessage;

    if (!msgToSend || msgToSend.includes('Hello')) {
        // Default Message
        msgToSend = "നമസ്കാരം, വെബ്സൈറ്റ് കണ്ടിട്ടാണ് മെസ്സേജ് ചെയ്യുന്നത്. കൺസൾട്ടേഷനെക്കുറിച്ച് കൂടുതൽ വിവരങ്ങൾ അറിയണം.";
    }

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msgToSend)}`;
    window.open(url, '_blank');
}
