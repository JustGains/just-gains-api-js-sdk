
# Units

## Structure

`Units`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `metricUnits` | [`MetricUnits \| undefined`](../../doc/models/metric-units.md) | Optional | - |
| `imperialUnits` | [`ImperialUnits \| undefined`](../../doc/models/imperial-units.md) | Optional | - |

## Example (as JSON)

```json
{
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
```

