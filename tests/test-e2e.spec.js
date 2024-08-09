import env from "../src/config/env.js";
import { logger } from "../src/config/logger.js";
import { AxiosSingleton } from "../src/request/request-manager.js";

jest.setTimeout(30000);

let boardId;
let listIds = [];
let cardsIdList =[]
let checkListsId = []
let axiosInstance;

beforeAll(() =>{
  axiosInstance = AxiosSingleton.getInstance();
  logger.info("Set Request Manager Instance")
})

afterAll( async () => {
  await axiosInstance.delete(`${env.URL_TRELLO}1/boards/${boardId}?&key=${env.API_KEY}&token=${env.TOKEN_KEY}`)
  boardId=undefined;
  listIds = [];
  cardsIdList =[]
  checkListsId = []
  axiosInstance=undefined;
})

describe("Create test board", () =>{
  let response
  const name = "DS"
  beforeAll( async () =>{
    response = await axiosInstance.post(`${env.URL_TRELLO}1/boards/?name=${name}&key=${env.API_KEY}&token=${env.TOKEN_KEY}&defaultLists=false`)
  })

  afterAll(()=>{
    boardId = response.data.id
  })

  it("should return a status 200 when create a new board", () =>{
    const status = response.status;
    expect(status).toBe(200)
  })

  it("should return a status text OK when create a new board", () =>{
    const statusText = response.statusText;
    expect(statusText).toBe("OK")
  })

  it("should return a name DS when create a new board", () =>{
    const nameResponse = response.data.name;
    expect(nameResponse).toBe(name)
  })
})

describe("Create list at the board", () =>{
  let responseTodo;
  let responseProgress;
  let responseFinished
  const todo = "A Fazer"
  const progress = "Em Progresso"
  const finish = "Finalizado"
  beforeAll( async () =>{
    responseFinished = await axiosInstance.post(`${env.URL_TRELLO}1/boards/${boardId}/lists?name=${finish}&key=${env.API_KEY}&token=${env.TOKEN_KEY}`)
    responseProgress = await axiosInstance.post(`${env.URL_TRELLO}1/boards/${boardId}/lists?name=${progress}&key=${env.API_KEY}&token=${env.TOKEN_KEY}`)
    responseTodo = await axiosInstance.post(`${env.URL_TRELLO}1/boards/${boardId}/lists?name=${todo}&key=${env.API_KEY}&token=${env.TOKEN_KEY}`)
  })
  afterAll(()=>{
    listIds[0] = responseTodo.data.id
    listIds[1] = responseProgress.data.id
    listIds[2] = responseFinished.data.id
  })

  it("should return status 200 when creating a list 'A Fazer'", () =>{
    expect(responseTodo.status).toBe(200)
  })
  it("should return status 200 when creating a list 'Em Progresso'", () =>{
    expect(responseProgress.status).toBe(200)
  })
  it("should return status 200 when creating a list 'Finalizado'", () =>{
    expect(responseFinished.status).toBe(200)
  })

  it("should return status text OK when creating a list 'A Fazer'", () =>{
    expect(responseTodo.statusText).toBe("OK")
  })
  it("should return status text OK when creating a list 'Em Progresso'", () =>{
    expect(responseProgress.statusText).toBe("OK")
  })
  it("should return status text OK when creating a list 'Finalizado'", () =>{
    expect(responseFinished.statusText).toBe("OK")
  })

  it("should return a name 'A Fazer' when creating a list 'A Fazer'", () =>{
    expect(responseTodo.data.name).toBe(todo)
  })
  it("should return a name 'Em Progresso' when creating a list 'Em Progresso'", () =>{
    expect(responseProgress.data.name).toBe(progress)
  })
  it("should return a name 'Finalizado' when creating a list 'Finalizado'", () =>{
    expect(responseFinished.data.name).toBe(finish)
  })

  it("should return closed false when creating a list 'A Fazer'", () =>{
    expect(responseTodo.data.closed).toBe(false)
  })
  it("should return closed false when creating a list 'Em Progresso'", () =>{
    expect(responseProgress.data.closed).toBe(false)
  })
  it("should return closed false when creating a list 'Finalizado'", () =>{
    expect(responseFinished.data.closed).toBe(false)
  })

})

describe("Create a cards at the lists", () =>{
  let nameCardTest = "Hello World"
  let responseCardTest1;
  let responseCardTest2;
  let responseCardTest3;
  beforeAll( async () => {
    responseCardTest1 = await axiosInstance.post(`${env.URL_TRELLO}1/cards?idList=${listIds[0]}&key=${env.API_KEY}&token=${env.TOKEN_KEY}&name=${nameCardTest}`)
    responseCardTest2 = await axiosInstance.post(`${env.URL_TRELLO}1/cards?idList=${listIds[1]}&key=${env.API_KEY}&token=${env.TOKEN_KEY}&name=${nameCardTest}`)
    responseCardTest3 = await axiosInstance.post(`${env.URL_TRELLO}1/cards?idList=${listIds[2]}&key=${env.API_KEY}&token=${env.TOKEN_KEY}&name=${nameCardTest}`)
  })
  afterAll(() =>{
    cardsIdList[0] = responseCardTest1.data.id
    cardsIdList[1] = responseCardTest2.data.id
    cardsIdList[2] = responseCardTest3.data.id
  })
  it("should return status 200 when a card is created in the list 'A Fazer'", () =>{
    const status = responseCardTest1.status
    expect(status).toBe(200)
  })
  it("should return status text OK when a card is created in the list 'A Fazer'", () =>{
    const statusText = responseCardTest1.statusText
    expect(statusText).toBe("OK")
  })
  it("should return the name 'Hello World' when a card is created in the list 'A Fazer'", () =>{
    const name = responseCardTest1.data.name
    expect(name).toBe(nameCardTest)
  })
  it("should return status 200 when a card is created in the list 'Em Progresso'", () =>{
    const status = responseCardTest2.status
    expect(status).toBe(200)
  })
  it("should return status text OK when a card is created in the list 'Em Progresso'", () =>{
    const statusText = responseCardTest2.statusText
    expect(statusText).toBe("OK")
  })
  it("should return the name 'Hello World' when a card is created in the list 'Em Progresso'", () =>{
    const name = responseCardTest2.data.name
    expect(name).toBe(nameCardTest)
  })
  it("should return status 200 when a card is created in the list 'Finalizado'", () =>{
    const status = responseCardTest3.status
    expect(status).toBe(200)
  })
  it("should return status text OK when a card is created in the list 'Finalizado'", () =>{
    const statusText = responseCardTest3.statusText
    expect(statusText).toBe("OK")
  })
  it("should return the name 'Hello World' when a card is created in the list 'Finalizado'", () =>{
    const name = responseCardTest3.data.name
    expect(name).toBe(nameCardTest)
  })
} )

describe("Create a checklist at the cards", () =>{
  let checkListName = "Assignments for today"
  let responseCheckList1;
  let responseCheckList2;
  let responseCheckList3;
  beforeAll( async () => {
    responseCheckList1 = await axiosInstance.post(`${env.URL_TRELLO}1/checklists?idCard=${cardsIdList[0]}&key=${env.API_KEY}&token=${env.TOKEN_KEY}&name=${checkListName}`)
    responseCheckList2 = await axiosInstance.post(`${env.URL_TRELLO}1/checklists?idCard=${cardsIdList[1]}&key=${env.API_KEY}&token=${env.TOKEN_KEY}&name=${checkListName}`)
    responseCheckList3 = await axiosInstance.post(`${env.URL_TRELLO}1/checklists?idCard=${cardsIdList[2]}&key=${env.API_KEY}&token=${env.TOKEN_KEY}&name=${checkListName}`)
  })
  afterAll(() =>{
    checkListsId[0] = responseCheckList1.data.id
    checkListsId[1] = responseCheckList2.data.id
    checkListsId[2] = responseCheckList3.data.id
  })
  it("should return status 200 when creating a checklist in the card 'Hello World in the list 'A Fazer'", ()=>{
    const status = responseCheckList1.status
    expect(status).toBe(200)
  })
  it("should return status text OK when creating a checklist in the card 'Hello World in the list 'A Fazer'", ()=>{
    const statusText = responseCheckList1.statusText
    expect(statusText).toBe("OK")
  })
  it("should return name 'Assignments for today' when creating a checklist in the card 'Hello World in the list 'A Fazer'", ()=>{
    const name = responseCheckList1.data.name
    expect(name).toBe(checkListName)
  })
  it("should return status 200 when creating a checklist in the card 'Hello World in the list 'Em Progresso'", ()=>{
    const status = responseCheckList2.status
    expect(status).toBe(200)
  })
  it("should return status text OK when creating a checklist in the card 'Hello World in the list 'Em Progresso'", ()=>{
    const statusText = responseCheckList2.statusText
    expect(statusText).toBe("OK")
  })
  it("should return name 'Assignments for today' when creating a checklist in the card 'Hello World in the list 'Em Progresso'", ()=>{
    const name = responseCheckList2.data.name
    expect(name).toBe(checkListName)
  })
  it("should return status 200 when creating a checklist in the card 'Hello World in the list 'Finalizado'", ()=>{
    const status = responseCheckList3.status
    expect(status).toBe(200)
  })
  it("should return status text OK when creating a checklist in the card 'Hello World in the list 'Finalizado'", ()=>{
    const statusText = responseCheckList3.statusText
    expect(statusText).toBe("OK")
  })
  it("should return name 'Assignments for today' when creating a checklist in the card 'Hello World in the list 'Finalizado'", ()=>{
    const name = responseCheckList3.data.name
    expect(name).toBe(checkListName)
  })
})
describe("Create a check item at the checklist", ()=>{
  let checkItemName1 = "Work at the software quality lab"
  let checkItemName2 = "Meeting with the software quality team"
  let responseCheckListItens1CheckList1;
  let responseCheckListItens2CheckList1;
  let responseCheckListItens1CheckList2;
  let responseCheckListItens2CheckList2;
  let responseCheckListItens1CheckList3;
  let responseCheckListItens2CheckList3;
  beforeAll(async () =>{
    responseCheckListItens1CheckList1 = await axiosInstance.post(`${env.URL_TRELLO}1/checklists/${checkListsId[0]}/checkItems?name=${checkItemName1}&key=${env.API_KEY}&token=${env.TOKEN_KEY}`)
    responseCheckListItens2CheckList1 = await axiosInstance.post(`${env.URL_TRELLO}1/checklists/${checkListsId[0]}/checkItems?name=${checkItemName2}&key=${env.API_KEY}&token=${env.TOKEN_KEY}&checked=true`)

    responseCheckListItens1CheckList2 = await axiosInstance.post(`${env.URL_TRELLO}1/checklists/${checkListsId[1]}/checkItems?name=${checkItemName1}&key=${env.API_KEY}&token=${env.TOKEN_KEY}`)
    responseCheckListItens2CheckList2 = await axiosInstance.post(`${env.URL_TRELLO}1/checklists/${checkListsId[1]}/checkItems?name=${checkItemName2}&key=${env.API_KEY}&token=${env.TOKEN_KEY}&checked=true`)

    responseCheckListItens1CheckList3 = await axiosInstance.post(`${env.URL_TRELLO}1/checklists/${checkListsId[2]}/checkItems?name=${checkItemName1}&key=${env.API_KEY}&token=${env.TOKEN_KEY}`)
    responseCheckListItens2CheckList3 = await axiosInstance.post(`${env.URL_TRELLO}1/checklists/${checkListsId[2]}/checkItems?name=${checkItemName2}&key=${env.API_KEY}&token=${env.TOKEN_KEY}&checked=true`)
  })
  it("should a return a status 200 when create a check item in the checklist at card 'A Fazer'", () =>{
    const status = responseCheckListItens1CheckList1.status
    expect(status).toBe(200)
  })
  it("should a return a status 200 when create a check item checked in the checklist at card 'A Fazer'", () =>{
    const status = responseCheckListItens2CheckList1.status
    expect(status).toBe(200)
  })
  it("should a return a status 200 when create a check item in the checklist at card 'Em Progresso'", () =>{
    const status = responseCheckListItens1CheckList2.status
    expect(status).toBe(200)
  })
  it("should a return a status 200 when create a check item checked in the checklist at card 'Em Progresso'", () =>{
    const status = responseCheckListItens2CheckList2.status
    expect(status).toBe(200)
  })
  it("should a return a status 200 when create a check item in the checklist at card 'Finalizado'", () =>{
    const status = responseCheckListItens1CheckList3.status
    expect(status).toBe(200)
  })
  it("should a return a status 200 when create a check item checked in the checklist at card 'Finalizado'", () =>{
    const status = responseCheckListItens2CheckList3.status
    expect(status).toBe(200)
  })
  it("should a return a status text ok when create a check item in the checklist at card 'A Fazer'", () =>{
    const statusText = responseCheckListItens1CheckList1.statusText
    expect(statusText).toBe("OK")
  })
  it("should a return a status text OK when create a check item checked in the checklist at card 'A Fazer'", () =>{
    const statusText = responseCheckListItens2CheckList1.statusText
    expect(statusText).toBe("OK")
  })
  it("should a return a status text OK when create a check item in the checklist at card 'Em Progresso'", () =>{
    const statusText = responseCheckListItens1CheckList2.statusText
    expect(statusText).toBe("OK")
  })
  it("should a return a status text OK when create a check item checked in the checklist at card 'Em Progresso'", () =>{
    const statusText = responseCheckListItens2CheckList2.statusText
    expect(statusText).toBe("OK")
  })
  it("should a return a status text OK when create a check item in the checklist at card 'Finalizado'", () =>{
    const statusText = responseCheckListItens1CheckList3.statusText
    expect(statusText).toBe("OK")
  })
  it("should a return a status text OK when create a check item checked in the checklist at card 'Finalizado'", () =>{
    const statusText = responseCheckListItens2CheckList3.statusText
    expect(statusText).toBe("OK")
  })
  it("should a return a name 'work at the software quality lab' when create a check item in the checklist at card 'A Fazer'", () =>{
    const name = responseCheckListItens1CheckList1.data.name
    expect(name).toBe(checkItemName1)
  })
  it("should a return a name 'work at the software quality lab' when create a check item checked in the checklist at card 'A Fazer'", () =>{
    const name = responseCheckListItens1CheckList2.data.name
    expect(name).toBe(checkItemName1)
  })
  it("should a return a name 'work at the software quality lab' when create a check item in the checklist at card 'Em Progresso'", () =>{
    const name = responseCheckListItens1CheckList3.data.name
    expect(name).toBe(checkItemName1)
  })
  it("should a return a name 'Meeting with the software quality team' when create a check item checked in the checklist at card 'Em Progresso'", () =>{
    const name = responseCheckListItens2CheckList1.data.name
    expect(name).toBe(checkItemName2)
  })
  it("should a return a name 'Meeting with the software quality team' when create a check item in the checklist at card 'Finalizado'", () =>{
    const name = responseCheckListItens2CheckList2.data.name
    expect(name).toBe(checkItemName2)
  })
  it("should a return a name 'Meeting with the software quality team' when create a check item checked in the checklist at card 'Finalizado'", () =>{
    const name = responseCheckListItens2CheckList3.data.name
    expect(name).toBe(checkItemName2)
  })
  it("should a return the complete item in the checklist at card 'A Fazer'", () =>{
    const state = responseCheckListItens2CheckList1.data.state
    expect(state).toBe("complete")
  })
  it("should a return the complete item in the checklist at card 'Em Progresso'", () =>{
    const state = responseCheckListItens2CheckList2.data.state
    expect(state).toBe("complete")
  })
  it("should a return the complete item in the checklist at card 'Finalizado'", () =>{
    const state = responseCheckListItens2CheckList3.data.state
    expect(state).toBe("complete")
  })
})