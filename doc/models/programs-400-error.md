
# Programs 400 Error

## Structure

`Programs400Error`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `status` | `string` | Required | The status of the response, corresponding to standard HTTP status codes. |
| `message` | `string` | Required | A human-readable message describing the result of the operation. |
| `data` | `unknown` | Required | The data returned by the operation. |
| `errors` | `unknown \| undefined` | Optional | - |

## Example (as JSON)

```json
{
  "status": "OK",
  "message": "Operation completed successfully.",
  "data": {
    "key1": "val1",
    "key2": "val2"
  },
  "errors": {
    "key1": "val1",
    "key2": "val2"
  }
}
```

