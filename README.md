# BEMNames

## A utility for easily creating BEM class names in JS

### Usage:

#### Create BEM object with BEM.b as desired block name

```js
import createBEM

const BEM = createBEM("your-block")
BEM.b // 'your-block'
```

#### Get BEM string from element name

```js
BEM.e("your-elem") // 'your-block__your-elem'
```

#### Get BEM element with modifier

```js
BEM.e("your-elem", "sharp") //'your-block__your-elem--sharp'
```

#### Get BEM block modifier

```js
BEM.e(null, "pointy") //'your-block--pointy'
```

##### Better BEM block modifier alternative

```js
BEM.bm("super sucky") // 'your-block--super your-block--sucky'
```

#### Better way to add modifiers to elements:

```js
const modifierFunc = BEM.m(<block-or-elem-to-modify>)
modifierFunc('modifier1 modifier2')
```

Ex:

```js
const modifyNavItem = BEM.m("block-name__nav-item")
//        OR          BEM.m(BEM.e('nav-item'))

modifyNavItem("mod1 mod2")
// 'block-name__nav-item--mod1 block-name__nav-item--mod2'
```
