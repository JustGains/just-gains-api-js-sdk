
# Creator Profile 1

## Structure

`CreatorProfile1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `creatorProfileId` | `string \| undefined` | Optional | Unique identifier for the creator profile. |
| `userId` | `string \| undefined` | Optional | Associated user ID, if applicable. |
| `userName` | `string \| undefined` | Optional | Creator's username. |
| `firstName` | `string \| undefined` | Optional | Creator's first name. |
| `lastName` | `string \| undefined` | Optional | Creator's last name. |
| `fullName` | `string \| undefined` | Optional | Creator's full name. |
| `profilePhoto` | [`MediaAsset \| undefined`](../../doc/models/media-asset.md) | Optional | - |
| `socialMediaAccounts` | [`CreatorSocialMediaAccount[] \| undefined`](../../doc/models/creator-social-media-account.md) | Optional | List of creator's social media accounts. |

## Example (as JSON)

```json
{
  "creatorProfileId": "123e4567-e89b-12d3-a456-426614174000",
  "userId": "123e4567-e89b-12d3-a456-426614174000",
  "userName": "TheRock",
  "firstName": "Dwayne",
  "lastName": "Johnson",
  "fullName": "Dwayne Johnson"
}
```

