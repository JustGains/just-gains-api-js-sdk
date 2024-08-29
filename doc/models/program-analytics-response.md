
# Program Analytics Response

## Structure

`ProgramAnalyticsResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `status` | `string` | Required | The status of the response, corresponding to standard HTTP status codes. |
| `message` | `string` | Required | A human-readable message describing the result of the operation. |
| `data` | [`ProgramAnalytics1`](../../doc/models/program-analytics-1.md) | Required | The data returned by the operation. |

## Example (as JSON)

```json
{
  "status": "OK",
  "message": "Operation completed successfully.",
  "data": {
    "analyticsId": 5001,
    "programId": 1001,
    "startCount": 1500,
    "completionCount": 1200,
    "averageRating": 4.7,
    "lastUpdated": "07/30/2023 23:59:59"
  }
}
```

