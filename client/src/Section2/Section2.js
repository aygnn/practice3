import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';
import './Section2.scss';
import InputLabel from '@mui/material/InputLabel';
import TextField from '@mui/material/TextField';
import { alpha, styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import FormControl from '@mui/material/FormControl';
import axios from 'axios'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
const BootstrapInput = styled(InputBase)(({ theme }) => ({
  'label + &': {
    marginTop: theme.spacing(3),
  },
  '& .MuiInputBase-input': {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.mode === 'light' ? '#fcfcfb' : '#2b2b2b',
    border: '1px solid #ced4da',
    fontSize: 16,
    width: 'auto',
    padding: '10px 12px',
    transition: theme.transitions.create([
      'border-color',
      'background-color',
      'box-shadow',
    ]),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
      borderColor: theme.palette.primary.main,
    },
  },
}));

export default function Section2() {
  const [products,setProducts]=useState([])
  const [search,setSearch]=useState('')


  const getProducts=()=>{
    axios.get('http://localhost:2000/products')
    .then(res=>setProducts(res.data))
  }
  useEffect(()=>{
    getProducts()
  },[])
  console.log(products);

  const handleDelete=(id)=>{
    const nodeleted=products.filter(x=>x._id!==id)
    setProducts(nodeleted)
  }
  return (
    <div>
      <Container>

    <div className='section2'>
      <div>

      <p>Popular Item in the market</p>
      <h2>Trending  <span>Product</span></h2>
      </div>
    </div>

      <FormControl className='searchbtn' variant="standard">

        <BootstrapInput onChange={(e)=>{setSearch(e.target.value)}}
  placeholder='Search' id="bootstrap-input" />
      <Stack spacing={2} direction="row">
     
      <Button variant="contained">Search</Button>
      
    </Stack>
      </FormControl>
      
    <div className='cards'>
      {
        products.filter(item=>item.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())).map((item)=>(

      <div className='cardd' key={item._id}>
      <Row>
        <Col sm={8}>
          <div className='card1'>

          <img src={item.image}/>
          </div>
        </Col>
        <Col sm={4}>
          <div>
            <p>Stock:{item.stock}</p>
            <h3>{item.name}</h3>
            <p>{item.price} </p>
            <button onClick={()=>handleDelete(item._id)} className='button-90' >Delete</button>
          </div>
        </Col>

      </Row>

      </div>
        ))
      }

    </div>
      </Container>

    </div>
  )
}
