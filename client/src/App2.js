import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Button from '@mui/material/Button';


export default function FullWidthTextField() {

  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
    console.log(1111, age)
  }

  return (
    // <Box sx={{width: 500, maxWidth: '100%',}}>
    <Box sx={{maxWidth: '100%',}}>
    
    
    <Box sx={{maxWidth: '100%',}}>
      เชื่อมโยงกับงาน กก ที่ 
      <TextField sx={{ m: 1, minWidth: 200 }} id="outlined-name" label="" /*value={name} onChange={handleChange}*/ />
    </Box>


    <Box sx={{maxWidth: '100%',}}> บันทึกข้อมูลนำส่ง </Box>
      
      
    <Box sx={{maxWidth: '100%',}}>
      <FormControl sx={{ m: 1, minWidth: 200 }}>
        <InputLabel id="demo-simple-select-label">สถานะงานเข้า</InputLabel>
        <Select labelId="demo-simple-select-label" id="demo-simple-select" value={age} label="Age" onChange={handleChange}>
          <MenuItem value={10}>งานใหม่</MenuItem>
          <MenuItem value={20}>งานเชื่อมโยง</MenuItem>
          <MenuItem value={30}>งาน ผู้ตรวจ ขอเพิ่มเติม</MenuItem>
          <MenuItem value={30}>งาน พงส. ส่งเพิ่มเติมเอง</MenuItem>
        </Select>
      </FormControl>
      <TextField sx={{ m: 1, minWidth: 200 }} id="outlined-name" label="เพิ่มเติม กก ที่" /*value={name} onChange={handleChange}*/ />
      <TextField sx={{ m: 1, minWidth: 200 }} id="outlined-name" label="เชื่อมโยง กก ที่" /*value={name} onChange={handleChange}*/ />
    </Box>

    <Box sx={{maxWidth: '100%',}}>
      <FormControl sx={{ m: 1, minWidth: 200 }}>
        <InputLabel id="demo-simple-select-label">ประเภทคดี</InputLabel>
        <Select labelId="demo-simple-select-label" id="demo-simple-select" value={age} label="Age" onChange={handleChange}>
          <MenuItem value={10}>อาญา</MenuItem>
          <MenuItem value={20}>แพ่ง</MenuItem>
        </Select>
      </FormControl>
      <FormControl sx={{ m: 1, minWidth: 200 }}>
        <InputLabel id="demo-simple-select-label">ประเภทหน่วยงาน</InputLabel>
        <Select labelId="demo-simple-select-label" id="demo-simple-select" value={age} label="Age" onChange={handleChange}>
          <MenuItem value={10}>ในหน่วยงาน ตร.</MenuItem>
          <MenuItem value={20}>นอกหน่วยงาน ตร.</MenuItem>
        </Select>
      </FormControl>
    </Box>

    <Box sx={{maxWidth: '100%',}}>
      <TextField sx={{ m: 1, minWidth: 200 }} id="standard-basic" variant="standard" label="เลข บก. ที่" /*value={name} onChange={handleChange}*/ />
      ลงรับ บก. วันที่
      <TextField id="date" label="ลงรับ บก. วันที่" type="date" defaultValue="" sx={{ width: 220 }} InputLabelProps={{ shrink: true, }} />
    </Box>

    <Box sx={{maxWidth: '100%',}}>
      <TextField sx={{ m: 1, minWidth: 200 }} id="standard-basic" variant="standard" label="เลข กก. ที่" /*value={name} onChange={handleChange}*/ />
      ลงรับ กก. วันที่
      <TextField id="date" label="ลงรับ กก. วันที่" type="date" defaultValue="" sx={{ width: 220 }} InputLabelProps={{ shrink: true, }} />
    </Box>

    <Box sx={{maxWidth: '100%',}}>
      <TextField sx={{ m: 1, minWidth: 200 }} id="standard-basic" variant="standard" label="เลข กก. ที่" /*value={name} onChange={handleChange}*/ />
      ลงรับ กก. วันที่
      <TextField id="date" label="ลงรับ เลขงาน วันที่" type="date" defaultValue="" sx={{ width: 220 }} InputLabelProps={{ shrink: true, }} />
    </Box>
       
    <Box sx={{maxWidth: '100%',}}>
      <FormControl variant="standard" sx={{ m: 1, minWidth: 500 }}>
        <InputLabel id="demo-simple-select-standard-label">ตามหนังสือของ</InputLabel>
        <Select labelId="demo-simple-select-standard-label" id="demo-simple-select-standard" value={age} onChange={handleChange} label="Age">
          <MenuItem value=""><em>None</em></MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    </Box>

    <Box sx={{maxWidth: '100%',}}>
      <FormControl sx={{ m: 1, minWidth: 200 }}>
        <InputLabel id="demo-simple-select-label">เลขหนังสือ</InputLabel>
        <Select labelId="demo-simple-select-label" id="demo-simple-select" value={age} label="Age" onChange={handleChange}>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
      <TextField sx={{ m: 1, minWidth: 200 }} id="standard-basic" variant="standard" label="งานพื้นที่" /*value={name} onChange={handleChange}*/ />
    </Box>
    
    <Box sx={{maxWidth: '100%',}}>
      ลงวันที่
      <TextField id="date" label="" type="date" defaultValue="" sx={{ width: 220 }} InputLabelProps={{ shrink: true, }} />
    </Box>
      
    <Box sx={{maxWidth: '100%',}}>
      เลขคดี
      <TextField sx={{ m: 1, minWidth: 200 }} id="standard-basic" variant="standard" label="" /*value={name} onChange={handleChange}*/ />
      เลขประจำวัน
      <TextField sx={{ m: 1, minWidth: 200 }} id="standard-basic" variant="standard" label="" /*value={name} onChange={handleChange}*/ />
    </Box>

    <Box sx={{maxWidth: '100%',}}>
      <FormControl variant="standard" sx={{ m: 1, minWidth: 200 }}>
        <InputLabel id="demo-simple-select-standard-label">ผู้เกี่ยวข้องในคดี</InputLabel>
        <Select labelId="demo-simple-select-standard-label" id="demo-simple-select-standard" value={age} onChange={handleChange} label="Age">
          <MenuItem value=""><em></em></MenuItem>
          <MenuItem value={10}>ผู้เสียหาย</MenuItem>
          <MenuItem value={20}>ผู้กล่าวหา</MenuItem>
          <MenuItem value={30}>ผู้ถูกล่าวหา</MenuItem>
          <MenuItem value={30}>ผู้ต้องหา</MenuItem>
          <MenuItem value={30}>ผู้ตาย</MenuItem>
          <MenuItem value={30}>ผู้แจ้ง</MenuItem>
          <MenuItem value={30}>ผู้ร้องทุกข์</MenuItem>
        </Select>
      </FormControl>

      ชื่อ
      <FormControl variant="standard" sx={{ m: 1, minWidth: 100 }}>
        {/* <InputLabel id="demo-simple-select-standard-label">ผู้เกี่ยวข้องในคดี</InputLabel> */}
        <Select labelId="demo-simple-select-standard-label" id="demo-simple-select-standard" value={age} onChange={handleChange} label="Age">
          <MenuItem value=""><em></em></MenuItem>
          <MenuItem value={10}>นาง</MenuItem>
          <MenuItem value={20}>นาย</MenuItem>
          <MenuItem value={30}>ร.ต.ต.</MenuItem>
          <MenuItem value={30}>ร.ต.ท.</MenuItem>
          <MenuItem value={30}>ร.ต.อ.</MenuItem>
          <MenuItem value={30}>พ.ต.ต.</MenuItem>
          <MenuItem value={30}>พ.ต.ท.</MenuItem>
          <MenuItem value={30}>พ.ต.อ.</MenuItem>
        </Select>
      </FormControl>
      <TextField sx={{ m: 1, minWidth: 200 }} id="outlined-name" label="" /*value={name} onChange={handleChange}*/ />
      <Button variant="contained" disableElevation>เพิ่ม</Button>
    </Box>
      
    <Box sx={{maxWidth: '100%',}}>
<div>
  
    <FormControl variant="standard" sx={{ m: 1, minWidth: 200 }}>
        <InputLabel id="demo-simple-select-standard-label">ประเภทงานตรวจ</InputLabel>
        <Select labelId="demo-simple-select-standard-label" id="demo-simple-select-standard" value={age} onChange={handleChange} label="Age">
          <MenuItem value=""><em>None</em></MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
</div>
<div>
      <FormControl variant="standard" sx={{ m: 1, minWidth: 200 }}>
        <InputLabel id="demo-simple-select-standard-label">ผู้ช่วยผู้ตรวจพิสูจน์</InputLabel>
        <Select labelId="demo-simple-select-standard-label" id="demo-simple-select-standard" value={age} onChange={handleChange} label="Age">
          <MenuItem value=""><em>None</em></MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
      </div>
      <div>

      <FormControl variant="standard" sx={{ m: 1, minWidth: 200 }}>
        <InputLabel id="demo-simple-select-standard-label">คณะกรรมการ 1</InputLabel>
        <Select labelId="demo-simple-select-standard-label" id="demo-simple-select-standard" value={age} onChange={handleChange} label="Age">
          <MenuItem value=""><em>None</em></MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
      </div>
<div>
      <FormControl variant="standard" sx={{ m: 1, minWidth: 200 }}>
        <InputLabel id="demo-simple-select-standard-label">คณะกรรมการ 2</InputLabel>
        <Select labelId="demo-simple-select-standard-label" id="demo-simple-select-standard" value={age} onChange={handleChange} label="Age">
          <MenuItem value=""><em>None</em></MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>

</div>
  <div>
      <Button variant="contained" disableElevation>Disable elevation</Button>
</div>
    </Box>

        



    
  </Box>
  )
}
