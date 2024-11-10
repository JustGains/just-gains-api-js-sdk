
# Data 2

## Structure

`Data2`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `isAvailable` | `boolean \| undefined` | Optional | Whether the username is available |
| `isValid` | `boolean \| undefined` | Optional | Whether the username is valid |
| `validation` | `string \| undefined` | Optional | The validation result |
| `creatorProfileId` | `string \| null \| undefined` | Optional | The CreatorProfileId of the creator who has this username. Only present if isAvailable is false. |

## Example (as JSON)

```json
{
  "isAvailable": true,
  "isValid": true,
  "validation": "Valid",
  "creatorProfileId": "123e4567-e89b-12d3-a456-426614174000"
}
```

