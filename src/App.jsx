import { useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [ position, setPosition ] = useState(0)
  const name = useRef()
  const [ nc, setNc ] = useState(false)
  const email = useRef()
  const [ e, setE ] = useState(false)
  const vision = useRef()
  const [ vi, setVi ] = useState(false)

  const content = [
    <h1 className="one" style={position == 0 ? {animation: "animate 9000ms forwards"} : null}>Hi</h1>,
    <h2 className="two" style={position == 1 ? {animation: "animate 9000ms forwards"} : null}>Welcome to my website</h2>,
    <h3 className="three" style={position == 2 ? {animation: "animate 9000ms forwards"} : null}>I'm a dev.</h3>,
    <h4 className="four" style={position == 3 ? {animation: "animate 9000ms forwards"} : null}>A good one.</h4>,
    <h5 className="five" style={position == 4 ? {animation: "animate 9000ms forwards"} : null}>I specialise in design-oriented websites with the need for a back-end</h5>,
    <h6 className="six" style={position == 5 ? {animation: "animate 9000ms forwards"} : null}>I can make your vision real</h6>,
    <p className="seven" style={position == 6 ? {animation: "animate 9000ms forwards"} : null}>You just have to tell me what it is</p>,
    <form className="form" action="">
        <div>
          <div className={`formOne ${nc ? "active" : "inActive"}`} onMouseLeave={() => !name?.current?.value ? setNc(false) : null}>
            <label onClick={() => setNc(true)}>Name</label>
            <input onBlur={() => !name.current.value ? setNc(false) : null} className={`${nc ? "inpActive" : null}`}  type="text" ref={name} style={nc ? {display: "block"} : {display: "none"}}/>
          </div>
          <div className={`formTwo ${e ? "active" : "inActive"}`} onMouseLeave={() => !email?.current?.value ? setE(false) : null}>
            <label onClick={() => setE(true)}>Email</label>
            <input onBlur={() => !email.current.value ? setE(false) : null} className={`${e ? "inpActive" : null}`} type="text" ref={email} style={e ? {display: "block"} : {display: "none"}}/>
          </div>
          <div className={`formThree ${vi ? "active" : "inActive"}`} onMouseLeave={() => !vision?.current?.value ? setVi(false) : null}>
            <label onClick={() => setVi(true)}>Vision</label>
            <textarea onBlur={() => !vision.current.value ? setVi(false) : null} className={`${vi ? "inpActive" : null}`} type="text" ref={vision} style={vi ? {display: "block"} : {display: "none"}}/>
          </div>
        </div>  
        <button type='submit' onClick={(e) => next(e)} className="submit">Share</button>
    </form>,
    <h1 className="eight" style={position == 8 ? {animation: "animate 9000ms forwards"} : null}>I will be in touch soon {name?.current?.value}</h1>,
  ]

  function next(e) {
    e.preventDefault()
    console.log("NEXT")
    setPosition(8)
  }

  useEffect(() => {
    if(nc) {
      name.current.focus()
    }
  }, [nc])

  useEffect(() => {
    if(e) {
      email.current.focus()
    }
  }, [e])

  useEffect(() => {
    if(vi) {
      vision.current.focus()
    }
  }, [vi])

  useEffect(() => {
    const animationTimeout = setTimeout(() => {
      if (position < content.length - 2) {
        
        setPosition(position + 1)
        
      }
    }, 9000)

    return () => clearTimeout(animationTimeout)
  }, [position])

  return (
    <>
      { content[position] }
    </>
  )
}

export default App
