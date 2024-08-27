
# Just Gains Default Response

The default Message:Status response model.

## Structure

`JustGainsDefaultResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `status` | `string` | Required | **Default**: `'Success!'` |
| `message` | `string` | Required | **Default**: `'Generic success message :)'` |
| `errors` | `string[] \| null \| undefined` | Optional | Error Responses |
| `data` | `unknown \| null \| undefined` | Optional | - |

## Example (as JSON)

```json
{
  "status": "OK",
  "message": "Password reset email sent successfully",
  "errors": [
    "It's broken",
    "Probably a missing semicolon;",
    "Or an; extra semicolon..."
  ],
  "Data": {
    "key1": "val1",
    "key2": "val2"
  }
}
```

