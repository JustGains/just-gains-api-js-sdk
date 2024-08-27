
# Exercise Category Translation

Represents a translation of an exercise category name for a specific locale.

## Structure

`ExerciseCategoryTranslation`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `localeCode` | `string` | Required | The locale code for this translation (e.g., 'en-US', 'es-ES'). |
| `exerciseCategoryName` | `string` | Required | The translated name of the exercise category in the specified locale. |

## Example (as JSON)

```json
{
  "localeCode": "en-US",
  "exerciseCategoryName": "Strength Training"
}
```

