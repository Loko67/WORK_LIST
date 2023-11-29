const getFunctions = require('./getFunctions');

/**
 * @description создание нового объекта РЛ из сырых данных
 * 
 * @param {object} РЛ из сырых данных
 * 
 * @returns {object}
 */
function prepareWorkList(rawWorkList) {
  const newWorkList = {
    workListId: getFunctions.getWorkListId(rawWorkList),
    workListUUID: getFunctions.getWorkListUUID(rawWorkList),
    dtStart: getFunctions.getDtStart(rawWorkList),
    dtEnd: getFunctions.getDtEnd(rawWorkList),
    dtUpdated: getFunctions.getDtUpdated(rawWorkList),
    internalId: `nameDivision__${getFunctions.getWorkListUUID(rawWorkList)}`,
    usedCase: getFunctions.isUsedCase(rawWorkList),
    tradeIn: getFunctions.isTradeIn(rawWorkList),
    juridicalPerson: getFunctions.isJuridicalPerson(rawWorkList),
    dtCreated: new Date().toISOString(),
    sale: getFunctions.isSale(rawWorkList),
    divisions: prepareDivision(rawWorkList.divisions),
    testDrives: prepareTestDrive(rawWorkList.testDrives),
    events: prepareEvent(rawWorkList.events),
    needs: prapareNeeds(rawWorkList.needs),
    offers: prapareOffer(rawWorkList.offers),
    comments: prepareComment(rawWorkList.comments),
    clients: prepareClient(rawWorkList.clients),
    sellers: prepareSeller(rawWorkList.sellers)
  }
  return newWorkList
}

/**
 * @description создание массива событий из РЛ
 * 
 * @param {object} событие из сырых данных
 * 
 * @returns {Array}
 */
function prepareEvent(rawEvents) {
  const eventsArr = []

  for (const event of rawEvents) {
    const newEvent = {
      comments: prepareEventComment(event.comments),
      clients: prepareEventClient(event.clients),
      managerId: getFunctions.getManagerId(event),
      managerName: getFunctions.getManagerName(event),
      eventTitle: getFunctions.getEventTitle(event),
      eventTypeId: getFunctions.getEventTypeId(event),
      eventTypeName: getFunctions.getEventTypeName(event),
      dtEnd: getFunctions.getDtEnd(event),
      dtCreated: getFunctions.getDtCreated(event),
      dtStart: getFunctions.getDtStart(event),
      id: getFunctions.getEventId(event)
    }
    eventsArr.push(newEvent)
  }
  return eventsArr
}

/**
 * @description создание массива клиентов из РЛ
 * 
 * @param {object} клиент из сырых данных
 * 
 * @returns {Array}
 */
function prepareClient(rawClients) {
  const prepareClientsArr = []

  for (const prepareClient of rawClients) {
    const newClient = {
      contacts: prepareClientContact(prepareClient.contacts),
      comments: prepareClientComment(prepareClient.comments),
      gender: getFunctions.getGender(prepareClient),
      name: getFunctions.getNameClient(prepareClient),
      clientId: getFunctions.getClientId(prepareClient)
    }
    prepareClientsArr.push(newClient)
  }
  return prepareClientsArr
}

/**
 * @description создание массива контактов клиента из РЛ
 * 
 * @param {object} контакты из сырых данных
 * 
 * @returns {Array}
 */
function prepareClientContact(rawClientContacts) {
  const clientContactsArr = []

  for (const clientContat of rawClientContacts) {
    const newClientContact = {
      contactPersonId: getFunctions.getContactPersonId(clientContat),
      contactPersonName: getFunctions.getContactPersonName(clientContat),
      contact: getFunctions.getContact(clientContat),
      contactType: getFunctions.getContactType(clientContat)
    }
    clientContactsArr.push(newClientContact)
  }
  return clientContactsArr
}


/**
 * @description создание массива комментариев к клиенту из РЛ
 * 
 * @param {object} комментарии к клиенту из сырых данных
 * 
 * @returns {Array}
 */
function prepareClientComment(rawClientComments) {
  const clientCommentsArr = []

  for (const clientComment of rawClientComments) {
    const newClientComment = {
      id: getFunctions.getIdComment(clientComment),
      employeeId: getFunctions.getEmployeeId(clientComment),
      comment: getFunctions.getComment(clientComment),
      dtUpdated: getFunctions.getDtUpdated(clientComment),
      dtCreated: getFunctions.getDtCreated(clientComment)
    }
    clientCommentsArr.push(newClientComment)
  }
  return clientCommentsArr
}

/**
 * @description создание массива клиентов из события в РЛ
 * 
 * @param {object} клиент из события в сырых данных
 * 
 * @returns {Array}
 */
function prepareEventClient(rawEventClients) {
  const prepareEventClientsArr = []

  for (const eventClient of rawEventClients) {
    const newEventClient = {
      contacts: prepareClientContact(eventClient.contacts),
      rawData: JSON.parse(JSON.stringify(eventClient)),
      name: getFunctions.getNameClient(eventClient),
      clientId: getFunctions.getClientId(eventClient)
    }
    prepareEventClientsArr.push(newEventClient)
  }
  return prepareEventClientsArr
}


/**
 * @description создание массива комментариев к событию
 * 
 * @param {object} комментарии к событию из сырых данных
 * 
 * @returns {Array}
 */
function prepareEventComment(rawEventComments) {
  const eventCommentsArr = []

  for (const eventComment of rawEventComments) {
    const newEventComment = {
      employeeFullName: getFunctions.getEmployeeFullNameInComment(eventComment),
      employeeId: getFunctions.getEmployeeIdInComment(eventComment),
      comment: getFunctions.getCommentEvent(eventComment),
      dtUpdated: getFunctions.getDtUpdated(eventComment),
      dtCreated: getFunctions.getDtCreated(eventComment)
    }
    eventCommentsArr.push(newEventComment)
  }
  return eventCommentsArr
}


/**
 * @description создание массива комментариев к РЛ
 * 
 * @param {object} комментарии к РЛ из сырых данных
 * 
 * @returns {Array}
 */
function prepareComment(rawComments) {
  const commentsArr = []

  for (const comment of rawComments) {
    const newComment = {
      id: getFunctions.getIdComment(comment),
      employeeId: getFunctions.getEmployeeIdComment(comment),
      comment: getFunctions.getComment(comment),
      dtUpdated: getFunctions.getDtUpdated(comment),
      dtCreated: getFunctions.getDtCreated(comment)
    }
    commentsArr.push(newComment)
  }
  return commentsArr
}

/**
 * @description создание массива продавцов из РЛ
 * 
 * @param {object} продавец из сырых данных
 * 
 * @returns {Array}
 */
function prepareSeller(rawSellers) {
  const sellersArr = []

  for (const seller of rawSellers) {
    const newSeller = {
      employeeId: getFunctions.getEmployeeId(seller),
      name: getFunctions.getNameSeller(seller)
    }
    sellersArr.push(newSeller)
  }
  return sellersArr
}

/**
 * @description создание массива подразделений
 * 
 * @param {object} подразделение из сырых данных
 * 
 * @returns {Array}
 */
function prepareDivision(rawDivisions) {
  const divisionsArr = []
  if (rawDivisions) {
    for (division of rawDivisions) {
      const newDivision = {
        id: getFunctions.getIdDivision(division),
        name: getFunctions.getNameDivision(division),
        city: getFunctions.getCityDivision(division)
      }
      divisionsArr.push(newDivision)
    }
  }
  return divisionsArr
}

function prepareTestDrive(rawTestDrives) {
  const testDrivesArr = []
  if (rawTestDrives) {
    for (testDrive of rawTestDrives) {
      const newTestDrive = {
        ////////////////////
      }
      testDrivesArr.push(newTestDrive)
    }
  }
  return testDrivesArr
}

function prapareNeeds(rawNeeds) {
  const needsArr = []
  if (rawNeeds) {
    for (needs of rawNeeds) {
      const newNeeds = {
        ////////////////////
      }
      needsArr.push(newNeeds)
    }
  }
  return needsArr
}

function prapareOffer(rawOffers) {
  const offersArr = []
  if (rawOffers) {
    for (offer of rawOffers) {
      const newOffer = {
        ////////////////////
      }
      offersArr.push(newOffer)
    }
  }
  return offersArr
}

module.exports = prepareWorkList