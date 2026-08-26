---
sidebar_label: CardContainer
---

# `CardContainer`

This component aims to facilitate the development of custom card visualizations by being flexible about its configurations. It can be either used in a standalone setting or within a list of cards.

For instructions on what situations to use the component, and rules regarding its design please refer to the [Philips EMR design specification](http://design.emr.philips.com.br).

### Components

| Component | Description |
| --------- | ----------- |
| `CardContainerHeader` | Used to represent and identify the main context of a card, using it to display the most relevant information of the card |
| `CardContainerBody` | Used to display additional relevant information of a card |
| `CardContainerFooter` | Used to centralize actions or status related information of a card |
| `CardContainerSeparator` | Used to create a clear separation between the areas of card |
| `CardContainerZone` | Used to create zones that help with card composition |

### Composing

All compositions are based around the `CardContainerZone` component, which will be used by all other sub-components, creating zones that allow for different sizing and alignment configurations.

A complete example of the full composition capabilities of the `CardContainer` can be found at its [samples module](pathname:///../sample/application/card-container).
