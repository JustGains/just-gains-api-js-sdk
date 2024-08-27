
# Exercise Instruction

## Structure

`ExerciseInstruction`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `exerciseCode` | `string` | Required | The exerciseCode of the exercise to add instructions to. |
| `userId` | `string \| undefined` | Optional | The userId of the creator related to this instruction |
| `localeCode` | `string` | Required | Language code for the instructions |
| `instructionJSON` | [`InstructionJSON1`](../../doc/models/instruction-json1.md) | Required | JSON object containing the exercise instructions in EditorJS format |

## Example (as JSON)

```json
{
  "exerciseCode": "BARBELL-BENCH-PRESS",
  "userId": "9fdd12f5-c7b9-82a8-f6cc-cceac14c13c1",
  "localeCode": "en-US",
  "instructionJSON": {
    "time": 1625832000000,
    "version": "2.24.3",
    "blocks": [
      {
        "id": "id6",
        "type": "paragraph",
        "data": {
          "text": "text0"
        }
      },
      {
        "id": "id6",
        "type": "paragraph",
        "data": {
          "text": "text0"
        }
      }
    ]
  }
}
```

