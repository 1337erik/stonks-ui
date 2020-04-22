<template>

    <b-modal
        id="register-modal"
        title="Meta Level Register"
        :no-close-on-backdrop="true"
        :no-close-on-esc="true"
        :hide-footer="true"
        v-model=" isOpen ">

        <b-form @submit.prevent=" attemptRegister ">

            <b-form-group
                id="register-name"
                label="Your Name:"
                label-for="register-name"
                description="Full name, fake name, I honestly don't care."
                :invalid-feedback=" nameFeedback "
                :state=" nameValid ">

                <b-form-input
                    id="register-name"
                    v-model="form.name"
                    type="text"
                    required
                    placeholder="Enter name">
                </b-form-input>
            </b-form-group>

            <b-form-group
                id="register-email"
                label="Email Address:"
                label-for="register-email"
                description="I'll never share or sell your data. Suck it Zuckerburg."
                :invalid-feedback=" emailFeedback "
                :state=" emailValid ">

                <b-form-input
                    id="register-email"
                    v-model="form.email"
                    type="email"
                    required
                    placeholder="Enter email">
                </b-form-input>
            </b-form-group>

            <b-form-group
                id="register-password"
                label="Your Password:"
                label-for="register-password"
                :invalid-feedback=" passwordFeedback "
                :state=" passwordValid ">

                <b-form-input
                    id="register-password"
                    type="password"
                    v-model=" form.password"
                    required
                    placeholder="Password">
                </b-form-input>
            </b-form-group>

            <b-form-group
                id="register-password-confirmation"
                label="Confirm Password:"
                label-for="register-password-confirmation"
                :invalid-feedback=" passwordConfirmationFeedback "
                :state=" passwordConfirmationValid ">

                <b-form-input
                    id="register-password-confirmation"
                    type="password"
                    v-model=" form.password_confirmation "
                    required
                    placeholder="Confirm Password">
                </b-form-input>
            </b-form-group>

            <div class="d-flex justify-content-end mt-4">

                <b-button type="button" variant="default" @click=" toggleRegisterModal ">Cancel</b-button>
                <b-button type="submit" variant="primary" class="ml-2">Submit</b-button>
            </div>
        </b-form>
    </b-modal>
</template>

<script>
    import { mapGetters, mapActions } from 'vuex';

    export default {

        name: "register-modal",
        data() {

            return {

                form : {

                    name                  : "",
                    email                 : "",
                    password              : "",
                    password_confirmation : ""
                }
            };
        },
        computed: {

            ...mapGetters({

                registerModalActive : 'auth/registerModalActive',
                errors              : 'auth/errors'
            }),
            isOpen : {

                get: function () {

                    return this.registerModalActive;
                },
                set: function (){

                    this.toggleRegisterModal();
                }
            },
            // TODO => this is fucking annoying.. I want to make a factory function but the bootstrap-vue component doesnt like having it's property-states being functions.. so here we are -.-
            nameValid(){ return this.errors ? !Object.prototype.hasOwnProperty.call( this.errors, "name" ) : true; },
            nameFeedback(){ return this.errors && Object.prototype.hasOwnProperty.call( this.errors, "name" ) ? this.errors[ 'name' ].join( ' ' ) : ''; },
            emailValid(){ return this.errors ? !Object.prototype.hasOwnProperty.call( this.errors, "email" ) : true; },
            emailFeedback(){ return this.errors && Object.prototype.hasOwnProperty.call( this.errors, "email" ) ? this.errors[ 'email' ].join( ' ' ) : ''; },
            passwordValid(){ return this.errors ? !Object.prototype.hasOwnProperty.call( this.errors, "password" ) : true; },
            passwordFeedback(){ return this.errors && Object.prototype.hasOwnProperty.call( this.errors, "password" ) ? this.errors[ 'password' ].join( ' ' ) : ''; },
            passwordConfirmationValid(){ return this.errors ? !Object.prototype.hasOwnProperty.call( this.errors, "password_confirmation" ) : true; },
            passwordConfirmationFeedback(){ return this.errors && Object.prototype.hasOwnProperty.call( this.errors, "password_confirmation" ) ? this.errors[ 'password_confirmation' ].join( ' ' ) : ''; }
        },
        methods: {

            ...mapActions({

                toggleRegisterModal : 'auth/toggleRegisterModal',
                register            : 'auth/register',
            }),
            attemptRegister(){

                this.register({ email: this.form.email, password: this.form.password, password_confirmation : this.form.password_confirmation, name: this.form.name });
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