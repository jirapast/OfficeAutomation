import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import * as docx from 'docx'
import { ConstructionOutlined } from '@mui/icons-material';

import { Document, Packer, Paragraph, TextRun } from "docx";
// import * as fs from "fs";
import { saveAs } from 'file-saver';






// Done! A file called 'My Document.docx' will be in your file system.


export default function SelectLabels() {
 

  const [age, setAge] = React.useState('');

  // const handleChange = (event: SelectChangeEvent) => {
    // setAge(event.target.value);
  // };

  const handleChange = (event) => {
    setAge(event.target.value);
    console.log(1111, event.target.value)
  };

  const options = [
    {label: 'React',      value: 'กกกกก'   },
    {label: 'JavaScript', value: 'JavaScript'  },
    {label: 'TypeScript', value: 'TypeScript'   }
  ];

  const generate = (event) => {
    // console.log(1111, event.target.value)
     
    var x = '--->>> '
    x = x.concat(age)

    var doc1 = new Document({
      sections: [
          {
              children: [
                  new Paragraph(
                      "1111Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vehicula nec nulla vitae efficitur. Ut interdum mauris eu ipsum rhoncus, nec pharetra velit placerat. Sed vehicula libero ac urna molestie, id pharetra est pellentesque. Praesent iaculis vehicula fringilla. Duis pretium gravida orci eu vestibulum. Mauris tincidunt ipsum dolor, ut ornare dolor pellentesque id. Integer in nulla gravida, lacinia ante non, commodo ex. Vivamus vulputate nisl id lectus finibus vulputate. Ut et nisl mi. Cras fermentum augue arcu, ac accumsan elit euismod id. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Sed ac posuere nisi. Pellentesque tincidunt vehicula bibendum. Phasellus eleifend viverra nisl.",
                  ),
                  new Paragraph(
                      "2222Proin ac purus faucibus, porttitor magna ut, cursus nisl. Vivamus ante purus, porta accumsan nibh eget, eleifend dignissim odio. Integer sed dictum est, aliquam lacinia justo. Donec ultrices auctor venenatis. Etiam interdum et elit nec elementum. Pellentesque nec viverra mauris. Etiam suscipit leo nec velit fringilla mattis. Pellentesque justo lacus, sodales eu condimentum in, dapibus finibus lacus. Morbi vitae nibh sit amet sem molestie feugiat. In non porttitor enim.",
                  ),
                  new Paragraph(
                      "33333Ut eget diam cursus quam accumsan interdum at id ante. Ut mollis mollis arcu, eu scelerisque dui tempus in. Quisque aliquam, augue quis ornare aliquam, ex purus ultrices mauris, ut porta dolor dolor nec justo. Nunc a tempus odio, eu viverra arcu. Suspendisse vitae nibh nec mi pharetra tempus. Mauris ut ullamcorper sapien, et sagittis sapien. Vestibulum in urna metus. In scelerisque, massa id bibendum tempus, quam orci rutrum turpis, a feugiat nisi ligula id metus. Praesent id dictum purus. Proin interdum ipsum nulla.",
                  ),
                  // new Paragraph({
                  //     children: [
                  //         new ImageRun({
                  //             data: fs.readFileSync("./demo/images/pizza.gif"),
                  //             transformation: {
                  //                 width: 200,
                  //                 height: 200,
                  //             },
                  //             floating: {
                  //                 horizontalPosition: {
                  //                     offset: 2014400,
                  //                 },
                  //                 verticalPosition: {
                  //                     offset: 2014400,
                  //                 },
                  //                 wrap: {
                  //                     type: TextWrappingType.SQUARE,
                  //                     side: TextWrappingSide.BOTH_SIDES,
                  //                 },
                  //                 margins: {
                  //                     top: 201440,
                  //                     bottom: 201440,
                  //                 },
                  //             },
                  //         }),
                  //     ],
                  // }),
              ],
          },
      ],
  });
  
var doc2 = new Document({
  sections: [
      {
          properties: {},
          children: [
              new Paragraph({
                  children: [
                      new TextRun(x)
                      // new TextRun("Hello World"),
                      // new TextRun({
                      //     text: "Foo Bar",
                      //     bold: true,
                      // }),
                      // new TextRun({
                      //     text: "\tGithub is"+ {age}+  "the best",
                      //     bold: true,
                      // }),
                  ],
              }),
          ],
      },
  ],
});

var _doc_ = doc1

    Packer.toBlob(_doc_).then((blob) => {
      // console.log(321, age)
      // console.log(321, doc)
      saveAs(blob, "example.docx");
    });
  };

  


  // Documents contain sections, you can have multiple sections per document, go here to learn more about sections
// This simple example will only contain one section



  return (
    <div>

<FormControl sx={{ m: 1, minWidth: 120 }}>
        
        <Select value={age} onChange={handleChange} displayEmpty inputProps={{ 'aria-label': 'Without label' }} >

          <MenuItem value=""><em>None</em></MenuItem>
          
          {options?.map(option => {
            return (
              <MenuItem key={option.label} value={option.value}>
                {/* {option.label ?? option.value} */}
                {option.label}
              </MenuItem>
            );
          })}

        </Select>

        <FormHelperText>Without label</FormHelperText>

        <Button variant="contained" disableElevation onClick={generate}>
          Enter
        </Button>

      </FormControl>

      
      {/* <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-helper-label">Age</InputLabel>
        <Select labelId="demo-simple-select-helper-label" id="demo-simple-select-helper" value={age} label="Age" onChange={handleChange} >
          <MenuItem value=""><em>None</em></MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
        <FormHelperText>With label + helper text</FormHelperText>
      </FormControl>

      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <Select value={age} onChange={handleChange} displayEmpty inputProps={{ 'aria-label': 'Without label' }} >
          <MenuItem value=""><em>None</em></MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
        <FormHelperText>Without label</FormHelperText>
      </FormControl> */}

      

      {/* <FormControl sx={{ m: 1, minWidth: 120 }}>
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        <TextField id="filled-basic" label="Filled" variant="filled" />
        <TextField id="standard-basic" label="Standard" variant="standard" />
        <FormHelperText>Without label</FormHelperText>
      </FormControl> */}

    </div>
  );
}
