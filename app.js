/**
 * @description Читает файл с сырыми данными raw_data.json
 * из папки rawData и создает из сырых данных
 * новые рабочие листы, которые сохраняются в файле WORK_LISTS.js
 * в текущей папке
 */

const fs = require("fs")

const prepareWorkList = require("./prepareWorkList")

const rawWorkList = JSON.parse(fs.readFileSync("rawData/raw_data.json"))

const workLists = []

function makeWorkList() {

  for (const workList of rawWorkList) {
    workLists.push(prepareWorkList(workList))
  }

  fs.writeFileSync("./WORK_LISTS.js", `const work_lists_prepared = ${JSON.stringify(workLists, null, 2)}`);
}

makeWorkList()