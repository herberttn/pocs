---
sidebar_label: Heading
---

# `Heading`

This is a component set that aims to facilitate the separation of content into different containers, based on different levels of hierarchy, with each container having space dedicated for its content and for their actions

For instructions on what situations to use the component, and rules regarding its design please refer to the [Philips EMR design specification](http://design.emr.philips.com.br).

### Slots

 - `action`: Area to drop [Actions](pathname:///../sample/application/actions) that will be used as container's actions;
 - `content`: Area to drop components that will appear below the container as a child.

### Components

| Component | Description |
| --------- | ----------- |
| `ContextualBar` | Used to represent and identify the main container, using it to display the parent header/content container to all other containers or to be used alone. |
| `Section` | Used for the same purpose of `ContextualBar`, but this is a second level container that must always be children to a `ContextualBar` dropped into its `content` slot. |
| `Subsection` | Used for the same purpose of `ContextualBar` and `Section`, but this is a third level container that must always be children to a `Section` dropped into its `content` slot. |
| `SuppressHeadingMargin` | All heading container components has margins, using this component as a wrapper will remove the margins on mobile resolutions. |

### Composing

All compositions are based on the levels you need to display your content nested. To know which level of nesting is needed, just see how the containers are divided hierarchically (parent / child) on the design specification. 

For an example, if you have a container and inside there is another container, you need a `ContextualBar` and a `Section` inside it. If inside the second container there is one more container, then you would need a `Subsection`.

A complete example of the full composition capabilities of the `Heading` can be found at its [samples module](pathname:///../sample/application/heading).
