---
title: Foo Project
keywords: [foo, bar, baz]
description: I am foo project!
components: [Bar]
---

# Foo

I am foo project! The one! The only!

## Attributes (Frontmatter)

My keywords are: {{ keywords.join(", ") }}.

### Custom Attributes

This is a custom attribute:

{{ custom }}

## Components

This is a component:

<Bar />

---

Isn't it great?
