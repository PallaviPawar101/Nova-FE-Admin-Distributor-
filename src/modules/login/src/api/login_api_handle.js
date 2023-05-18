import axios from "axios"

export default {
    methods: {
        async handleLoginSubmit() {
            try {
                const res = await axios.post(`${process.env.VUE_APP_BASEAPI}login`, {
                    email: this.email,
                    password: this.password
                })
                const data = await res.data;

                // getting current date and adding 30 days of expiry from the current time and date
                var nextMonth = new Date();
                nextMonth.setDate(nextMonth.getDate() + 30);
                var expiresDate = nextMonth.toString();
                console.log(expiresDate);
                document.cookie=`refresh=${data.refreshToken};expires=${expiresDate};secure=httpOnly`
            } catch (err) {
                alert({ message: err.message })
            }
        },
        async handleSignUpSubmit() {
            try {
                const ipres = await axios.get("https://api.ipify.org?format=json");
                let ipdata = await ipres.data;

                await axios.post(`${process.env.VUE_APP_BASEAPI}register`, {
                    email: this.email,
                    password: this.password,
                    ip: ipdata.ip
                })

            } catch (err) {
                alert({ message: err.message })
            }
        }
    }
}