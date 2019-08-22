<template>
  <section class="section">
    <div class="columns is-mobile">
      <card
        v-for="(project, index) in projects"
        :key="index"
        :title="project.title"
        icon="alert-decagram"
      >
        <nuxt-link
          :to="{ name: 'projects-project', params: { project: project.slug } }"
        >
          {{ project.title }}
        </nuxt-link>
      </card>
    </div>
  </section>
</template>

<script>
import { getEntities } from 'nuxt-dynamic-markdown/lib/mixin'
import Card from '~/components/Card'

export default {
  components: { Card },
  asyncData: getEntities('projects')
}
</script>
