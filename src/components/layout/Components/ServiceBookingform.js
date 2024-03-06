import {React,useState }from 'react'
import { DateInput } from '@mantine/dates';
import { Select } from '@mantine/core';
import { MultiSelect } from '@mantine/core';
const ServiceBookingform = () => {
    const [value, setValue] = useState(null);
  return (
    <div  className="serviceBookingForm"style={{marginTop:"10px",display:"flex",flexDirection:"column",gap:"6px",width:"100%",height:"500px",overflowY:"scroll"}}>
      <div>
      <DateInput
      value={value}
      variant="filled"
      onChange={setValue}
      label="Appointment Date"
      placeholder="Date input"
      rightSection={<i class="fa-solid fa-calendar"></i>}
      style={{height:"70px"}}
    />
    </div>
    <div>
      <p>d</p>
   
      <MultiSelect
      label="Location"
     
      variant='filled'
      data={['React', 'Angular', 'Vue', 'Svelte']}
      searchable
     leftSection={<svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_894_5923)">
<path fill-rule="evenodd" clip-rule="evenodd" d="M12 2.17871C14.3869 2.17871 16.6761 3.12692 18.364 4.81475C20.0518 6.50258 21 8.79176 21 11.1787C21 14.2527 19.324 16.7687 17.558 18.5737C16.6755 19.4656 15.7128 20.2744 14.682 20.9897L14.256 21.2797L14.056 21.4127L13.679 21.6527L13.343 21.8577L12.927 22.0997C12.6445 22.2605 12.325 22.345 12 22.345C11.675 22.345 11.3555 22.2605 11.073 22.0997L10.657 21.8577L10.137 21.5377L9.945 21.4127L9.535 21.1397C8.42298 20.387 7.38707 19.5276 6.442 18.5737C4.676 16.7677 3 14.2527 3 11.1787C3 8.79176 3.94821 6.50258 5.63604 4.81475C7.32387 3.12692 9.61305 2.17871 12 2.17871ZM12 4.17871C10.1435 4.17871 8.36301 4.91621 7.05025 6.22896C5.7375 7.54172 5 9.3222 5 11.1787C5 13.5007 6.272 15.5387 7.871 17.1747C8.55862 17.8706 9.30174 18.5094 10.093 19.0847L10.551 19.4107C10.699 19.5137 10.841 19.6097 10.978 19.6987L11.368 19.9487L11.711 20.1577L12 20.3267L12.455 20.0577L12.822 19.8277C13.017 19.7037 13.227 19.5647 13.449 19.4107L13.907 19.0847C14.6983 18.5094 15.4414 17.8706 16.129 17.1747C17.728 15.5397 19 13.5007 19 11.1787C19 9.3222 18.2625 7.54172 16.9497 6.22896C15.637 4.91621 13.8565 4.17871 12 4.17871ZM12 7.17871C13.0609 7.17871 14.0783 7.60014 14.8284 8.35028C15.5786 9.10043 16 10.1178 16 11.1787C16 12.2396 15.5786 13.257 14.8284 14.0071C14.0783 14.7573 13.0609 15.1787 12 15.1787C10.9391 15.1787 9.92172 14.7573 9.17157 14.0071C8.42143 13.257 8 12.2396 8 11.1787C8 10.1178 8.42143 9.10043 9.17157 8.35028C9.92172 7.60014 10.9391 7.17871 12 7.17871ZM12 9.17871C11.4696 9.17871 10.9609 9.38942 10.5858 9.7645C10.2107 10.1396 10 10.6483 10 11.1787C10 11.7091 10.2107 12.2179 10.5858 12.5929C10.9609 12.968 11.4696 13.1787 12 13.1787C12.5304 13.1787 13.0391 12.968 13.4142 12.5929C13.7893 12.2179 14 11.7091 14 11.1787C14 10.6483 13.7893 10.1396 13.4142 9.7645C13.0391 9.38942 12.5304 9.17871 12 9.17871Z" fill="#060024"/>
</g>
<defs>
<clipPath id="clip0_894_5923">
<rect width="24" height="24" fill="white" transform="translate(0 0.178711)"/>
</clipPath>
</defs>
</svg>
}
      nothingFoundMessage="Nothing found..."
    />
    </div>
    <div>
    <Select
      label="Select Doctor/Trainer"
      variant="filled"
      placeholder="Pick value"
      data={['React', 'Angular', 'Vue', 'Svelte']}
    />

   
    </div>
    <div>
    <Select
      label="Select Time"
      variant="filled"
      placeholder="Pick value"
      data={['React', 'Angular', 'Vue', 'Svelte']}
    />
     <p className='sub-text'>Please select a trainer/doctor to choose an appointment time</p>
    </div>

    </div>
  )
}

export default ServiceBookingform
