
# Exercise Metric Data

## Structure

`ExerciseMetricData`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `exerciseMetricCode` | `string \| undefined` | Optional | A unique identifier for the exercise metric. |
| `exerciseMetricTranslations` | [`ExerciseMetricTranslation[] \| undefined`](../../doc/models/exercise-metric-translation.md) | Optional | Array of translations for the metric |
| `metricName` | `string \| undefined` | Optional | Translated name of the metric in the requested locale |
| `measurementData` | `string \| undefined` | Optional | a custom JSON object that can be used to store any additional data related to the metric |

## Example (as JSON)

```json
{
  "exerciseMetricCode": "WEIGHT",
  "metricName": "Weight",
  "measurementData": "{\r\n  \"unit\": \"lbs\",\r\n  \"precision\": 2\r\n}",
  "exerciseMetricTranslations": [
    {
      "localeCode": "localeCode6",
      "metricName": "metricName8",
      "measurementData": "measurementData4"
    },
    {
      "localeCode": "localeCode6",
      "metricName": "metricName8",
      "measurementData": "measurementData4"
    },
    {
      "localeCode": "localeCode6",
      "metricName": "metricName8",
      "measurementData": "measurementData4"
    }
  ]
}
```

