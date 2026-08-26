---
sidebar_label: CurrentDatetime
---

# `CurrentDatetime`

The goal of this component is to display the current datetime in the chosen format.

### Properties

| Property | Type | Description |
| -------- | ---- | ----------- |
| `format` | `DateFormatType` | The date format used to display the current datetime
| `frozen` | `boolean` | Use to freeze the live update of the current datetime
| `label`  | `TextProps` | Use to control the appearence of the datetime text

### Methods

| Method | Description |
| -------- | ----------- |
| `isFrozen` | Returns if the current datetime is frozen
| `setFrozen` | Sets if the current datetime should be frozen
| `getFormat` | Returns the format used to display the current datetime
| `setFormat` | Sets the format used to display the current datetime
