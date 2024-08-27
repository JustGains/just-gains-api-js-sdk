
# Measurement Data

## Structure

`MeasurementData`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `metricCode` | `string \| undefined` | Optional | - |
| `displayName` | `string \| undefined` | Optional | - |
| `units` | [`Units \| undefined`](../../doc/models/units.md) | Optional | - |
| `displayFormat` | `string \| undefined` | Optional | - |
| `inputType` | `string \| undefined` | Optional | - |
| `step` | `number \| undefined` | Optional | - |
| `minValue` | `number \| undefined` | Optional | - |
| `maxValue` | `number \| undefined` | Optional | - |
| `defaultValue` | `number \| undefined` | Optional | - |
| `conversionFactor` | [`ConversionFactor \| undefined`](../../doc/models/conversion-factor.md) | Optional | - |

## Example (as JSON)

```json
{
  "metricCode": "WEIGHT",
  "displayName": "Weight",
  "displayFormat": "{value} {unit}",
  "inputType": "numeric",
  "step": 0.1,
  "minValue": 0,
  "maxValue": 1000,
  "defaultValue": 0,
  "units": {
    "metricUnits": {
      "units": [
        {
          "unitCode": "unitCode0",
          "unitShort": {
            "unitShortName": "unitShortName4",
            "unitShortPlural": "unitShortPlural8"
          },
          "unitLong": {
            "unitLongName": "unitLongName4",
            "unitLongPlural": "unitLongPlural6"
          },
          "conversionFactor": 5.06
        }
      ],
      "defaultUnit": 88
    },
    "imperialUnits": {
      "units": [
        {
          "unitCode": "unitCode0",
          "unitShort": {
            "unitShortName": "unitShortName4",
            "unitShortPlural": "unitShortPlural8"
          },
          "unitLong": {
            "unitLongName": "unitLongName4",
            "unitLongPlural": "unitLongPlural6"
          },
          "conversionFactor": 5.06
        },
        {
          "unitCode": "unitCode0",
          "unitShort": {
            "unitShortName": "unitShortName4",
            "unitShortPlural": "unitShortPlural8"
          },
          "unitLong": {
            "unitLongName": "unitLongName4",
            "unitLongPlural": "unitLongPlural6"
          },
          "conversionFactor": 5.06
        }
      ],
      "defaultUnit": 12
    }
  }
}
```

