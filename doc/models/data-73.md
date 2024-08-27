
# Data 73

## Structure

`Data73`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `programViewId` | `number \| undefined` | Optional | Unique identifier for this program view. |
| `programId` | `number \| undefined` | Optional | Identifier of the viewed program. |
| `userId` | `string \| undefined` | Optional | Identifier of the user who viewed the program, if authenticated. |
| `sessionId` | `string \| undefined` | Optional | Unique identifier for the user's session. |
| `viewedAt` | `string \| undefined` | Optional | Timestamp of when the program was viewed. |
| `viewDuration` | `number \| undefined` | Optional | Duration of the view in seconds. |
| `ipAddress` | `string \| undefined` | Optional | IP address of the viewer. |
| `userAgent` | `string \| undefined` | Optional | User agent string of the viewer's browser. |
| `isAuthenticated` | `boolean \| undefined` | Optional | Indicates whether the viewer was authenticated during this view. |

## Example (as JSON)

```json
{
  "programViewId": 10001,
  "programId": 1001,
  "userId": "123e4567-e89b-12d3-a456-426614174000",
  "sessionId": "sess_abc123def456",
  "viewedAt": "07/25/2023 15:30:00",
  "viewDuration": 300,
  "ipAddress": "192.168.1.1",
  "userAgent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
  "isAuthenticated": true
}
```

