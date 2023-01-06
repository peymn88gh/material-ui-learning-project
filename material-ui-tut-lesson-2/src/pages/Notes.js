import { Card, Container, Grid, Paper, Typography } from '@material-ui/core'
import React, { useEffect, useState } from 'react'

export default function Notes() {
  const [notes, setNotes] = useState([])

  useEffect(()=>{
    fetch("http://localhost:8000/notes",{
    }).then(rest=>rest.json()).then((data)=>{
      setNotes(data)
      console.log(data);
    })
  },[])
  return (
    <Container>
      <Grid container>
        {notes.map((note)=>(
          <Grid item key={note.id}>
            <Card variant='outlined'>

            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}
