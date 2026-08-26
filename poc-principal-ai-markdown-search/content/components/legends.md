---
sidebar_label: Legends
---

# `Legends`

This is a component set that aims to facilitate the usage of icons with descriptions in other components such as `Card` and `Table`

For instructions on what situations to use the component, and rules regarding its design please refer to the [Philips EMR design specification](http://design.emr.philips.com.br).

### Components

| Component               | Description                                                                                                                                                |
|-------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `Legends`               | Used to provide a context for the other two components, it is also responsible for displaying the legends description that were registered in its context. |
| `LegendItemList`        | Used to display a list of `LegendItem` components. Can be used inside or outside a `Legends` context.                                                      |
| `LegendItem`            | Used to display the icon and/or label. If used inside a `Legends` context it will push its value to the context.                                           |

### Properties

A complete example of the capabilities of the components can be found at its samples module: [Legends](pathname:///../sample/application/legends), [LegendsItemList](pathname:///../sample/application/legend-item-list) and [LegendItem](pathname:///../sample/application/legend-item).
