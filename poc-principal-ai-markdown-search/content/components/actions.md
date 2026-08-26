---
sidebar_label: Actions
---

# `Actions`

This is a component set that aims to render action buttons, through the [Heading](pathname:///../sample/application/heading) component.

For instructions on what situations to use the component, and rules regarding its design please refer to the [Philips EMR design specification](http://design.emr.philips.com.br).

### Components

| Component | Description |
| --------- | ----------- |
| `Action` | Used to display an action button inside a [Heading](pathname:///../sample/application/heading) component header. The action can have any style listed on `ActionStyle` |
| `ActionOption` | Used as a complementary component of `dropdown` styled `Action` to create `n` levels of nested menu options |

### Composing

To compose and set the actions which will be a part of the fragment, just drop them through Oswald inside a [Heading](pathname:///../sample/application/heading) component's `action` slot. As soon as you drop the actions, they will appear inside the container's header.

A complete example of the full composition capabilities of the `Actions` can be found at its [samples module](pathname:///../sample/application/heading).
