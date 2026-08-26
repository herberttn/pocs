---
sidebar_label: Form
---

# `Form`

The goal of this component is to control the fields inside it, handling their data and validations.

### Components

| Component | Description |
| --------- | ----------- |
| `Field` | Used as a complementary component to wrap the input component. All inputs components must be placed inside a `Field` component. |
| `Fieldset` | Used to group a set of `Fields`. If defined an entry in the `Fieldset` the values of its `Fields` will be stored inside it. |
| `FieldList` | Used to group a set of `Fields` which will render as a list, with the option to add/remove field rows |

### Composing

To compose and set the form which will be a part of the fragment, drop them through Oswald inside a layout component, following by one of the specified components.

A complete example of the full composition capabilities of the `Form` can be found at its [samples module](pathname:///../sample/application/form).
