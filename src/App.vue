<template>
  <v-app>
    <v-main>
      <v-responsive
        height="800vh"
        class="text-center pa-2"
      >
        <v-sheet
          class="d-flex"
          color="grey lighten-4"
          height="800"
          rounded="md"
        >
          <v-row
            align="center"
            justify="center"
          >
            <v-col
              class="text-center"
              cols="12"
            >
              <h1 class="display-1 font-weight-thin mb-4">
                HCI와 UX 평가
              </h1>
            </v-col>
          </v-row>
        </v-sheet>

        <div
          v-for="(component,key) in components"
          v-bind:key="key"
        >
          <progress-navigator
            class="navigator"
            :currentStep="key + 1"
          />
          <v-lazy
            v-model="isActive"
            :options="{
              threshold: .75
            }"
            min-height="200"
            transition="fade-transition"
          >
            <component
              v-bind:is="component"
            />
          </v-lazy>
        </div>

        <youtube
          class="youtube-player"
          video-id="86nRW5NOb_c"
          player-width="1600"
          player-height="900"
        />
      </v-responsive>
    </v-main>
  </v-app>
</template>

<style scoped>
.navigator {
  margin-top: 30rem;
  margin-bottom: 4rem;
}
.youtube-player {
  margin-top: 30rem;
}
</style>

<script>
import ProgressNavigator from './components/common/ProgressNavigator'
import Introduction from './components/Introduction'
import Background from './components/Background'
import Goals from './components/Goals'
import StrongPoint from './components/StrongPoint'

export default {
  name: 'App',
  components: {
    ProgressNavigator,
  },
  data: () => ({
    components: [
      Introduction,
      Background,
      Goals,
      StrongPoint,
    ],
    isActive: false,
  }),
};
</script>
