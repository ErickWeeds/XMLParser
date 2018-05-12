# XML to JSON

## Introduction

> Simple tool to convert basic xml strings to JSON objects

## Code Samples

> It converts from this:
```xml
<payment>
    <amount>
      <currency>MXN</currency>
      <quantity>10</quantity>
    </amount>
    <from>Evan</from>
    <to>PayStand</to>
</payment>```

>to this:

```javascript
{ payment:
   { amount: { currency: 'MXN', quantity: '10' },
     from: 'Evan',
     to: 'PayStand' } }
´´´


## Installation
