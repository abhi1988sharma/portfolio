import React, { useEffect, useState } from 'react'
import { IRepo } from './githubData'
import styles from "./githubData.module.scss";



const githubEndpoint = "https://api.github.com/users/abhi1988sharma/repos"

const MyGithubRepos: React.FC = () => {

  const [githubData, setGithubData] = useState<IRepo[]>([])

  useEffect(() => {
    fetch(githubEndpoint)
      .then(x => x.json())
      .then(x => setGithubData(x))
  }, [])

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'center',
      rowGap: '60px',
      columnGap: '60px',
      marginTop: '60px', 
      marginBottom: 'auto',
      paddingBottom: '60px',
      
      
      
    }}>
      {
        githubData ? githubData.map(x => (
          <div key={x.id} style={{
            display: 'flex',
            flexDirection: 'column',
            height: 220,
            width: 300,
            background: 'black',
            color: 'white',
           padding: '10px',
           margin: '10px',
           justifyContent:'center',
           textAlign:'left',
           borderRadius:'10%',
      
           
           
            
          }}>
            <h3 className={styles.projectName}>{x.name}</h3>
            <p className={styles.description}>{x.description}</p>
           <a href={x.html_url}><img className={styles.gitLogo} src="images/github.png" alt= "github"></img></a>
            
            
          </div>
        ))
        : <div>Loading...</div>
      }
    </div>
  )
}

export default MyGithubRepos