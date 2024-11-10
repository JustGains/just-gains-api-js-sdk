
# Related Exercise List Item

Represents a variant relationship between two exercises, tracking how they are related and differ from each other.

## Structure

`RelatedExerciseListItem`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `exerciseCode` | `string` | Required | Unique identifier for the exercise. |
| `variantSlug` | `string \| undefined` | Optional | A short slug that explains the variation of the exercise. |

## Example (as JSON)

```json
{
  "exerciseCode": "BENCH_PRESS",
  "VariantSlug": "Wide"
}
```

