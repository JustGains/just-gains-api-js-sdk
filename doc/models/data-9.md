
# Data 9

## Structure

`Data9`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `creatorProfileId` | `string \| undefined` | Optional | Unique identifier for the creator profile. |
| `userId` | `string \| undefined` | Optional | Associated user ID, if applicable. |
| `creatorEmail` | `string \| undefined` | Optional | Creator's email address. |
| `profilePhoto` | [`ProfilePhoto \| undefined`](../../doc/models/profile-photo.md) | Optional | Creator's profile photo. |
| `socialMediaAccounts` | [`CreatorSocialMediaAccount[] \| undefined`](../../doc/models/creator-social-media-account.md) | Optional | List of creator's social media accounts. |

## Example (as JSON)

```json
{
  "creatorProfileId": "123e4567-e89b-12d3-a456-426614174000",
  "userId": "123e4567-e89b-12d3-a456-426614174000",
  "creatorEmail": "dwayne@therockjohnson.com",
  "profilePhoto": {
    "mediaId": "000006b6-0000-0000-0000-000000000000",
    "fileName": "fileName4",
    "filePath": "filePath0",
    "fileUrl": "fileUrl4",
    "fileSize": 10,
    "fileFormat": "fileFormat6",
    "description": "description0"
  },
  "socialMediaAccounts": [
    {
      "socialMediaPlatformCode": "socialMediaPlatformCode8",
      "socialMediaAccountUsername": "socialMediaAccountUsername8"
    },
    {
      "socialMediaPlatformCode": "socialMediaPlatformCode8",
      "socialMediaAccountUsername": "socialMediaAccountUsername8"
    },
    {
      "socialMediaPlatformCode": "socialMediaPlatformCode8",
      "socialMediaAccountUsername": "socialMediaAccountUsername8"
    }
  ]
}
```

