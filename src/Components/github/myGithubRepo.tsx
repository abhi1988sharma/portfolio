import React, { useEffect, useState } from 'react'
import { IRepo } from './githubData'
import styles from "./githubData.module.scss";

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';



const githubEndpoint = "https://api.github.com/users/abhi1988sharma/repos"

const MyGithubRepos: React.FC = () => {

  

  const [githubData, setGithubData] = useState<IRepo[]>([])

  useEffect(() => {
    fetch(githubEndpoint)
      .then(x => x.json())
      .then(x => setGithubData(x))
  }, [])

  return (
    <><h2 style = {{
fontSize: '50px',
color: 'rgb(27, 96, 111)',
justifyContent: 'center',
textAlign: 'center'

}}> My github projects</h2>
  <div style={{
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    rowGap: '60px',
    columnGap: '60px',
    marginTop: '60px', 
    marginBottom: 'auto',
    paddingBottom: '60px'
    

    
  }}>

      {githubData ? githubData.map(x => (
        <div key={x.id}  >
          <Card sx={{ maxWidth: 365 }} style={{background: 'rgb(27, 96, 111)'}}>
      <CardMedia
        component="img"
        height="80"
        image="/images/projectBack.gif"
        alt="Projects Pic"
      />
      <CardContent >
        <Typography gutterBottom variant="h5" component="div" style={{color: 'rgb(194, 237, 247)'}}>
        {x.name}
        </Typography>
        <Typography variant="body2" style={{
        color: 'rgb(194, 237, 247)'}} >
        {x.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small"><a href={x.html_url}><img className={styles.gitLogo} src="images/github.png" alt="github"></img></a></Button>
        
      </CardActions>
    </Card>


      

        </div>
      ))
        : <div>Loading...</div>}
    </div></>
  )
}

export default MyGithubRepos