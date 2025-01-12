import {
  Box,
  Button,
  Card,
  CardContent,
  TextField,
  InputAdornment,
  SvgIcon,
  Typography
} from '@mui/material';
import { Download as DownloadIcon } from '../../icons/download';
import { Search as SearchIcon } from '../../icons/search';
import { Upload as UploadIcon } from '../../icons/upload';
import { useRouter } from 'next/router';

export const ProductListToolbar = ({q,handleChange}:any) => {
  const router = useRouter()
  return (

  <Box >
    <Box
      sx={{
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        m: -1
      }}
    >
      <Typography
        sx={{ m: 1 }}
        variant="h4"
      >
        Blogs
      </Typography>
      <Box sx={{ m: 1 }}>
 
        <Button
  onClick={()=>router.push('/add')}
color="primary"
          variant="contained"
          >
          Add blog
        </Button>
      </Box>
    </Box>
    <Box sx={{ mt: 3 }}>
      <Card>
        <CardContent>
          <Box component='form' sx={{ maxWidth: 500 }}>
            <TextField
            value={q}
            onChange={(e)=>handleChange(e)}
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                  <Button type='submit'>

                    <SvgIcon
                      fontSize="small"
                      color="action"
                      >
                      <SearchIcon  />
                    </SvgIcon>
                      </Button>
                  </InputAdornment>
                )
              }}
              placeholder="Search product"
              variant="outlined"
            />
          </Box>
        </CardContent>
      </Card>
    </Box>
  </Box>
  )

            };
