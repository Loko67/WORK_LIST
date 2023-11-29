/**
 * @description набор функций для получения
 * значений ключей в сырых данных
 */
const correctionDate = require("./correctionDate")

function getWorkListId(rawWorklist) {
  return rawWorklist.workListId
}

function getWorkListUUID(rawWorklist) {
  return rawWorklist.workListUUID
}

function getDtCreated(rawDate) {
  if (!isNaN(new Date(rawDate.dtCreated))) {
    return new Date(rawDate.dtCreated).toISOString()
  } else {
    return correctionDate(rawDate.dtCreated)
  }
}

function getDtStart(rawDate) {
  if (!isNaN(new Date(rawDate.dtStart))) {
    return new Date(rawDate.dtStart).toISOString()
  } else {
    return correctionDate(rawDate.dtStart)
  }
}

function getDtEnd(rawDate) {
  if (!isNaN(new Date(rawDate.dtEnd))) {
    return new Date(rawDate.dtEnd).toISOString()
  } else {
    return correctionDate(rawDate.dtEnd)
  }
}

function getDtUpdated(rawDate) {
  if (!isNaN(new Date(rawDate.dtUpdated))) {
    return new Date(rawDate.dtUpdated).toISOString()
  } else {
    return correctionDate(rawDate.dtUpdated)
  }
}

function isUsedCase(rawWorklist) {
  return rawWorklist.usedCase
}

function isTradeIn(rawWorklist) {
  return rawWorklist.tradeIn
}

function isJuridicalPerson(rawWorklist) {
  return rawWorklist.juridicalPerson
}

function isSale(rawWorklist) {
  return rawWorklist.sale
}

function getEmployeeFullNameInComment(rawEventComment) {
  return rawEventComment.employeeFullName
}

function getEmployeeIdInComment(rawEventComment) {
  return rawEventComment.employeeId
}

function getCommentEvent(rawEventComment) {
  return rawEventComment.comment
}

function getContactPersonId(rawContact) {
  return rawContact.contactPersonId
}

function getContactPersonName(rawContact) {
  return rawContact.contactPersonName
}

function getContact(rawContact) {
  return rawContact.contact
}

function getContactType(rawContact) {
  return rawContact.contactType
}

function getManagerId(rawEvent) {
  return rawEvent.managerId
}

function getManagerName(rawEvent) {
  return rawEvent.managerName
}

function getEventTitle(rawEvent) {
  return rawEvent.eventTitle
}

function getEventTypeId(rawEvent) {
  return rawEvent.eventTypeId
}

function getEventTypeName(rawEvent) {
  return rawEvent.eventTypeName
}

function getEventId(rawEvent) {
  return rawEvent.id
}

function getIdComment(rawComment) {
  return rawComment.id
}

function getEmployeeIdComment(rawComment) {
  return rawComment.employeeId
}

function getComment(rawComment) {
  return rawComment.comment
}

function getGender(rawClient) {
  return rawClient.gender
}

function getNameClient(rawClient) {
  return rawClient.name
}

function getClientId(rawClient) {
  return rawClient.clientId
}

function getEmployeeId(rawSellers) {
  return rawSellers.employeeId
}

function getNameSeller(rawSellers) {
  return rawSellers.name
}

function getIdDivision(rawDivision) {
  return rawDivision.id
}

function getNameDivision(rawDivision) {
  return rawDivision.name
}

function getCityDivision(rawDivision) {
  return rawDivision.city
}

module.exports = {
  getWorkListId,
  getWorkListUUID,
  isUsedCase,
  isTradeIn,
  isJuridicalPerson,
  isSale,
  getEmployeeFullNameInComment,
  getEmployeeIdInComment,
  getCommentEvent,
  getContactPersonId,
  getContactPersonName,
  getContact,
  getContactType,
  getManagerId,
  getManagerName,
  getEventTitle,
  getEventTypeId,
  getEventTypeName,
  getEventId,
  getIdComment,
  getEmployeeIdComment,
  getComment,
  getGender,
  getNameClient,
  getClientId,
  getEmployeeId,
  getNameSeller,
  getIdDivision,
  getNameDivision,
  getCityDivision,
  getDtEnd,
  getDtUpdated,
  getDtStart,
  getDtCreated,
};