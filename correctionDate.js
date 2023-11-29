/**
 * @description преобразование невалидной даты из сырых
 * данных в валидную
 * 
 * @param {string} строка с невалидной датой из сырых данных
 * @returns {Date}
 */
function correctionDate(rawDate) {
  const regEx = /(\d+)-(\d{1,2})-(\d{1,2})T((\d{1,2}):(\d{1,2}):(\d{1,2}))/;
  const match = rawDate.match(regEx).map(item => {
    return item.length < 2 ? "0" + item : item
  })
const [, year, month, day, , hour, min, sec] = match
    const formattedDate = new Date(`${year}-${month}-${day}T${hour}:${min}:${sec}`).toISOString();
    return formattedDate
}

module.exports = correctionDate