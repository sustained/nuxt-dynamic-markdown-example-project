<template>
  <section class="section">
    <div class="columns is-mobile">
      <card title="Free" icon="github-circle">
        <nuxt-link
          v-for="locale in availableLocales"
          :key="locale.code"
          :to="switchLocalePath(locale.code)"
          class="button mr-4"
          >{{ locale.name }}</nuxt-link
        >
      </card>

      <card title="Responsive" icon="cellphone-link">
        <b class="has-text-grey">Every</b>
        component is responsive
      </card>

      <card title="Modern" icon="alert-decagram">
        Built with
        <a href="https://vuejs.org/">Vue.js</a>
        and
        <a href="http://bulma.io/">Bulma</a>
      </card>

      <card title="Lightweight" icon="arrange-bring-to-front"
        >No other internal dependency</card
      >
    </div>
  </section>
</template>

<script>
import Card from '~/components/Card'

export default {
  name: 'HomePage',

  components: {
    Card
  },

  computed: {
    availableLocales() {
      // WORKAROUND: https://github.com/nuxt-community/nuxt-i18n/issues/205
      return this.$root.$i18n.locales.filter(
        (lang) => lang.code !== this.$i18n.locale
      )
    }
  }
}
</script>
