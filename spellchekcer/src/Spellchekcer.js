import './App.css';
import { useState, useEffect} from 'react';
import useLocalStorage from './useLocalStorage';
import { IconMoon, IconSun } from '@tabler/icons';

function Spellchekcer() {
  const [word, setWord] = useState()
  const [apiResponse, setApiResponse] = useState()
  const [bestCandidate, setBestCandidate] = useState()
  const [loading, setLoading] = useState()
  var myHeaders = new Headers();
  
  myHeaders.append("apikey", "ygfNot99AP1jNm6hjUkFmd2Y3Uyt62dn");

  var requestOptions = {
    method: 'GET',
    redirect: 'follow',
    headers: myHeaders
  }
  
  async function handleSubmit(e) {
    e.preventDefault()
    if (word !== '') {
      setLoading(true)
      const result = await fetch(`https://api.apilayer.com/spell/spellchecker?q=${word}`, requestOptions)
      const json = await result.json()
      setLoading(false)
      await setApiResponse(json["corrections"][0]["candidates"])
      await setBestCandidate(json["corrections"][0].best_candidate) 

    }
  }

  const [myWord, setMyWord] = useState()
  // false === Light, true === dark
  const [darkMode, setDarkMode] = useLocalStorage(false)
  const myWords = ['dacne', 'canlde', 'sereously', 'birtsday', 'fency', 'cookei', 'expereince', 'buisness']
  const randomNum = Math.floor(Math.random() * myWords.length);

  useEffect(() => {
    setMyWord(myWords[randomNum])
  }, []);


  return (
    <main className={`${darkMode && 'dark'}`}>
      <button className="theme-button" onClick={() => setDarkMode(prevMode => !prevMode)}>{darkMode ? <IconSun /> : <IconMoon />}</button>
      <h1 className='heading'>Spellchekcer</h1>
      <form action="" method='GET'>
        <input 
          onChange={(e) => setWord(e.target.value)} 
          type="text"
          placeholder={myWord}
        />

        <button 
          className={loading ? 'light-green' : ''}
          type="submit"
          value={word}
          onClick={(e) => handleSubmit(e)}
        ><p>Check</p></button>
      </form>
      <ul>
        {apiResponse ? <h3>We have found <span className='color-accent'>{apiResponse.length}</span> possible word{apiResponse.length > 1 ? 's' : ''}:</h3> : ''}
        <section style={{overflowY: apiResponse?.length < 11 ? 'hidden' : 'scroll'}}>
          {apiResponse?.map(candidate => {
            if (candidate === bestCandidate){
              return <li className='color-accent'>{candidate}</li>
            } else {
              return <li>{candidate}</li>
            }
          })}
        </section>
      </ul>
    </main>
  );
}

export default Spellchekcer;
