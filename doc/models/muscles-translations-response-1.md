
# Muscles Translations Response 1

## Structure

`MusclesTranslationsResponse1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `status` | `string` | Required | - |
| `message` | `string` | Required | - |
| `data` | [`JustGainsResponse[] \| undefined`](../../doc/models/just-gains-response.md) | Optional | - |

## Example (as JSON)

```json
{
  "status": "OK",
  "message": "Muscle translations updated successfully",
  "data": [
    {
      "status": "status2",
      "message": "message0"
    },
    {
      "status": "status2",
      "message": "message0"
    },
    {
      "status": "status2",
      "message": "message0"
    }
  ]
}
```

