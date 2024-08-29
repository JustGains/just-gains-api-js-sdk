
# Program Analytics 1

The data returned by the operation.

## Structure

`ProgramAnalytics1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `analyticsId` | `number` | Required | Unique identifier for this analytics entry. |
| `programId` | `number` | Required | Identifier of the program these analytics belong to. |
| `startCount` | `number` | Required | Number of times the program has been started by users. |
| `completionCount` | `number` | Required | Number of times the program has been completed by users. |
| `averageRating` | `number` | Required | Average rating of the program (typically out of 5). |
| `lastUpdated` | `string` | Required | Timestamp of when these analytics were last updated. |

## Example (as JSON)

```json
{
  "analyticsId": 5001,
  "programId": 1001,
  "startCount": 1500,
  "completionCount": 1200,
  "averageRating": 4.7,
  "lastUpdated": "07/30/2023 23:59:59"
}
```

