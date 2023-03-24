export default function createBEM(b) {
  return {
    // block
    b,

    // element
    e(elem, modifier) {
      if (elem && modifier) {
        return buildBEM(this.b, elem, modifier)
      }

      if (elem) {
        return buildElem(this.b, elem)
      }

      if (modifier) {
        return buildModifier(this.b, modifier)
      }
    },

    // modifier
    m(item) {
      return makeBuildModifiersFromItem(item)
    },

    // (block modifier)
    bm(modifiers) {
      const blockModifier = makeBuildModifiersFromItem(this.b)
      return blockModifier(modifiers)
    }
  }
}

// Building blocks
const isEmptyString = (item) => item === ""

function makeBuildModifiersFromItem(item) {
  return (modifiers) => {
    if (typeof modifiers !== "string") return ""
    const modifierList = modifiers.split(" ")
    if (modifierList.every(isEmptyString)) return ""
    return modifierList
      .map((modifier) => buildModifier(item, modifier))
      .join(" ")
  }
}

function buildBEM(block, elem, modifier) {
  if (block && elem && modifier) {
    return buildModifier(buildElem(block, elem), modifier)
  }

  if (block && modifier) {
    return buildModifier(block, modifier)
  }

  if (block && elem) {
    return buildElem(block, elem)
  }

  if (elem && modifier) {
    return buildModifier(elem, modifier)
  }
}

const buildElem = (block, elem) => block + "__" + elem
const buildModifier = (item, modifier) => item + "--" + modifier

export { buildElem, buildModifier, buildBEM, makeBuildModifiersFromItem }

// other exports for customization (untested)
// may be used to implement a custom configuration object later
const makeMakeBuildModifiersFromItem =
  (buildModifier) => (item) => (modifiers) => {
    if (typeof modifiers !== "string") return ""
    const modifierList = modifiers.split(" ")
    if (modifierList.every(isEmptyString)) return ""
    return modifierList
      .map((modifier) => buildModifier(item, modifier))
      .join(" ")
  }

const makeBuildBEM = (buildElem, buildModifier) => (block, elem, modifier) => {
  if (block && elem && modifier) {
    return buildModifier(buildElem(block, elem), modifier)
  }

  if (block && modifier) {
    return buildModifier(block, modifier)
  }

  if (block && elem) {
    return buildElem(block, elem)
  }

  if (elem && modifier) {
    return buildModifier(elem, modifier)
  }
}

const makeBuildElem = (separator) => (block, elem) => block + separator + elem
const makeBuildModifier = (separator) => (item, modifier) =>
  item + separator + modifier

export {
  makeBuildModifier,
  makeBuildElem,
  makeBuildBEM,
  makeMakeBuildModifiersFromItem
}
