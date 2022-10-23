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
import PizZip from 'pizzip';
import PizZipUtils from 'pizzip/utils/index.js';

import Docxtemplater from 'docxtemplater';



// Done! A file called 'My Document.docx' will be in your file system.

// function loadFile(url, callback) {
//   var r = PizZipUtils.getBinaryContent(url, callback);
//   console.log(131231231, typeof(r), r)
// }

function loadFile(url, callback) {
  PizZipUtils.getBinaryContent(url, callback);
}

export default function SelectLabels() {
 

  const [age, setAge] = React.useState('');

  // const handleChange = (event: SelectChangeEvent) => {
    // setAge(event.target.value);
  // };

  const handleChange = (event) => {
    setAge(event.target.value);
    console.log(1111, event.target.value, age)
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

  
  const generateDocument = () => {
    loadFile(
      "http://localhost:4000/download",
      function (error, content) {
          if (error) {
              throw error;
          }
          console.log(999, content, "http://localhost:4000/download")
          var zip = new PizZip(content);
          console.log(999, zip)

          // var doc = new window.docxtemplater(zip, {
          //     paragraphLoop: true,
          //     linebreaks: true,
          // });
          var doc = new Docxtemplater(zip, {
            paragraphLoop: true,
            linebreaks: true,
          });

          console.log(999555)
          // Render the document (Replace {first_name} by John, {last_name} by Doe, ...)
          doc.render({
              first_name: age,
              // last_name: "Doe",
              // phone: "0652455478",
              // description: "New Website",
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
    
    // var url = 'src/simple.docx'
    // var r = PizZipUtils.getBinaryContent(url);
    // console.log(321321, typeof(r), r)
    // loadFile(
    //   // 'https://docxtemplater.com/tag-example.docx',
    //   'src/simple.docx',
    //   function (error, content) {
    //     console.log(114441, typeof(content), content)
    //     if (error) {
    //       throw error;
    //     }
        // var zip = new PizZip(content);
        // var doc = new Docxtemplater(zip, {
        //   paragraphLoop: true,
        //   linebreaks: true,
        // });
        // doc.setData({
        //   first_name: 'John',
        //   last_name: 'Doe',
        //   phone: '0652455478',
        //   description: 'New Website',
        // });
        // try {
        //   // render the document (replace all occurences of {first_name} by John, {last_name} by Doe, ...)
        //   doc.render();
        // } catch (error) {
        //   // The error thrown here contains additional information when logged with JSON.stringify (it contains a properties object containing all suberrors).
        //   function replaceErrors(key, value) {
        //     if (value instanceof Error) {
        //       return Object.getOwnPropertyNames(value).reduce(function (
        //         error,
        //         key
        //       ) {
        //         error[key] = value[key];
        //         return error;
        //       },
        //       {});
        //     }
        //     return value;
        //   }
        //   console.log(JSON.stringify({ error: error }, replaceErrors));

        //   if (error.properties && error.properties.errors instanceof Array) {
        //     const errorMessages = error.properties.errors
        //       .map(function (error) {
        //         return error.properties.explanation;
        //       })
        //       .join('\n');
        //     console.log('errorMessages', errorMessages);
        //     // errorMessages is a humanly readable message looking like this :
        //     // 'The tag beginning with "foobar" is unopened'
        //   }
        //   throw error;
        // }
        // var out = doc.getZip().generate({
        //   type: 'blob',
        //   mimeType:
        //     'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
        // }); //Output the document using Data-URI
        // saveAs(out, 'output.docx');
      // }
    // );
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

        <Button variant="contained" disableElevation onClick={generateDocument}>
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
