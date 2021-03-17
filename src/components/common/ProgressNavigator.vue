<template>
  <v-container>
    <v-row justify="center">
      <v-stepper class="size">
        <v-stepper-header>
          <v-stepper-step
            step="1"
            :complete="isComplete(1)(currentStep)"
          >
            자기소개
          </v-stepper-step>

          <v-divider></v-divider>

          <v-stepper-step
            step="2"
            :complete="isComplete(2)(currentStep)"
          >
            강의를 신청한 이유
          </v-stepper-step>

          <v-divider></v-divider>

          <v-stepper-step
            step="3"
            :complete="isComplete(3)(currentStep)"
          >
            목표
          </v-stepper-step>

          <v-divider></v-divider>

          <v-stepper-step
            step="4"
            :complete="isComplete(4)(currentStep)"
          >
            강점
          </v-stepper-step>
        </v-stepper-header>
      </v-stepper>
    </v-row>
  </v-container>
</template>

<style scoped>
.size {
  min-width: 1000px;
  max-width: 1600px;
}
</style>

<script>
export default {
  name: 'ProgressNavigator',
  props: {
    currentStep: Number,
  },
  methods: {
    isComplete(step) {
      return function (currentStep) {
        return (currentStep >= step)
      }
    }
  }
}
</script>
