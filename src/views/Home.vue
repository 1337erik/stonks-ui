<template>

  <div>

    <p>No this wont be the splash page.. thats what the main site will be for.. this should just be the dashboard for the main app</p>
    <p>things to see:</p>
    <ul>

      <li>daily mindfullness calibration</li>
      <li>the library of information</li>
      <li>highlight the authorship program.. maybe a call-to-action</li>
      <li>coach highlights? gather stats and data</li>
      <li>relevant reads - maybe blog format, or videos too</li>
      <li>personal profile</li>
    </ul>

    <LoginModal />
    <RegisterModal />
  </div>
</template>

<script>
  // @ is an alias to /src
  // import HelloWorld from "@/components/HelloWorld.vue";

  import LoginModal from "@/components/authentication/LoginModal";
  import RegisterModal from "@/components/authentication/RegisterModal";

  export default {

    name: "home",
    data() {

      return {

      };
    },
    methods: {

    },
    components: {

      LoginModal,
      RegisterModal
    }
  };
</script>
