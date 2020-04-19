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
                id="register-input-group-1"
                label="Email address:"
                label-for="register-email"
                description="We'll never share or sell your data. Suck it Zuckerburg.">

                <b-form-input
                    id="register-email"
                    v-model="form.email"
                    type="email"
                    required
                    placeholder="Enter email">
                </b-form-input>
            </b-form-group>

            <b-form-group id="register-input-group-2" label="Your Password:" label-for="register-password">

                <b-form-input
                    id="register-password"
                    type="password"
                    v-model=" form.password"
                    required
                    placeholder="Password">
                </b-form-input>
            </b-form-group>

            <b-form-group id="register-input-group-3" label="Confirm Password:" label-for="register-password-confirm">

                <b-form-input
                    id="register-password-confirm"
                    type="password"
                    v-model=" form.passwordConfirm "
                    required
                    placeholder="Confirm Password">
                </b-form-input>
            </b-form-group>

            <div class="d-flex justify-content-end mt-4">

                <transition mode="out-in" name="slide-fade">

                    <p v-if=" error " class="error-msg">{{ error }}</p>
                </transition>

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

                    email    : "",
                    password : ""
                }
            };
        },
        computed: {

            ...mapGetters({

                registerModalActive : 'auth/registerModalActive',
                error               : 'auth/error'
            }),
            isOpen : {

                get: function () {

                    return this.registerModalActive;
                },
                set: function (){

                    this.toggleRegisterModal();
                }
            }
        },
        methods: {

            ...mapActions({

                toggleRegisterModal : 'auth/toggleRegisterModal',
                register            : 'auth/register'
            }),
            attemptRegister(){

                this.register({ email: this.form.email, password: this.form.password });
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