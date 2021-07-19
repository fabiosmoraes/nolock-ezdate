<p align="center">
  <a href="https://nolock.com.br/" target="blank"><img src="https://i.imgur.com/2UgyvkB.png" width="300" alt="NOLOCK" /></a>
</p>
    

## Description


[@nolock/ezdate](https://dev.azure.com/ti0489/Banco%20Digital%20-%20Oficial/_packaging?_a=feed&feed=bank_feed) is a date module 

## Installation

```bash
$ npm install @nolock/ezdate --save

# or with yarn

$ yarn add @nolock/ezdate
```


## Using ezdate
Our current server location is "America/Sao_Paulo"

### isBusinessDay

isBusinessDay(date: string | Date, hour: number, minute: number)

#### Parameters
`date`
Opcional, default: new Date()

`hour`
Opcional, default: 17

`minute`
Opcional, default: 0

#### Example
Example Date = '2021-07-19 16:30:00'

```js
import {isBusinessDay} from '@nolock/ezdate'

console.log(isBusinessDay());
//true

console.log(isBusinessDay('2021-12-25'));
//false

console.log(isBusinessDay(new Date(), 19, 30));
//true

console.log(isBusinessDay(new Date(), 15, 30));
//false
```

---

### getBusinessDay

getBusinessDay(date: string | Date)

#### Parameters
`date`
Opcional, default: new Date()

```js
import {getBusinessDay} from '@nolock/ezdate'

console.log(getBusinessDay());
//2021-07-19T03:00:00.000Z

console.log(getBusinessDay('2021-12-25'));
//2021-12-27T03:00:00.000Z
```

---

### getNextBusinessDay

getNextBusinessDay(date: string | Date, days: number)

#### Parameters
`date`
Opcional, default: new Date()

`days`
Opcional, default: 1

```js
import {getNextBusinessDay} from '@nolock/ezdate'

console.log(getNextBusinessDay());
//2021-07-20T03:00:00.000Z

console.log(getNextBusinessDay(new Date(), 3));
//2021-07-22T03:00:00.000Z

console.log(getNextBusinessDay(new Date(), 5));
//2021-07-26T03:00:00.000Z

```

---

### getDate

getDate(date: string | Date)

#### Parameters
`date`
Required

```js
import {getDate} from '@nolock/ezdate'

console.log(getDate('2021-07-19'));
//2021-07-19T03:00:00.000Z
```

---

### getYear

getYear(date: string | Date)

#### Parameters
`date`
Opcional, default: new Date()

```js
import {getYear} from '@nolock/ezdate'

console.log(getYear('2021-07-19'));
//2021
```

---

### formatDate

formatDate(date: string | Date, type: TypeDate)

#### Parameters
`date`
Required

`type`
Required

```js
enum TypeDate {
  BR,
  DB
}
```

```js
import {formatDate, TypeDate} from '@nolock/ezdate'

console.log(formatDate('2021-07-19', TypeDate.BR));
//19/07/2021

console.log(formatDate('2021-07-19', 'BR'));
//19/07/2021
```

---

### getNationalHolidays

getNationalHolidays(year: number)

#### Parameters
`year`
Optional, default: current year

```js
import {getNationalHolidays} from '@nolock/ezdate'

console.log(getNationalHolidays(2021);
// [
//   { date: '2021-01-01', description: 'Ano Novo' },
//   { date: '2021-02-16', description: 'Carnaval' },
//   { date: '2021-04-02', description: 'Sexta-feira Santa' },
//   { date: '2021-04-04', description: 'Páscoa' },
//   { date: '2021-04-21', description: 'Tiradentes' },
//   { date: '2021-05-01', description: 'Dia do Trabalho' },
//   { date: '2021-06-03', description: 'Corpus Christi' },
//   { date: '2021-09-07', description: 'Independência do Brasil' },
//   { date: '2021-10-12', description: 'Nossa Senhora Aparecida' },
//   { date: '2021-11-02', description: 'Dia de Finados' },
//   { date: '2021-11-15', description: 'Proclamação da República' },
//   { date: '2021-12-25', description: 'Natal' }
// ]
```

---

### isHoliday

isHoliday(date: string | Date)

#### Parameters
Example Date = '2021-07-19'

`date`
Optional, default: new Date()

```js
import {isHoliday} from '@nolock/ezdate'

console.log(isHoliday());
//false

console.log(isHoliday('2021-01-01'));
//true

```

---


## License

@nolock/ezdate is [MIT licensed](LICENSE).