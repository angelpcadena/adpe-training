<template>
    <v-form ref="form" v-model="valid" lazy-validation @submit.prevent="sendMessage">
        <v-text-field label="Nombre completo" v-model="fromName" :rules="requiredRules" required>
        </v-text-field>
        <v-text-field label="Teléfono" v-model="fromPhone" type="tel" mask="phone" :rules="requiredRules" required>
        </v-text-field>
        <v-text-field label="Correo electrónico" v-model="fromEmail" type="email" :rules="fromEmailRules" required>
        </v-text-field>
        <v-textarea label="Tu mensaje" v-model="message" :rules="requiredRules" required>
        </v-textarea>
        <v-btn large round depressed color="primary darken-1" type="submit" :disabled="!valid">
            Enviar
        </v-btn>
    </v-form>
</template>

<script>
    import * as emailjs from "emailjs-com"

    emailjs.init("user_4jmN7MyMcnGssOownRv9D")

    export default {
        data() {
            return {
                valid: true,
                fromName: "",
                fromEmail: "",
                fromPhone: "",
                origin: "landing",
                message: "Hola, me gustaria recibir más información",

                requiredRules: [
                    v => !!v || "Campo requerido"
                ],
                fromEmailRules: [
                    v => !!v || "Campo requerido",
                    v => /.+@.+/.test(v) || "El correo electrónico es invalido"
                ]
            }
        },
        methods: {
            sendMessage() {
                if (!this.$refs.form.validate()) return

                let templateParams = {
                    "from_name": this.fromName,
                    "from_email": this.fromEmail,
                    "from_phone": this.fromPhone,
                    "reply_to": this.fromEmail,
                    "origin": this.origin,
                    "message_html": this.message,
                }

                emailjs.send("gmail", "template_0f6Kr8Gq", templateParams)
                    .then(response => {
                        alert("¡Gracias por tu interés!")
                    }, error => {
                        alert('Lo sentimos, ocurrió un error y tu información no fue enviada, favor de intentar nuevamente')
                    })

                //alert("clicked")
            }
        }
    }
</script>