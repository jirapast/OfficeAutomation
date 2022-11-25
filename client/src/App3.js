import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import FormHelperText from '@mui/material/FormHelperText';
import * as docx from 'docx'
import { ConstructionOutlined } from '@mui/icons-material';
import { Document, Packer, Paragraph, TextRun } from "docx";
import { saveAs } from 'file-saver';
import PizZip from 'pizzip';
import PizZipUtils from 'pizzip/utils/index.js';
import Docxtemplater from 'docxtemplater';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Button from '@mui/material/Button';
import clsx from 'clsx';



function loadFile(url, callback) {
    PizZipUtils.getBinaryContent(url, callback);
  }

export default function FullWidthTextField() {
  // const classes = useStyles();

  const [age, setAge] = React.useState('');
  const [unit, setUnit] = React.useState('');

  const [_tag_report_number, set_tag_report_number] = React.useState('');
  const [_book_number, set_book_number] = React.useState('');
  
  const [_date1, set_date1] = React.useState('');
  const [_date2, set_date2] = React.useState('');

  const change_unit = (event) => {
    console.log(1111, unit, event.target.value)
    event.preventDefault();
    setUnit(event.target.value);
  }

  const handleChange = (event) => {

  }

  const change_tag_report_number = (event) => {
      set_tag_report_number(event.target.value);
      console.log(1111, _tag_report_number)
  }

  const change_book_number = (event) => {
    set_book_number(event.target.value);
    console.log(1111, _tag_report_number)
  }

  const change_date1 = (event) => {
    set_date1(event.target.value);
  }

  const change_date2 = (event) => {
    set_date2(event.target.value);
  }


  

  

  const options = [
      {label: 'สถานีตำรวจ', value: 'สถานีตำรวจ'  },
      {label: 'React',      value: 'กกกกก'   },
{label: 'สถานีตำรวจภธรเสริมงาม', value:1},
{label: 'สถานีตำรวจภูธรเมืองปาน', value:1},
{label: 'สถานีตำรวจภูธรเก้าเลี้ยว', value:1},
{label: 'สถานีตำรวจภูธรเกาะคา', value:1},
{label: 'สถานีตำรวจภูธรเกาะช้าง', value:1},
{label: 'สถานีตำรวจภูธรเขลางค์นคร', value:1},
{label: 'สถานีตำรวจภูธรเขาค้อ', value:1},
{label: 'สถานีตำรวจภูธรเฉลิมพระเกียรติ', value:1},
{label: 'สถานีตำรวจภูธรเชียงแสน', value:1},
{label: 'สถานีตำรวจภูธรเชียงกลาง', value:1},
{label: 'สถานีตำรวจภูธรเชียงของ', value:1},
{label: 'สถานีตำรวจภูธรเชียงคำ', value:1},
{label: 'สถานีตำรวจภูธรเชียงดาว', value:1},
{label: 'สถานีตำรวจภูธรเชียงม่วน', value:1},
{label: 'สถานีตำรวจภูธรเด่นเหล็ก', value:1},
{label: 'สถานีตำรวจภูธรเด่นชัย', value:1},
{label: 'สถานีตำรวจภูธรเถิน', value:1},
{label: 'สถานีตำรวจภูธรเทิง', value:1},
{label: 'สถานีตำรวจภูธรเนินกุ่ม', value:1},
{label: 'สถานีตำรวจภูธรเนินมะปราง', value:1},
{label: 'สถานีตำรวจภูธรเมืองเก่า', value:1},
{label: 'สถานีตำรวจภูธรเมืองเขาบางแกรก', value:1},
{label: 'สถานีตำรวจภูธรเมืองเชียงใหม่', value:1},
{label: 'สถานีตำรวจภูธรเมืองเชียงราย', value:1},
{label: 'สถานีตำรวจภูธรเมืองเพชรบูรณ์', value:1},
{label: 'สถานีตำรวจภูธรเมืองเมืองการุ้ง', value:1},
{label: 'สถานีตำรวจภูธรเมืองเมืองอุทัยธานี', value:1},
{label: 'สถานีตำรวจภูธรเมืองแพร่', value:1},
{label: 'สถานีตำรวจภูธรเมืองแม่ฮ่องสอน', value:1},
{label: 'สถานีตำรวจภูธรเมืองกำแพงเพชร', value:1},
{label: 'สถานีตำรวจภูธรเมืองตลุกดู่', value:1},
{label: 'สถานีตำรวจภูธรเมืองตาก', value:1},
{label: 'สถานีตำรวจภูธรเมืองทัพทัน', value:1},
{label: 'สถานีตำรวจภูธรเมืองนครสวรรค์', value:1},
{label: 'สถานีตำรวจภูธรเมืองน่าน', value:1},
{label: 'สถานีตำรวจภูธรเมืองบางขลัง', value:1},
{label: 'สถานีตำรวจภูธรเมืองบ้านไร่', value:1},
{label: 'สถานีตำรวจภูธรเมืองพะเยา', value:1},
{label: 'สถานีตำรวจภูธรเมืองพิจิตร', value:1},
{label: 'สถานีตำรวจภูธรเมืองพิษณุโลก', value:1},
{label: 'สถานีตำรวจภูธรเมืองยาว', value:1},
{label: 'สถานีตำรวจภูธรเมืองลานสัก', value:1},
{label: 'สถานีตำรวจภูธรเมืองลำปาง', value:1},
{label: 'สถานีตำรวจภูธรเมืองลำพูน', value:1},
{label: 'สถานีตำรวจภูธรเมืองสว่างอารมณ์', value:1},
{label: 'สถานีตำรวจภูธรเมืองสุโขทัย', value:1},
{label: 'สถานีตำรวจภูธรเมืองหนองขาหย่าง', value:1},
{label: 'สถานีตำรวจภูธรเมืองหนองฉาง', value:1},
{label: 'สถานีตำรวจภูธรเมืองห้วยคต', value:1},
{label: 'สถานีตำรวจภูธรเมืองอุตรดิตถ์', value:1},
{label: 'สถานีตำรวจภูธรเรือง', value:1},
{label: 'สถานีตำรวจภูธรเวียงเชียงรุ้ง', value:1},
{label: 'สถานีตำรวจภูธรเวียงแก่น', value:1},
{label: 'สถานีตำรวจภูธรเวียงแหง', value:1},
{label: 'สถานีตำรวจภูธรเวียงชัย', value:1},
{label: 'สถานีตำรวจภูธรเวียงต้า', value:1},
{label: 'สถานีตำรวจภูธรเวียงป่าเป้า', value:1},
{label: 'สถานีตำรวจภูธรเวียงมอก', value:1},
{label: 'สถานีตำรวจภูธรเวียงสา', value:1},
{label: 'สถานีตำรวจภูธรเวียงหนองล่อง', value:1},
{label: 'สถานีตำรวจภูธรเสาหิน', value:1},
{label: 'สถานีตำรวจภูธรเหมืองจี้', value:1},
{label: 'สถานีตำรวจภูธรแก่งโสภา', value:1},
{label: 'สถานีตำรวจภูธรแจ้ซ้อน', value:1},
{label: 'สถานีตำรวจภูธรแจ้ห่ม', value:1},
{label: 'สถานีตำรวจภูธรแม่เจดีย์', value:1},
{label: 'สถานีตำรวจภูธรแม่เปิน', value:1},
{label: 'สถานีตำรวจภูธรแม่เมย', value:1},
{label: 'สถานีตำรวจภูธรแม่เมาะ', value:1},
{label: 'สถานีตำรวจภูธรแม่เล่ย์', value:1},
{label: 'สถานีตำรวจภูธรแม่แจ่ม', value:1},
{label: 'สถานีตำรวจภูธรแม่แตง', value:1},
{label: 'สถานีตำรวจภูธรแม่แฝก', value:1},
{label: 'สถานีตำรวจภูธรแม่ใจ', value:1},
{label: 'สถานีตำรวจภูธรแม่กา', value:1},
{label: 'สถานีตำรวจภูธรแม่จริม', value:1},
{label: 'สถานีตำรวจภูธรแม่จัน', value:1},
{label: 'สถานีตำรวจภูธรแม่ท้อ', value:1},
{label: 'สถานีตำรวจภูธรแม่ทะ', value:1},
{label: 'สถานีตำรวจภูธรแม่ทา', value:1},
{label: 'สถานีตำรวจภูธรแม่ปิง', value:1},
{label: 'สถานีตำรวจภูธรแม่พริก', value:1},
{label: 'สถานีตำรวจภูธรแม่ฟ้าหลวง', value:1},
{label: 'สถานีตำรวจภูธรแม่ยาว', value:1},
{label: 'สถานีตำรวจภูธรแม่ระมาด', value:1},
{label: 'สถานีตำรวจภูธรแม่ริม', value:1},
{label: 'สถานีตำรวจภูธรแม่ลาน้อย', value:1},
{label: 'สถานีตำรวจภูธรแม่ลาว', value:1},
{label: 'สถานีตำรวจภูธรแม่ลาหลวง', value:1},
{label: 'สถานีตำรวจภูธรแม่วงก์', value:1},
{label: 'สถานีตำรวจภูธรแม่วาง', value:1},
{label: 'สถานีตำรวจภูธรแม่สรวย', value:1},
{label: 'สถานีตำรวจภูธรแม่สลิด', value:1},
{label: 'สถานีตำรวจภูธรแม่สอด', value:1},
{label: 'สถานีตำรวจภูธรแม่สะเรียง', value:1},
{label: 'สถานีตำรวจภูธรแม่สาย', value:1},
{label: 'สถานีตำรวจภูธรแม่อ้อ', value:1},
{label: 'สถานีตำรวจภูธรแม่ออน', value:1},
{label: 'สถานีตำรวจภูธรแม่อาย', value:1},
{label: 'สถานีตำรวจภูธรโกรกพระ', value:1},
{label: 'สถานีตำรวจภูธรโกสัมภีนคร', value:1},
{label: 'สถานีตำรวจภูธรโพทะเล', value:1},
{label: 'สถานีตำรวจภูธรโพธิ์ประทับช้าง', value:1},
{label: 'สถานีตำรวจภูธรไชยปราการ', value:1},
{label: 'สถานีตำรวจภูธรไทรงาม', value:1},
{label: 'สถานีตำรวจภูธรไทรย้อย', value:1},
{label: 'สถานีตำรวจภูธรไผ่โทน', value:1},
{label: 'สถานีตำรวจภูธรไพศาลี', value:1},
{label: 'สถานีตำรวจภูธรกงไกรลาศ', value:1},
{label: 'สถานีตำรวจภูธรก้อ', value:1},
{label: 'สถานีตำรวจภูธรกองก๋อย', value:1},
{label: 'สถานีตำรวจภูธรขาณุวรลักษบุรี', value:1},
{label: 'สถานีตำรวจภูธรขุนตาล', value:1},
{label: 'สถานีตำรวจภูธรขุนยวม', value:1},
{label: 'สถานีตำรวจภูธรคลองขลุง', value:1},
{label: 'สถานีตำรวจภูธรคลองพิไกร', value:1},
{label: 'สถานีตำรวจภูธรคลองลาน', value:1},
{label: 'สถานีตำรวจภูธรคีรีมาศ', value:1},
{label: 'สถานีตำรวจภูธรงอบ', value:1},
{label: 'สถานีตำรวจภูธรงาว', value:1},
{label: 'สถานีตำรวจภูธรจอมทอง', value:1},
{label: 'สถานีตำรวจภูธรจันเสน', value:1},
{label: 'สถานีตำรวจภูธรจุน', value:1},
{label: 'สถานีตำรวจภูธรชนแดน', value:1},
{label: 'สถานีตำรวจภูธรช้างเผือก', value:1},
{label: 'สถานีตำรวจภูธรชาติตระการ', value:1},
{label: 'สถานีตำรวจภูธรชุมแสง', value:1},
{label: 'สถานีตำรวจภูธรชุมแสงสงคราม', value:1},
{label: 'สถานีตำรวจภูธรชุมตาบง', value:1},
{label: 'สถานีตำรวจภูธรดงเจริญ', value:1},
{label: 'สถานีตำรวจภูธรดงขุย', value:1},
{label: 'สถานีตำรวจภูธรดงประคำ', value:1},
{label: 'สถานีตำรวจภูธรดงป่าคำ', value:1},
{label: 'สถานีตำรวจภูธรดอกคำใต', value:1},
{label: 'สถานีตำรวจภูธรดอยเต่า', value:1},
{label: 'สถานีตำรวจภูธรดอยสะเก็ด', value:1},
{label: 'สถานีตำรวจภูธรดอยหลวง', value:1},
{label: 'สถานีตำรวจภูธรดอยหล่อ', value:1},
{label: 'สถานีตำรวจภูธรด่านแม่คำมัน', value:1},
{label: 'สถานีตำรวจภูธรตรอน', value:1},
{label: 'สถานีตำรวจภูธรตะคร้อ', value:1},
{label: 'สถานีตำรวจภูธรตะพานหิน', value:1},
{label: 'สถานีตำรวจภูธรตากฟ้า', value:1},
{label: 'สถานีตำรวจภูธรตาคลี', value:1},
{label: 'สถานีตำรวจภูธรตาลชุม', value:1},
{label: 'สถานีตำรวจภูธรทรงธรรม', value:1},
{label: 'สถานีตำรวจภูธรทรายทองวัฒนา', value:1},
{label: 'สถานีตำรวจภูธรทองแสนขัน', value:1},
{label: 'สถานีตำรวจภูธรทับคล้อ', value:1},
{label: 'สถานีตำรวจภูธรทากาศ', value:1},
{label: 'สถานีตำรวจภูธรท่าฉนวน', value:1},
{label: 'สถานีตำรวจภูธรท่าตะโก', value:1},
{label: 'สถานีตำรวจภูธรท่าตาฝั่ง', value:1},
{label: 'สถานีตำรวจภูธรท่าปลา', value:1},
{label: 'สถานีตำรวจภูธรท่าพล', value:1},
{label: 'สถานีตำรวจภูธรท่าวังผา', value:1},
{label: 'สถานีตำรวจภูธรท่าสองยาง', value:1},
{label: 'สถานีตำรวจภูธรทุ่งเสลี่ยม', value:1},
{label: 'สถานีตำรวจภูธรทุ่งช้าง', value:1},
{label: 'สถานีตำรวจภูธรทุ่งฝาย', value:1},
{label: 'สถานีตำรวจภูธรทุ่งหัวช้าง', value:1},
{label: 'สถานีตำรวจภูธรนครไทย', value:1},
{label: 'สถานีตำรวจภูธรนครชุม', value:1},
{label: 'สถานีตำรวจภูธรนาเฉลียง', value:1},
{label: 'สถานีตำรวจภูธรนาน้อย', value:1},
{label: 'สถานีตำรวจภูธรนาพูน', value:1},
{label: 'สถานีตำรวจภูธรนาหมื่น', value:1},
{label: 'สถานีตำรวจภูธรนาหวาย', value:1},
{label: 'สถานีตำรวจภูธรนาอิน', value:1},
{label: 'สถานีตำรวจภูธรน้ำเพียงดิน', value:1},
{label: 'สถานีตำรวจภูธรน้ำปาด', value:1},
{label: 'สถานีตำรวจภูธรน้ำมวบ', value:1},
{label: 'สถานีตำรวจภูธรน้ำหนาว', value:1},
{label: 'สถานีตำรวจภูธรน้ำหมัน', value:1},
{label: 'สถานีตำรวจภูธรนิคมเขาบ่อแก้ว', value:1},
{label: 'สถานีตำรวจภูธรนิคมสร้างตนเอง', value:1},
{label: 'สถานีตำรวจภูธรนิคมอุตสาหกรรมลำพูน', value:1},
{label: 'สถานีตำรวจภูธรบรรพตพิสัย', value:1},
{label: 'สถานีตำรวจภูธรบ่อเกลือ', value:1},
{label: 'สถานีตำรวจภูธรบ่อหลวง', value:1},
{label: 'สถานีตำรวจภูธรบางกระทุ่ม', value:1},
{label: 'สถานีตำรวจภูธรบางประมุง', value:1},
{label: 'สถานีตำรวจภูธรบางม่วง', value:1},
{label: 'สถานีตำรวจภูธรบางมูลนาก', value:1},
{label: 'สถานีตำรวจภูธรบางระกำ', value:1},
{label: 'สถานีตำรวจภูธรบางลาย', value:1},
{label: 'สถานีตำรวจภูธรบ้านเสด็จ', value:1},
{label: 'สถานีตำรวจภูธรบ้านเอื้อม', value:1},
{label: 'สถานีตำรวจภูธรบ้านแก่ง', value:1},
{label: 'สถานีตำรวจภูธรบ้านแซว', value:1},
{label: 'สถานีตำรวจภูธรบ้านแยง', value:1},
{label: 'สถานีตำรวจภูธรบ้านโคก', value:1},
{label: 'สถานีตำรวจภูธรบ้านโคก', value:1},
{label: 'สถานีตำรวจภูธรบ้านโฮ่ง', value:1},
{label: 'สถานีตำรวจภูธรบ้านไร่', value:1},
{label: 'สถานีตำรวจภูธรบ้านกลาง', value:1},
{label: 'สถานีตำรวจภูธรบ้านกวาง', value:1},
{label: 'สถานีตำรวจภูธรบ้านด่านลานหอย', value:1},
{label: 'สถานีตำรวจภูธรบ้านตาก', value:1},
{label: 'สถานีตำรวจภูธรบ้านติ้ว', value:1},
{label: 'สถานีตำรวจภูธรบ้านธิ', value:1},
{label: 'สถานีตำรวจภูธรบ้านสวน', value:1},
{label: 'สถานีตำรวจภูธรบ้านหลวง', value:1},
{label: 'สถานีตำรวจภูธรบึงนาราง', value:1},
{label: 'สถานีตำรวจภูธรบึงสามพัน', value:1},
{label: 'สถานีตำรวจภูธรบึงสามัคคี', value:1},
{label: 'สถานีตำรวจภูธรบุญเรือง', value:1},
{label: 'สถานีตำรวจภูธรปง', value:1},
{label: 'สถานีตำรวจภูธรประตูเมือง', value:1},
{label: 'สถานีตำรวจภูธรปัว', value:1},
{label: 'สถานีตำรวจภูธรป่าแดด', value:1},
{label: 'สถานีตำรวจภูธรปางมะค่า', value:1},
{label: 'สถานีตำรวจภูธรปางมะผ้า', value:1},
{label: 'สถานีตำรวจภูธรปางศิลาทอง', value:1},
{label: 'สถานีตำรวจภูธรป่าซาง', value:1},
{label: 'สถานีตำรวจภูธรปาย', value:1},
{label: 'สถานีตำรวจภูธรฝาง', value:1},
{label: 'สถานีตำรวจภูธรพญาเม็งราย', value:1},
{label: 'สถานีตำรวจภูธรพญาแมน', value:1},
{label: 'สถานีตำรวจภูธรพบพระ', value:1},
{label: 'สถานีตำรวจภูธรพยุหะคีรี', value:1},
{label: 'สถานีตำรวจภูธรพรหมพิราม', value:1},
{label: 'สถานีตำรวจภูธรพระธาตุช่อแฮ', value:1},
{label: 'สถานีตำรวจภูธรพรานกระต่าย', value:1},
{label: 'สถานีตำรวจภูธรพร้าว', value:1},
{label: 'สถานีตำรวจภูธรพะวอ', value:1},
{label: 'สถานีตำรวจภูธรพาน', value:1},
{label: 'สถานีตำรวจภูธรพิชัย', value:1},
{label: 'สถานีตำรวจภูธรพุเตย', value:1},
{label: 'สถานีตำรวจภูธรฟากท่า', value:1},
{label: 'สถานีตำรวจภูธรภูเพียง', value:1},
{label: 'สถานีตำรวจภูธรภูกามยาว', value:1},
{label: 'สถานีตำรวจภูธรภูซาง', value:1},
{label: 'สถานีตำรวจภูธรภูพิงคราชนิเวศน์', value:1},
{label: 'สถานีตำรวจภูธรยกกระบัตร', value:1},
{label: 'สถานีตำรวจภูธรย่านยาว', value:1},
{label: 'สถานีตำรวจภูธรร่องเคาะ', value:1},
{label: 'สถานีตำรวจภูธรร้องกวาง', value:1},
{label: 'สถานีตำรวจภูธรลอง', value:1},
{label: 'สถานีตำรวจภูธรลับแล', value:1},
{label: 'สถานีตำรวจภูธรลาดยาว', value:1},
{label: 'สถานีตำรวจภูธรลานกระบือ', value:1},
{label: 'สถานีตำรวจภูธรลี้', value:1},
{label: 'สถานีตำรวจภูธรวชิรบารมี', value:1},
{label: 'สถานีตำรวจภูธรวังเจ้า', value:1},
{label: 'สถานีตำรวจภูธรวังเหนือ', value:1},
{label: 'สถานีตำรวจภูธรวังโป่ง', value:1},
{label: 'สถานีตำรวจภูธรวังกะพี้', value:1},
{label: 'สถานีตำรวจภูธรวังชิ้น', value:1},
{label: 'สถานีตำรวจภูธรวังทรายพูน', value:1},
{label: 'สถานีตำรวจภูธรวังทอง', value:1},
{label: 'สถานีตำรวจภูธรวังน้ำคู้', value:1},
{label: 'สถานีตำรวจภูธรวังประจบ', value:1},
{label: 'สถานีตำรวจภูธรวังหงส์', value:1},
{label: 'สถานีตำรวจภูธรวังหว้า', value:1},
{label: 'สถานีตำรวจภูธรวัดโบสถ์', value:1},
{label: 'สถานีตำรวจภูธรวิเชียรบุรี', value:1},
{label: 'สถานีตำรวจภูธรศรีเทพ', value:1},
{label: 'สถานีตำรวจภูธรศรีนคร', value:1},
{label: 'สถานีตำรวจภูธรศรีสัชนาลัย', value:1},
{label: 'สถานีตำรวจภูธรศรีสำโรง', value:1},
{label: 'สถานีตำรวจภูธรสบเมย', value:1},
{label: 'สถานีตำรวจภูธรสบปราบ', value:1},
{label: 'สถานีตำรวจภูธรสรอย', value:1},
{label: 'สถานีตำรวจภูธรสวรรคโลก', value:1},
{label: 'สถานีตำรวจภูธรสอง', value:1},
{label: 'สถานีตำรวจภูธรสองแคว', value:1},
{label: 'สถานีตำรวจภูธรสะเมิง', value:1},
{label: 'สถานีตำรวจภูธรสะเอียบ', value:1},
{label: 'สถานีตำรวจภูธรสันกำแพง', value:1},
{label: 'สถานีตำรวจภูธรสันติสุข', value:1},
{label: 'สถานีตำรวจภูธรสันทราย', value:1},
{label: 'สถานีตำรวจภูธรสันป่าตอง', value:1},
{label: 'สถานีตำรวจภูธรสากเหล็ก', value:1},
{label: 'สถานีตำรวจภูธรสามเงา', value:1},
{label: 'สถานีตำรวจภูธรสามง่าม', value:1},
{label: 'สถานีตำรวจภูธรสารภี', value:1},
{label: 'สถานีตำรวจภูธรสูงเม่น', value:1},
{label: 'สถานีตำรวจภูธรหนองโสน', value:1},
{label: 'สถานีตำรวจภูธรหนองไผ่', value:1},
{label: 'สถานีตำรวจภูธรหนองกรด', value:1},
{label: 'สถานีตำรวจภูธรหนองตอง', value:1},
{label: 'สถานีตำรวจภูธรหนองบัว', value:1},
{label: 'สถานีตำรวจภูธรหนองบัวเหนือ', value:1},
{label: 'สถานีตำรวจภูธรหนองปลิง', value:1},
{label: 'สถานีตำรวจภูธรหนองม่วงไข่', value:1},
{label: 'สถานีตำรวจภูธรหมอกจำแป่', value:1},
{label: 'สถานีตำรวจภูธรหล่มเก่า', value:1},
{label: 'สถานีตำรวจภูธรหล่มสัก', value:1},
{label: 'สถานีตำรวจภูธรห้วยโป่ง', value:1},
{label: 'สถานีตำรวจภูธรห้วยไร่', value:1},
{label: 'สถานีตำรวจภูธรห้วยม้า', value:1},
{label: 'สถานีตำรวจภูธรห้างฉัตร', value:1},
{label: 'สถานีตำรวจภูธรหางดง', value:1},
{label: 'สถานีตำรวจภูธรอมก๋อย', value:1},
{label: 'สถานีตำรวจภูธรอวน', value:1},
{label: 'สถานีตำรวจภูธรอุ้มผาง', value:1},
{label: 'สถานีตำรวจภูธรฮอด', value:1},
{label: 'สถานีตำรวจรถไฟนครสวรรค์', value:1},
{label: 'สถานีตำรวจรถไฟศิลาอาสน์', value:1}

  ]



  const submit_search_B = () => {
    console.log(31231231231231231, _tag_report_number)
    generateDocument()
  }

  const generateDocument = () => {
    console.log(666666, unit)
    loadFile(
      "http://localhost:4000/download",
      function (error, content) {
          if (error) {
              throw error;
          }
          console.log(999, content, "http://localhost:4000/download")
          var zip = new PizZip(content);
          console.log(999, zip)

          var doc = new Docxtemplater(zip, {
            paragraphLoop: true,
            linebreaks: true,
          });

          console.log(999555)
          // Render the document (Replace {first_name} by John, {last_name} by Doe, ...)
          doc.render({
            tag_report_number: _tag_report_number,
            unit: unit
          });
          console.log(999555888)
          var blob = doc.getZip().generate({
              type: "blob",
              mimeType:
                  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
              // compression: DEFLATE adds a compression step.
              // For a 50MB output document, expect 500ms additional CPU time
              compression: "DEFLATE",
          });
          console.log(99955588888887767676, blob)
          // Output the document using Data-URI
          saveAs(blob, "output.docx");
      }
  );
    
  };

  return (
    <Box sx={{maxWidth: '100%',}}>
    
    <Box sx={{maxWidth: '100%',}}>
      เลขรายงาน
      <TextField sx={{ m: 1, minWidth: 200 }} id="outlined-name" label="" onChange={change_tag_report_number} />      
    </Box>

    <Box sx={{maxWidth: '100%',}}>
      <FormControl sx={{ m: 1, minWidth: 200 }}>
        <InputLabel id="demo-simple-select-label">หน่วยที่ส่งตรวจ</InputLabel>
        <Select value={age} onChange={change_unit} displayEmpty inputProps={{ 'aria-label': 'Without label' }} >
          <MenuItem value=""><em>None</em></MenuItem>
          {options?.map(option => {
            return (
              <MenuItem key={option.label} value={option.value}>
                {option.label ?? option.value}
                {/* {option.label} */}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </Box>


    <Box sx={{maxWidth: '100%',}}>
      <TextField sx={{ m: 1, minWidth: 200 }} id="standard-basic" variant="standard" label="เลข บก. ที่" onChange={change_date1} />
      {/* ลงรับ บก. วันที่ */}
      <TextField id="date" label="" type="date" defaultValue="" sx={{ width: 220 }} InputLabelProps={{ shrink: true, }} />
    </Box>

    <Box sx={{maxWidth: '100%',}}>
      <TextField sx={{ m: 1, minWidth: 200 }} id="standard-basic" variant="standard" label="เลข บก. ที่" onChange={change_date2} />
      {/* ลงรับ บก. วันที่ */}
      <TextField id="date" label="" type="date" defaultValue="" sx={{ width: 220 }} InputLabelProps={{ shrink: true, }} />
    </Box>

    <Box sx={{maxWidth: '100%',}}>
      <TextField sx={{ m: 1, minWidth: 200 }} id="standard-basic" variant="standard" label="เลข บก. ที่" /*value={name} onChange={handleChange}*/ />
      ลงรับ บก. วันที่
      <TextField id="date" label="" type="date" defaultValue="" sx={{ width: 220 }} InputLabelProps={{ shrink: true, }} />
    </Box>






    <Button type="submit" variant="contained" sx={{ ml: 2, mr: 1 }} onClick={submit_search_B}>Search_B</Button>
    
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
      <TextField id="date" label="" type="date" defaultValue="" sx={{ width: 220 }} InputLabelProps={{ shrink: true, }} />
    </Box>

    <Box sx={{maxWidth: '100%',}}>
      <TextField sx={{ m: 1, minWidth: 200 }} id="standard-basic" variant="standard" label="เลข กก. ที่" /*value={name} onChange={handleChange}*/ />
      ลงรับ กก. วันที่
      <TextField id="date" label="" type="date" defaultValue="" sx={{ width: 220 }} InputLabelProps={{ shrink: true, }} />
    </Box>

    <Box sx={{maxWidth: '100%',}}>
      <TextField sx={{ m: 1, minWidth: 200 }} id="standard-basic" variant="standard" label="เลข กก. ที่" /*value={name} onChange={handleChange}*/ />
      ลงรับ กก. วันที่
      <TextField id="date" label="" type="date" defaultValue="" sx={{ width: 220 }} InputLabelProps={{ shrink: true, }} />
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
      <TextField sx={{ m: 1, minWidth: 200 }} id="outlined-name" label="เลขคดี" /*value={name} onChange={handleChange}*/ />
      <TextField sx={{ m: 1, minWidth: 200 }} id="outlined-name" label="เลขประจำวัน" /*value={name} onChange={handleChange}*/ />
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
{/* <div>
  
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

</div> */}

  {/* <div><Button variant="contained" disableElevation>Disable elevation</Button></div> */}
    </Box>

  <div>
    <TextField sx={{ m: 1, minWidth: 500 }} id="outlined-multiline-static" label="" multiline rows={5} defaultValue="" />
  </div>


    ประเภทงานตรวจ
    <FormControl variant="standard" sx={{ m: 1, minWidth: 200 }}>
        <Select labelId="demo-simple-select-standard-label" id="demo-simple-select-standard" value={age} onChange={handleChange} label="Age">
          <MenuItem value=""><em></em></MenuItem>
          <MenuItem value={10}>ตรวจเปรียบเทียบ</MenuItem>
          <MenuItem value={20}>ตรวจทางเคมี-ฟิสิกส์</MenuItem>
          <MenuItem value={30}>ตรวจเปรียบเทียบ และทางเคมีฟิสิกส์</MenuItem>
        </Select>
      </FormControl>

  <div>
    ชื่อผู้ส่ง/โทร
      <FormControl variant="standard" sx={{ m: 1, minWidth: 100 }}>
        <Select labelId="demo-simple-select-standard-label" id="demo-simple-select-standard" value={age} onChange={handleChange} label="Age">
          <MenuItem value=""><em></em></MenuItem>
          <MenuItem value={10}>นาง</MenuItem>
          <MenuItem value={10}>นาย</MenuItem>
          <MenuItem value={10}>นางสาว</MenuItem>
          <MenuItem value={10}>คุณ</MenuItem>
          <MenuItem value={10}>ร.ต.ต.</MenuItem>
          <MenuItem value={10}>ร.ต.ท.</MenuItem>
          <MenuItem value={10}>ร.ต.อ.</MenuItem>
          <MenuItem value={10}>พ.ต.ต.</MenuItem>
          <MenuItem value={10}>พ.ต.ท.</MenuItem>
          <MenuItem value={10}>พ.ต.อ.</MenuItem>
        </Select>
      </FormControl>
      <FormControl variant="standard" sx={{ m: 1, minWidth: 200 }}>
        <Select labelId="demo-simple-select-standard-label" id="demo-simple-select-standard" value={age} onChange={handleChange} label="Age">
          <MenuItem value=""><em></em></MenuItem>
          <MenuItem value={10}>ร.ต.อ.วิศิษฏ์ พรมรัตน์</MenuItem>
          <MenuItem value={20}>ร.ต.อ.หญิง สุภาวดี ยะถาป่าน</MenuItem>
        </Select>
      </FormControl>
      <TextField sx={{ m: 1, minWidth: 200 }} id="standard-basic" variant="standard" label="" /*value={name} onChange={handleChange}*/ />
  </div>

  <div>
    ผู้ตรวจพิสูจน์
      <FormControl variant="standard" sx={{ m: 1, minWidth: 100 }}>
        <Select labelId="demo-simple-select-standard-label" id="demo-simple-select-standard" value={age} onChange={handleChange} label="Age">
          <MenuItem value=""><em></em></MenuItem>
          <MenuItem value={10}>ร.ต.ต.</MenuItem>
          <MenuItem value={10}>ร.ต.ท.</MenuItem>
          <MenuItem value={10}>ร.ต.อ.</MenuItem>
          <MenuItem value={10}>พ.ต.ต.</MenuItem>
          <MenuItem value={10}>พ.ต.ท.</MenuItem>
          <MenuItem value={10}>พ.ต.อ.</MenuItem>
        </Select>
      </FormControl>
      <FormControl variant="standard" sx={{ m: 1, minWidth: 200 }}>
        <Select labelId="demo-simple-select-standard-label" id="demo-simple-select-standard" value={age} onChange={handleChange} label="Age">
          <MenuItem value=""><em></em></MenuItem>
          <MenuItem value={10}>ร.ต.อ.วิศิษฏ์ พรมรัตน์</MenuItem>
          <MenuItem value={20}>ร.ต.อ.หญิง สุภาวดี ยะถาป่าน</MenuItem>
        </Select>
      </FormControl>
      ตำแหน่ง
      <FormControl variant="standard" sx={{ m: 1, minWidth: 200 }}>
        <Select labelId="demo-simple-select-standard-label" id="demo-simple-select-standard" value={age} onChange={handleChange} label="Age">
          <MenuItem value=""><em></em></MenuItem>
          <MenuItem value={10}>นักวิทยาศาสตร์ (สบ ๑) กลุ่มงานตวรจเอกสาร ศูนย์พิสูจน์หลักฐาน ๖</MenuItem>
        </Select>
      </FormControl>
  </div>

  <div>
    ผู้ช่วยตรวจพิสูจน์
      <FormControl variant="standard" sx={{ m: 1, minWidth: 100 }}>
        <Select labelId="demo-simple-select-standard-label" id="demo-simple-select-standard" value={age} onChange={handleChange} label="Age">
          <MenuItem value=""><em></em></MenuItem>
          <MenuItem value={10}>ร.ต.ต.</MenuItem>
          <MenuItem value={10}>ร.ต.ท.</MenuItem>
          <MenuItem value={10}>ร.ต.อ.</MenuItem>
          <MenuItem value={10}>พ.ต.ต.</MenuItem>
          <MenuItem value={10}>พ.ต.ท.</MenuItem>
          <MenuItem value={10}>พ.ต.อ.</MenuItem>
        </Select>
      </FormControl>
      <FormControl variant="standard" sx={{ m: 1, minWidth: 200 }}>
        <Select labelId="demo-simple-select-standard-label" id="demo-simple-select-standard" value={age} onChange={handleChange} label="Age">
          <MenuItem value=""><em></em></MenuItem>
          <MenuItem value={10}>นักวิทยาศาสตร์ (สบ ๑) กลุ่มงานตวรจเอกสาร ศูนย์พิสูจน์หลักฐาน ๖</MenuItem>
        </Select>
      </FormControl>
      ตำแหน่ง
      <FormControl variant="standard" sx={{ m: 1, minWidth: 200 }}>
        <Select labelId="demo-simple-select-standard-label" id="demo-simple-select-standard" value={age} onChange={handleChange} label="Age">
          <MenuItem value=""><em></em></MenuItem>
          <MenuItem value={10}>งานใหม่</MenuItem>
          <MenuItem value={20}>งานเชื่อมโยง</MenuItem>
          <MenuItem value={30}>งาน ผู้ตรวจ ขอเพิ่มเติม</MenuItem>
          <MenuItem value={30}>งาน พงส. ส่งเพิ่มเติมเอง</MenuItem>
        </Select>
      </FormControl>
  </div>

  <div>
    คณะกรรมการ 1
      <FormControl variant="standard" sx={{ m: 1, minWidth: 100 }}>
        <Select labelId="demo-simple-select-standard-label" id="demo-simple-select-standard" value={age} onChange={handleChange} label="Age">
          <MenuItem value=""><em></em></MenuItem>
          <MenuItem value={10}>ร.ต.ต.</MenuItem>
          <MenuItem value={10}>ร.ต.ท.</MenuItem>
          <MenuItem value={10}>ร.ต.อ.</MenuItem>
          <MenuItem value={10}>พ.ต.ต.</MenuItem>
          <MenuItem value={10}>พ.ต.ท.</MenuItem>
          <MenuItem value={10}>พ.ต.อ.</MenuItem>
        </Select>
      </FormControl>
      <FormControl variant="standard" sx={{ m: 1, minWidth: 200 }}>
        <Select labelId="demo-simple-select-standard-label" id="demo-simple-select-standard" value={age} onChange={handleChange} label="Age">
          <MenuItem value=""><em></em></MenuItem>
          <MenuItem value={10}>ร.ต.อ.วิศิษฏ์ พรมรัตน์</MenuItem>
          <MenuItem value={20}>ร.ต.อ.หญิง สุภาวดี ยะถาป่าน</MenuItem>
        </Select>
      </FormControl>
  </div>

  <div>
  คณะกรรมการ 2
      <FormControl variant="standard" sx={{ m: 1, minWidth: 100 }}>
        <Select labelId="demo-simple-select-standard-label" id="demo-simple-select-standard" value={age} onChange={handleChange} label="Age">
          <MenuItem value=""><em></em></MenuItem>
          <MenuItem value={10}>ร.ต.ต.</MenuItem>
          <MenuItem value={10}>ร.ต.ท.</MenuItem>
          <MenuItem value={10}>ร.ต.อ.</MenuItem>
          <MenuItem value={10}>พ.ต.ต.</MenuItem>
          <MenuItem value={10}>พ.ต.ท.</MenuItem>
          <MenuItem value={10}>พ.ต.อ.</MenuItem>
        </Select>
      </FormControl>
      <FormControl variant="standard" sx={{ m: 1, minWidth: 200 }}>
        <Select labelId="demo-simple-select-standard-label" id="demo-simple-select-standard" value={age} onChange={handleChange} label="Age">
          <MenuItem value=""><em></em></MenuItem>
        </Select>
      </FormControl>
  </div>
  <div><Button variant="contained" disableElevation>แก้ไข/บันทึก</Button></div>

  <div>------------- บันทึกการตรวจ -------------</div>

  <div>

  <Box sx={{maxWidth: '100%',}}>
      <FormControl sx={{ m: 1, minWidth: 200 }}>
        <InputLabel id="demo-simple-select-label">หัวข้อที่ตรวจ</InputLabel>
        <Select labelId="demo-simple-select-label" id="demo-simple-select" value={age} label="Age" onChange={handleChange}>
          <MenuItem value={10}>ตรวจเปรียบเทียบลายมือชื่อ ลายมือเขียนข้อความ</MenuItem>
          <MenuItem value={20}>ตรวจเปรียบเทียบรอยตราประทับ</MenuItem>
          <MenuItem value={20}>ตราจเปรียบเทียบตัวพิมพ์ ตัวอัการพิมพ์ดีด</MenuItem>
          <MenuItem value={20}>ระบบการพิมพ์และการป้องกนการปลอมแปลง</MenuItem>
          <MenuItem value={20}>ชนิดหมึก-ชนิดกระดาษ</MenuItem>
          <MenuItem value={20}>สำเนาคู่ฉบับ</MenuItem>
          <MenuItem value={20}>แก้ไข</MenuItem>
          <MenuItem value={20}>รอยกด</MenuItem>
          <MenuItem value={20}>เอกสารเปียก-ไหม้ไฟ</MenuItem>
          <MenuItem value={20}>รอยตัด รอยฉีก รอยปรุ</MenuItem>
        </Select>
      </FormControl>
      <TextField sx={{ m: 1, minWidth: 200 }} id="outlined-name" label="จำนวน (ครั้ง)" /*value={name} onChange={handleChange}*/ />
    </Box>  
  </div>
  
  

  </Box>
  )
}
