const {default: axios} = require("axios")


const pesannya = `Dasar Penipu Dongooooooooooooooooooo!`
const url = `https://api.telegram.org/bot7086188753:AAHjCA_82Oi4v1LYJ-sP-v-7WQx-KZffY6A/sendMessage?parse_mode=markdown&chat_id=6361732536&text=${pesannya.split(" ").join("%20")}`

async function sendMessage() {
    try {
        while (true) {
            await axios.get(url)
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