function MBdataFormatting(obj) {
    // for MonsterBook.img.xml ONLY
    // Create better data-structure
    const simpleData = {}

    const arrayData = obj.root.children

    arrayData.forEach(x => {
        let mobId = x.attributes.name
        let dropData = x.children[2].children
        let dropArray = dropData.map(obj => obj.attributes.value)

        //write to main
        simpleData[mobId] = dropArray
    })

    return simpleData
}

function MobIdDataFormatting(obj) {
    // for Mob.img.xml ONLY
    // Create better data-structure
    const simpleData = {}

    const arrayData = obj.root.children
 
    arrayData.forEach(x => {
        let mobId = x.attributes.name
        let mobName = x.children[0].attributes.value

        //write to main
        simpleData[mobId] = mobName
    })

    return simpleData
}

function ConsumeItemIdDataFormatting(obj) {
    // for Consume.img.xml ONLY
    // Create better data-structure
    const simpleData = {}

    const arrayData = obj.root.children

    arrayData.forEach(x => {
        let itemId = x.attributes.name
        let itemName = x.children[0].attributes.value
        let itemDesc = ''
        try {
            itemDesc = x.children[1].attributes.value
        } catch {
            itemDesc = ''
        }

        //write to main
        simpleData[itemId] = { itemName: itemName, itemDesc: itemDesc }
    })
    return simpleData
}

function EtcItemIdDataFormatting(obj) {
    // for Etc.img.xml ONLY
    // Create better data-structure
    const simpleData = {}

    const arrayData = obj.root.children[0].children
    arrayData.forEach(x => {
        let itemId = x.attributes.name
        let itemName = x.children[0].attributes.value
        let itemDesc = ''
        try {
            itemDesc = x.children[1].attributes.value
        } catch {
            itemDesc = ''
        }

        //write to main
        simpleData[itemId] = { itemName: itemName, itemDesc: itemDesc }
    })
    return simpleData
}

function EqpItemIdDataFormatting(obj) {
    // for Eqp.img.xml ONLY
    // Create better data-structure
    const simpleData = {}
    const arrayData = obj.root.children[0].children
    arrayData.forEach(categoryArr => {
        categoryArr.children.forEach(x => {
            itemId = x.attributes.name
            itemName = x.children[0].attributes.value

            //write to main
            simpleData[itemId] = itemName
        })
    })

    // console.log(simpleData)
    return simpleData
}


module.exports = {
    MBdataFormatting,
    MobIdDataFormatting,
    ConsumeItemIdDataFormatting,
    EtcItemIdDataFormatting,
    EqpItemIdDataFormatting,
};