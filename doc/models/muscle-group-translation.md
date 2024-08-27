
# Muscle Group Translation

## Structure

`MuscleGroupTranslation`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `localeCode` | `string` | Required | The locale code for this translation (e.g., 'en-US', 'es-ES') |
| `muscleGroupName` | `string` | Required | The translated name of the muscle group |
| `muscleGroupDescription` | `string \| undefined` | Optional | The translated description of the muscle group (optional) |

## Example (as JSON)

```json
{
  "localeCode": "en-US",
  "muscleGroupName": "Quadriceps",
  "muscleGroupDescription": "The quadriceps femoris is a large muscle group located on the front of the thigh."
}
```

