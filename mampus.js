const {default: axios} = require("axios")


let pesannya = `Dasar Penipu Dongooooooooooooooooooo!` // isi pesan yang akan dikirim
pesannya = pesannya.split(" ").join("%20")
const url = `https://api.telegram.org/bot7086188753:AAHjCA_82Oi4v1LYJ-sP-v-7WQx-KZffY6A/sendMessage?parse_mode=markdown&chat_id=6361732536&text=` 

// isi urlnya di atas dengan url bot telegram yang sudah di dapatkan

const [baseURL, textParam] = url.split('&text=');
async function sendMessage() {
    try {
        while (true) {
            await axios.get(baseURL+"&text="+pesannya)
                .then((response) => {
                    if (response.status == 200) {
                        console.log(response)
                        console.log("Message sent!")

                    }
                })
        }
    } catch (error) {
        console.log("API down!")
        sendMessage();
    }
}

sendMessage()