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
                id="login-email"
                label="Email address:"
                label-for="login-email"
                :invalid-feedback=" emailFeedback "
                :state=" emailValid ">

                <b-form-input
                    id="login-email"
                    v-model="form.email"
                    type="email"
                    required
                    placeholder="Enter email">
                </b-form-input>
            </b-form-group>

            <b-form-group
                id="login-input-group-2"
                label="Your Password:"
                label-for="login-password"
                :invalid-feedback=" passwordFeedback "
                :state=" passwordValid ">

                <b-form-input
                    id="login-password"
                    type="password"
                    v-model=" form.password"
                    required
                    placeholder="Password">
                </b-form-input>
            </b-form-group>

            <div class="d-flex justify-content-end mt-4 align-items-center">

                <a class="pw-reset-link" :href=" pw_reset_link " target="_blank">Reset Password</a>

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

                pw_reset_link : process.env.VUE_APP_API_BASE_URL + '/password/reset',
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
                errors           : 'auth/errors'
            }),
            isOpen : {

                get: function () {

                    return this.loginModalActive;
                },
                set: function (){

                    this.toggleLoginModal();
                }
            },
            emailValid(){ return this.errors ? !Object.prototype.hasOwnProperty.call( this.errors, "email" ) : true; },
            emailFeedback(){ return this.errors && Object.prototype.hasOwnProperty.call( this.errors, "email" ) ? this.errors[ 'email' ].join( ' ' ) : ''; },
            passwordValid(){ return this.errors ? !Object.prototype.hasOwnProperty.call( this.errors, "password" ) : true; },
            passwordFeedback(){ return this.errors && Object.prototype.hasOwnProperty.call( this.errors, "password" ) ? this.errors[ 'password' ].join( ' ' ) : ''; },

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

    .pw-reset-link {

        margin: 0;
        position: absolute;
        left: 20px;
    }
</style>