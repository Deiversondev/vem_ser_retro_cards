import { useEffect, useContext } from "react";
import { ListContext } from "../context/ListContext";
import api from "../api";
import CardRetrospectiva from "../components/cardRetrospectiva/CardRetrospectiva";
import CardKudoBox from "../components/cardKudoBox/CardKudoBox";

function Sprint (){

  const{setListRetrospectivas} = useContext(ListContext)
  const{setListKudoBoxes} = useContext(ListContext)

  useEffect(()=>{

    getRetrospectiva()
    getKudoBox()

  },[])

  
  const setIdKudoBox = () => {

    const idSprint = localStorage.getItem('idSprint')

    localStorage.setItem('idSprint',idSprint)
    window.location.href = '/createkudobox'
  } 
 
  const getRetrospectiva= async() =>{

    const idSprint = localStorage.getItem('idSprint')

    const {data} = await api.get(`/retrospectiva/id-sprint?idSprint=${idSprint}`)
    setListRetrospectivas(data)
    console.log(data)
  }

  const getKudoBox= async() =>{

    const idSprint = localStorage.getItem('idSprint')

    const {data} = await api.get('/kudobox')
    setListKudoBoxes(data)
    console.log(data)
  }
  
  return(
    <div>
      <h1>Página Sprint</h1>
      <button type="button" onClick={()=> setIdKudoBox()} >Criar nova Kudo Box</button>
      <CardRetrospectiva/>
      <CardKudoBox/>
    </div>
    
  )
}

export default Sprint;