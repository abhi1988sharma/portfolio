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
    <><h2 style = {{
fontSize: '50px',
color: 'rgb(27, 96, 111)',

justifyContent: 'center',
textAlign: 'center'

}}>


  My github projects</h2><div style={{
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


      {githubData ? githubData.map(x => (
        <div key={x.id} style={{
          display: 'flex',
          flexDirection: 'column',
          height: 280,
          width: 300,
          background: 'rgb(27, 96, 111)',
          color: 'rgb(194, 237, 247)',
          padding: '10px',
          margin: '10px',
          //justifyContent: 'center',
          textAlign: 'center',
          borderRadius: '10%',
        }}>

          <h3 className={styles.projectName}>{x.name}</h3>
          <p className={styles.description}>{x.description}</p>
          <a href={x.html_url}><img className={styles.gitLogo} src="images/github.png" alt="github"></img></a>


        </div>
      ))
        : <div>Loading...</div>}
    </div></>
  )
}

export default MyGithubRepos