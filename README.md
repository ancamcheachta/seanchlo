# Seanċló
[![Build Status](https://travis-ci.org/ancamcheachta/seanchlo.svg?branch=master)](https://travis-ci.org/ancamcheachta/seanchlo)
[![Coverage Status](https://coveralls.io/repos/github/ancamcheachta/seanchlo/badge.svg?branch=master)](https://coveralls.io/github/ancamcheachta/seanchlo?branch=master)
[![npm version](https://badge.fury.io/js/seanchlo.svg)](https://badge.fury.io/js/seanchlo)

## Úsáid
### Bunsampla
```javascript
const seanchlo = require('seanchlo');

seanchlo.convert('Is túisce deoch ná scéal');

// 'Is túisce deoċ ná scéal'
```

### Sampla le "Agus" (nó *Tironian Notes*)
```javascript
const seanchlo = require('seanchlo');

seanchlo.convert('Saol fada, gob fliuch, agus bás in Éirinn', {tironianNotes: true});

// 'Saol fada, gob fliuċ, ⁊ bás in Éirinn'
```

## Liosta Le Déanamh
* [ ] Scríobh tástálacha
* [ ] Comhtháthaigh le travis-ci
* [ ] Cuir suas ar npm é
* [ ] Cuir tacaíocht do litreacha na nOileán (nó *insular letters*) leis