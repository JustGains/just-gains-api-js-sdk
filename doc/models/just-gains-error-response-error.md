
# Just Gains Error Response Error

## Structure

`JustGainsErrorResponseError`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `status` | `string` | Required | The status of the response, corresponding to standard HTTP status codes. |
| `message` | `string` | Required | A human-readable message describing the result of the operation. |
| `errors` | `string[] \| undefined` | Optional | A list of error messages that occurred during the operation. |

## Example (as JSON)

```json
{
  "status": "Error",
  "message": "Operation Failed",
  "errors": [
    "Invalid input data",
    "User not found"
  ]
}
```

