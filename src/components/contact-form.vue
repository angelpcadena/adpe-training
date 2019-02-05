<template>
    <v-form @submit.prevent="sendMessage">
        <v-text-field label="Nombre completo">
        </v-text-field>
        <v-text-field label="Email">
        </v-text-field>
        <v-textarea label="Tu mensaje">
        </v-textarea>
        <v-btn primary type="submit">
            Enviar
        </v-btn>
    </v-form>
</template>

<script>
    import * as emailjs from "emailjs-com"

    emailjs.init("user_4jmN7MyMcnGssOownRv9D")

    export default {
        data() {
            return { }
        },
        methods: {
            sendMessage() {
                alert("clicked")
            }
        }
    }
</script>