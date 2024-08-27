
# Muscle Groups Translations Response

## Structure

`MuscleGroupsTranslationsResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `status` | `string` | Required | - |
| `message` | `string` | Required | - |
| `data` | [`MuscleGroupTranslation[] \| undefined`](../../doc/models/muscle-group-translation.md) | Optional | - |

## Example (as JSON)

```json
{
  "status": "OK",
  "message": "Muscle group translations retrieved successfully",
  "data": [
    {
      "localeCode": "localeCode2",
      "muscleGroupName": "muscleGroupName4",
      "muscleGroupDescription": "muscleGroupDescription0"
    },
    {
      "localeCode": "localeCode2",
      "muscleGroupName": "muscleGroupName4",
      "muscleGroupDescription": "muscleGroupDescription0"
    },
    {
      "localeCode": "localeCode2",
      "muscleGroupName": "muscleGroupName4",
      "muscleGroupDescription": "muscleGroupDescription0"
    }
  ]
}
```

