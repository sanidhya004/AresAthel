import React from 'react'
import { Table } from '@mantine/core';
import { Avatar } from '@mantine/core';
import { Button } from '@mantine/core';
import { NavLink,useNavigate } from 'react-router-dom';

const TableComp = ({data}) => {
  const naviagte= useNavigate()
  console.log(data)
  const rows = data?.map((data) => 
  {
    const date= new Date(data.app_date)
    const dtstring=`${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`
   return(
    <Table.Tr key={data._id}>
      <Table.Td><p className='d-flex align-items-center'><span style={{marginRight:"3px"}}> <Avatar src={"https://s3-alpha-sig.figma.com/img/63c4/be83/222c85e6c852819bc5d4b24a87a87fb6?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CCIP7DFZ2x9yXzdFgWFArmwk7ph~5ovexvWejMmfkCQ~WgL2w9JE5hnFnNqVAL4taDDWEjteHCc5bRiYWlLHA24~LvWiUc1~PEbqoUAlIB9sMCg-OV3YqAD-kSOuprPZInRtZXqkPs7L5-kQj5mwK2gh8vKM7LUP8HLwdmySsOkyBOrwrflVNRrHhdetXuDviaOVaZ7geVH4tHO~FmIKqarODz95EOvKs20HPIztElUMoNHMh3aeYMUGPb-oLWDswwSXGBThPln0sXvslUiYJoZHoIcVtr~ln9CN1huBrXFR~T~Lf~nk2jEuFdM1TmxN5CwcvCo2YNDotPY5O1gBoA__"} alt="no image here" /></span>{data.doctor_trainer}</p></Table.Td>
      <Table.Td><p>{data.service_type}</p></Table.Td>
      <Table.Td><p>{dtstring}</p></Table.Td>
      <Table.Td><p>{data.app_time}</p></Table.Td>
      <Table.Td>{
        <div className='d-flex flex-column gap-2'>
     <Button variant="filled" color="#7257FF" style={{fontSize:"12px",borderRadius:"12px"}} onClick={()=>{naviagte(`/a-drill`)}}>Start Drill </Button>
          <Button variant="filled" color="#7257FF26"style={{fontSize:"12px",color:"#7257FF",borderRadius:"12px" }}>Pay</Button>
          </div>
        }</Table.Td>
    </Table.Tr>
  )
});
  return (
    <Table.ScrollContainer minWidth={500} type="native">
      <Table  >
        <Table.Thead>
          <Table.Tr>
            <Table.Th>Name</Table.Th>
            <Table.Th>Service Type <svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.2003 9V16.88C10.2403 17.18 10.1403 17.5 9.91033 17.71C9.81781 17.8027 9.70792 17.8762 9.58695 17.9264C9.46598 17.9766 9.33629 18.0024 9.20533 18.0024C9.07436 18.0024 8.94468 17.9766 8.8237 17.9264C8.70273 17.8762 8.59284 17.8027 8.50033 17.71L6.49033 15.7C6.38126 15.5934 6.29833 15.463 6.24802 15.319C6.19772 15.175 6.18139 15.0213 6.20033 14.87V9H6.17033L0.410326 1.62C0.247935 1.41153 0.17466 1.14726 0.206514 0.88493C0.238368 0.622602 0.372761 0.383546 0.580326 0.22C0.770326 0.08 0.980326 0 1.20033 0H15.2003C15.4203 0 15.6303 0.08 15.8203 0.22C16.0279 0.383546 16.1623 0.622602 16.1941 0.88493C16.226 1.14726 16.1527 1.41153 15.9903 1.62L10.2303 9H10.2003Z" fill="#3C3F53"/>
</svg>
</Table.Th>
            <Table.Th>Date</Table.Th>
            <Table.Th>Time</Table.Th>
            <Table.Th>Action</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>{rows}</Table.Tbody>
      </Table>
    </Table.ScrollContainer>
  )
}

export default TableComp