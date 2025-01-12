import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,

} from '@mui/material';
import EssentialInfo from '../add/EssentialInfo';
import { useState } from 'react';


const AddProduct = () => {
  const [disabled, setDisabled] = useState(false)

  return (

    <Card>
      <CardHeader
      subheader='Inputs marked with * are required '
        title="Fill the form"
      />
      <Divider />
      <CardContent>
        <EssentialInfo   setDisabled={setDisabled}/>
      </CardContent>
      <Divider />
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-end',
          p: 2
        }}
      >
        <Button
        disabled={disabled}
        type='submit'
        form='add-form'
        color="primary"
          variant="contained"
        >
          Save
        </Button>
      </Box>
    </Card>
  )
}

export default AddProduct
