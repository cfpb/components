# cfpb-expandable

<!-- Auto Generated Below -->


## Properties

| Property           | Attribute           | Description                                                                             | Type      | Default |
| ------------------ | ------------------- | --------------------------------------------------------------------------------------- | --------- | ------- |
| `disableAnalytics` | `disable-analytics` | If `true`, doesn't fire the CustomEvent which can be used for analytics tracking.       | `boolean` | `false` |
| `openSingle`       | `open-single`       | True if only a single item can be opened at once                                        | `boolean` | `false` |
| `sectionHeading`   | `section-heading`   | Optional accordion section heading text. Only used in analytics event. Default is null. | `string`  | `null`  |


## Events

| Event                         | Description                                                                                                                         | Type               |
| ----------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- | ------------------ |
| `component-library-analytics` | The event used to track usage of the component. This is emitted when an accordion item is toggled and disableAnalytics is not true. | `CustomEvent<any>` |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
