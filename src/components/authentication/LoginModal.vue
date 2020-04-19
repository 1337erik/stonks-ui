<template>

    <b-modal
        id="login-modal"
        title="Meta Level Login"
        :no-close-on-backdrop="true"
        :no-close-on-esc="true"
        :hide-footer="true"
        v-model=" isOpen ">

        <b-form @submit.prevent=" attemptLogin ">

            <b-form-group
                id="login-input-group-1"
                label="Email address:"
                label-for="login-email"
                description="We'll never share or sell your data. Suck it Zuckerburg.">

                <b-form-input
                    id="login-email"
                    v-model="form.email"
                    type="email"
                    required
                    placeholder="Enter email">
                </b-form-input>
            </b-form-group>

            <b-form-group id="login-input-group-2" label="Your Password:" label-for="login-password">

                <b-form-input
                    id="login-password"
                    type="password"
                    v-model=" form.password"
                    required
                    placeholder="Password">
                </b-form-input>
            </b-form-group>

            <div class="d-flex justify-content-end mt-4">

                <transition mode="out-in" name="slide-fade">

                    <p v-if=" error " class="error-msg">{{ error }}</p>
                </transition>

                <b-button type="button" variant="default" @click=" toggleLoginModal ">Cancel</b-button>
                <b-button type="submit" variant="primary" class="ml-2">Submit</b-button>
            </div>
        </b-form>
    </b-modal>
</template>

<script>
    import { mapGetters, mapActions } from 'vuex';

    export default {

        name: "login-modal",
        data() {

            return {

                form : {
                    // TODO => clear these out lmfao

                    email    : "erikpwhite@gmail.com",
                    password : "password"
                }
            };
        },
        computed: {

            ...mapGetters({

                loginModalActive : 'auth/loginModalActive',
                error            : 'auth/error'
            }),
            isOpen : {

                get: function () {

                    return this.loginModalActive;
                },
                set: function (){

                    this.toggleLoginModal();
                }
            }
        },
        methods: {

            ...mapActions({

                toggleLoginModal : 'auth/toggleLoginModal',
                login            : 'auth/login'
            }),
            attemptLogin(){

                this.login({ email: this.form.email, password: this.form.password });
            }
        }
    }
</script>

<style scoped>

    .error-msg {

        color: red;
        margin: 0;
        position: absolute;
        left: 20px;
    }
</style>