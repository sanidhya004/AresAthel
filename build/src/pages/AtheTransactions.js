import React, { useState } from "react";
import AtheleteMenu from "../components/layout/AtheleteMenu";
import { Input, CloseButton } from "@mantine/core"
import { Table,Avatar } from '@mantine/core';
import TransactionCard from "../components/TransactionCard";
import { GetTransaction, stripestep1 } from "../features/apiCall";
import { useEffect } from "react";
import {useDispatch} from 'react-redux'
import { NavLink,useNavigate } from "react-router-dom";
import { Select } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { Modal, Button } from '@mantine/core';
import { Calendar } from '@mantine/dates';
import dayjs from 'dayjs';
import {loadStripe} from '@stripe/stripe-js';
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
import PaymentForm from "../components/PaymentForm";



const AtheTransactions = () => {

  const [opened, { open, close }] = useDisclosure(false);
  const[paymentmodal,paymentmodalhandler]=useDisclosure(false)
  const navigate=useNavigate()
  const dispatch=useDispatch()
  const [showData,setShowData]=useState([])
  const getdetail=async()=>{
     const {transactions}=await GetTransaction(dispatch,{date:date,service_type:value})
     console.log(transactions)
     handleappointmentData(transactions)
  }
  const [selected, setSelected] = useState([]);
  const [date,setDate]=useState(null)
  const [value, setValue] = useState(null );
  const [clientSecret,setclientsecret]=useState(null)
  const[mainheading,setmainheading]=useState("")
  const [subheading, setsubheading] = useState("")
  const [bodyforpaymnet,setbodyforpyamnet]=useState(null)
  const handleSelect = (date) => {
    
    const temp=new Date(date)
   
    const res=`${temp.getFullYear()}-${temp.getMonth()+1}-${temp.getDate()}`
    setDate(res)
    // const isSelected = selected.some((s) => dayjs(date).isSame(s, 'date'));
    // if (isSelected) {
    //   setSelected((current) => current.filter((d) => !dayjs(d).isSame(date, 'date')));
     
    
    // } else if (selected.length < 3) {
    //   setSelected((current) => [...current, date]);
    //   alert(selected)
    // }
    close()
  };

  useEffect(()=>{
    getdetail()
  },[date,value])
 
  const makePayment=async(service_type,bookingid)=>{
    
      const stripe= await loadStripe("pk_test_51Oj2PsSH9ISObaXSOzY9UoQzpiIQE8X0Z7jn0j19DWqQkC5XohMv1GsU30vmMf6tkRUj7FQlz7DS09BM5A2Sk9fh00FxwNewLo")
     var body
      if(service_type=="planPurchase"){
        body={
          product:{
             
             "type":service_type,
             "userId":localStorage.getItem("userId"),
             "isPaid": true
          }
         }
          
     }
     else{
      body={
        product:{
           
           "type":"booking",
           "bookingId":bookingid,
           "isPaid": true
           

        }
       }
       
     }
      setbodyforpyamnet(body.product)
     
     const headers={
      "Content-type":"application/json"
     }
     const data= await stripestep1(dispatch,{body})
     setclientsecret(data.clientSecret)
     paymentmodalhandler.open()
  }
  const handleappointmentData=(arr)=>{

    const apointmentData= arr?.map((item,index)=>{
      const date = new Date(item.date);
      const date_dis = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
      var btn;
      if(item.payment_status=="paid"){
         btn=<button className="fill">Paid {item.amount}$</button>
      }
      else{
        btn=<button className="fill" onClick={()=>{makePayment(item.service_type,item.bookingId);setmainheading("Appointment");setsubheading(`${date_dis}`)}}>Pay {item.amount}$</button>
      }
      if(item.service_type!="planPurchase"){
        return {
          Name: (
              <div className='name-cont'>
                  <Avatar src={url} />
                  <div>
                      <h6>{item.doctor}</h6>
                      <p>curtis.weaver@example.com</p>
                  </div>
              </div>
          ),
          mass: `${item.service_type}`,
          symbol: `${date_dis}`,
          name: 'Carbon',
          time: <p className='time'>{item.app_time}</p>,
          button: <button className={`${item.payment_status}`}>{item.payment_status}</button>,
          status:btn
      };
     
      }

     
      else{
        return {
          Name: (
              <div className='name-cont'>
                  <Avatar src={url} />
                  <div>
                      <h6>{item.plan}</h6>
                      <p>{item.phase}</p>
                  </div>
              </div>
          ),
          mass: `Plan Purchase`,
          symbol: `${date_dis}`,
          name: 'Carbon',
          time: <p className='time'>{item.app_time}</p>,
          button: <button className={`${item.payment_status}`} >{item.payment_status}</button>,
          status: <button className="fill" onClick={()=>{makePayment(item.service_type);setmainheading(item.plan);setsubheading(item.phase)}}>Pay {item.amount}$</button>
      };
      }
     
      
    })
  
    setShowData(apointmentData)
   }
    
   console.log(showData)
  
  const url="https://s3-alpha-sig.figma.com/img/63c4/be83/222c85e6c852819bc5d4b24a87a87fb6?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Y4SY5J0CmBpurLNdyssoFuDVIjUivt~TjdQaMbuLy9MqbOJzReqwYFykcxiFAm4wjnxQHbY0fBds-c8jJOuSEhxnIZytiS~EuxX~PytgwY6cobBUszo0gi-oqOTVUlJ89JtgK4fyyXVBeeavR9sisvIFpS740Bty68TTfxndSOlMBM4eOox~yT9ifL2JckNSFBj5WNjS7Cf0YAqIPr9DL4KVoE5gdsTtDmzobV4sVvo9mX9vwMMkr6hAh-NI07QoQlzioEP6B~vuit0ps5EsYwDDZpBmCN5CeU5SqRL-pbW2vNZNXPIm4IUe-bGgJZgdXVmpCnw3mPqykaekuBZ7kw__"
  const elements = [
    { Name: <div className='name-cont'><Avatar src={url}/><div><h6>Mr. Scott Mctominay</h6> <p>curtis.weaver@example.com</p></div></div>, mass: "Sports Vision Performance", symbol: 'Oct 17, 2023', name: 'Carbon',time:<p className='time'>9:23 AM</p>,button:<button className='pending'>Pending</button>,status:<button className="fill">Pay Now</button> },
    { Name: <div className='name-cont'><Avatar src={url}/><div><h6>Mr. Scott Mctominay</h6> <p>curtis.weaver@example.com</p></div></div>, mass: "Sports Vision Performance", symbol: 'Oct 17, 2023', name: 'Nitrogen',time:<p className='time'>9:23 AM</p> ,button:<button className='fail'>Failed</button>,status:<button className="outlined">View Details</button>},
    { Name: <div className='name-cont'><Avatar src={url}/><div><h6>Mr. Scott Mctominay</h6> <p>curtis.weaver@example.com</p></div></div>, mass: "Sports Vision Performance", symbol: 'Oct 17, 2023', name: 'Yttrium',time:<p className='time'>9:23 AM</p>,button:<button className='success'>Success</button>,status:<button className="fill">Pay Now</button> },
    { Name: <div className='name-cont'><Avatar src={url}/><div><h6>Mr. Scott Mctominay</h6> <p>curtis.weaver@example.com</p></div></div>, mass: "Sports Vision Performance", symbol: 'Oct 17, 2023', name: 'Barium',time:<p className='time'>9:23 AM</p>,button:<button className='pending'>Pending</button>,status:<button className="outlined">View Details</button> },
    { Name: <div className='name-cont'><Avatar src={url}/><div><h6>Mr. Scott Mctominay</h6> <p>curtis.weaver@example.com</p></div></div>, mass: "Sports Vision Performance", symbol: 'Oct 17, 2023', name: 'Cerium',time:<p className='time'>9:23 AM</p>,button:<button className='success'>Success</button> ,status:<button className="outlined">View Details</button>},
    { Name: <div className='name-cont'><Avatar src={url}/><div><h6>Mr. Scott Mctominay</h6> <p>curtis.weaver@example.com</p></div></div>, mass: "Sports Vision Performance", symbol: 'Oct 17, 2023', name: 'Cerium',time:<p className='time'>9:23 AM</p>,button:<button className='fail'>Failed</button>,status:<button className="fill">Pay Now</button> },
    { Name: <div className='name-cont'><Avatar src={url}/><div><h6>Mr. Scott Mctominay</h6> <p>curtis.weaver@example.com</p></div></div>, mass: "Sports Vision Performance", symbol: 'Oct 17, 2023', name: 'Cerium',time:<p className='time'>9:23 AM</p>,button:<button className='success'>Success</button>,status:<button className="outlined">View Details</button> },
  ];
  const rows = showData.map((element) => (
    <Table.Tr key={element.name}>
      <Table.Td>{element.Name}</Table.Td>
      <Table.Td>{element.mass}</Table.Td>
      <Table.Td>{element.symbol}</Table.Td>
     
      <Table.Td>{element.button}</Table.Td>
      <Table.Td>{element.status}</Table.Td>
    </Table.Tr>
  ));  
  return (
    <AtheleteMenu>
       <Modal.Root opened={paymentmodal} onClose={()=>{
        paymentmodalhandler.close(); setclientsecret(null)
       }}   overlayProps={{
          backgroundOpacity: 0.55,
          blur: 6,
        }} style={{background:"transparent"}} >
        <Modal.Overlay />
        <Modal.Content>
               <PaymentForm clientSecret={clientSecret} mainheading={mainheading} subheading={subheading} body={bodyforpaymnet}/>
        </Modal.Content>
      </Modal.Root>
      <Modal.Root opened={opened} onClose={close}   overlayProps={{
          backgroundOpacity: 0.55,
          blur: 6,
        }} style={{background:"transparent"}} >
        <Modal.Overlay />
        <Modal.Content>
          
          
          <div style={{display:"flex",justifyContent:"flex-end",backgroundColor:"white",borderRadius:"30px",width:"300px",padding:"20px",margin:"0 auto"}}>
         <Calendar
         style={{margin:"0px"}}
      getDayProps={(date) => ({
        selected: selected.some((s) => dayjs(date).isSame(s, 'date')),
        onClick: () => handleSelect(date),
      })}
    />
    </div>
       
        </Modal.Content>
      </Modal.Root>
      <div className="transaction-table-cont">
        <div className="transaction-table">
          <div className="transaction-table-console">
            <h3>Transactions</h3>
            <div className="d-flex console-inputs">
        <Select
     
      placeholder="Select Service Type"
      data={['Medical/OfficeVisit', 'ConsultationCall', 'AddTrainingSessions', 'Post-ConcussionEvaluation','SportsVisionPerformanceEvaluation','planPurchase']}
      comboboxProps={{ transitionProps: { transition: 'pop', duration: 200 } }}
      onChange={setValue}
    />
       
<svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={open}>
<rect width="50" height="50" rx="10" fill="#F4F4F4"/>
<path d="M34.6667 14.6667H32V13.3333C32 12.9797 31.8595 12.6406 31.6095 12.3905C31.3594 12.1405 31.0203 12 30.6667 12C30.313 12 29.9739 12.1405 29.7239 12.3905C29.4738 12.6406 29.3333 12.9797 29.3333 13.3333V14.6667H21.3333V13.3333C21.3333 12.9797 21.1929 12.6406 20.9428 12.3905C20.6928 12.1405 20.3536 12 20 12C19.6464 12 19.3072 12.1405 19.0572 12.3905C18.8071 12.6406 18.6667 12.9797 18.6667 13.3333V14.6667H16C14.9391 14.6667 13.9217 15.0881 13.1716 15.8382C12.4214 16.5884 12 17.6058 12 18.6667V34.6667C12 35.7275 12.4214 36.7449 13.1716 37.4951C13.9217 38.2452 14.9391 38.6667 16 38.6667H34.6667C35.7275 38.6667 36.7449 38.2452 37.4951 37.4951C38.2452 36.7449 38.6667 35.7275 38.6667 34.6667V18.6667C38.6667 17.6058 38.2452 16.5884 37.4951 15.8382C36.7449 15.0881 35.7275 14.6667 34.6667 14.6667ZM36 34.6667C36 35.0203 35.8595 35.3594 35.6095 35.6095C35.3594 35.8595 35.0203 36 34.6667 36H16C15.6464 36 15.3072 35.8595 15.0572 35.6095C14.8071 35.3594 14.6667 35.0203 14.6667 34.6667V25.3333H36V34.6667ZM36 22.6667H14.6667V18.6667C14.6667 18.313 14.8071 17.9739 15.0572 17.7239C15.3072 17.4738 15.6464 17.3333 16 17.3333H18.6667V18.6667C18.6667 19.0203 18.8071 19.3594 19.0572 19.6095C19.3072 19.8595 19.6464 20 20 20C20.3536 20 20.6928 19.8595 20.9428 19.6095C21.1929 19.3594 21.3333 19.0203 21.3333 18.6667V17.3333H29.3333V18.6667C29.3333 19.0203 29.4738 19.3594 29.7239 19.6095C29.9739 19.8595 30.313 20 30.6667 20C31.0203 20 31.3594 19.8595 31.6095 19.6095C31.8595 19.3594 32 19.0203 32 18.6667V17.3333H34.6667C35.0203 17.3333 35.3594 17.4738 35.6095 17.7239C35.8595 17.9739 36 18.313 36 18.6667V22.6667Z" fill="#8C90AA"/>
</svg>

        </div>
          </div>
          <div className="mt-3 table-cont">
            
          <Table>
      <Table.Thead>
        <Table.Tr style={{fontWeight:"600",fontSize:"18px"}}>
          <Table.Th >Name</Table.Th>
          <Table.Th >Service Type</Table.Th>
          <Table.Th>Date</Table.Th>
          
          <Table.Th>Payment Status</Table.Th>
          <Table.Th>Service Status</Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>{rows}</Table.Tbody>
    </Table>
          </div>
          <div className="mobile-cont">
           <TransactionCard/>
           <TransactionCard/>
           <TransactionCard/>
           <TransactionCard/>
           
          </div>
        </div>
      </div>
      
    </AtheleteMenu>
  );
};

export default AtheTransactions;