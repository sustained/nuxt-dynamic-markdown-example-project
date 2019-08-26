<template>
  <section>
    <card :title="project.attributes.title">
      <DynamicMarkdown
        v-bind="project"
        :custom-attributes="{ custom: 'Hello!' }"
      />
    </card>

    <card title="Also available in:">
      <ul>
        <li
          v-for="(language, index) in project.attributes.translations"
          :key="index"
        >
          <nuxt-link
            :to="
              localePath(
                {
                  name: 'projects-project',
                  params: { project: project.attributes.slug }
                },
                language
              )
            "
            >{{ language }}</nuxt-link
          >
        </li>
      </ul>
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
