import { useState } from 'react'
import './App.css'
import {
   Container,
   Typography,
   Box,
   TextField,
   FormControl,
   Select,
   InputLabel,
   MenuItem,
   Button,CircularProgress
 } from '@mui/material';

function App() {
const[emailContent, setemailContent]= useState('');
const[tone, setTone] = useState('');
const[generatedReply, setgeneratedReply] = useState('');
const[error, setError] = useState('');
const[loading, setLoading] = useState(false);
const handleSubmit = async () => {
  setLoading(true);
  try {
    const response = await axios.post("")
  } catch (error) {
    
  }

};


  return (
    <Container maxWidth="md" sx={{py:4}}>
      <Typography variant='h3' component="ĥ1" gutterBottom>
         Email Reply Generator
      </Typography>  
       <Box sx={{mx: 3}}>
          <TextField
            fullWidth
           multiline
           rows={6}
            variant='outlined'
           label="Original Email Content"
           value={emailContent || ''}
            onChange={(e) => setemailContent(e.target.value)}
           sx={{ mb:2 }}
        />


        <FormControl fullWidth sx={{ mb:2 }}>
          <InputLabel>Tone (Optional)</InputLabel>
          <Select 
            value={tone || ''}
            label="Tone (Optional)"
            onChange={(e) => setTone(e.target.value)}
         >
            <MenuItem value="">None</MenuItem>
            <MenuItem value="professional">Professional</MenuItem>
            <MenuItem value="casual">Casual</MenuItem>
            <MenuItem value="friendly">Friendly</MenuItem>
          </Select>
        </FormControl>

          <Button variant="contained"
          sx={{ mb:2 }}
          onClick={handleSubmit}
          disabled= {!emailContent || loading}>
            {loading ? <CircularProgress size={24}/> : "Generate Reply"}
          </Button>
      </Box>

      <Box sx={{mx: 3}}>
        <TextField
          fullWidth
          multiline
          rows={6}
          variant='outlined'
          value={generatedReply || ''}
          inputProps={{readonly: true}}
          sx={{ mb:2 }}
        />

        <Button
          variant='outlined'
          onClick={() => navigator.clipboard.write(generatedreply)}>
            Copy to Clipboard
          </Button>
        </Box>

    </Container>
  )
}

export default App
