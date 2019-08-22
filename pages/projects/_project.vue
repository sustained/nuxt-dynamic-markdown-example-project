<template>
  <section>
    <card :title="project.attributes.title">
      <DynamicMarkdown
        v-bind="project"
        :custom-attributes="{ custom: 'Hello!' }"
      />
    </card>

    <card title="Raw Project">
      <pre>{{ project }}</pre>
    </card>
  </section>
</template>

<script>
import { getMeta, setHead, asyncData } from 'nuxt-dynamic-markdown/lib/mixin'
import Card from '~/components/Card'

export default {
  components: { Card },
  mixins: [getMeta, setHead],
  asyncData
}
</script>
