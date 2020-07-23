import React from "react"
import "../pages/testerx.css"

export default function PotentialBoons(props) {
  const potential = props.potential
  const displayingList = props.displayingList

  return potential.map(element => {
    if (!displayingList.includes(element.Name)) {
      displayingList.push(element.Name)
      if (element.Other2) {
        if (element.Other2.length !== 0) {
          return (
            <div className="too">
              <img className="testimg" src={element.Iconurl} alt="" />
              <h3 className="spaceBoon">{element.Name}</h3>
              {element.Other.map(reqs => {
                return <h5>+{reqs}</h5>
              })}
              IN ADDITION
              {element.Other2.map(reqs2 => {
                return <h5>+{reqs2}</h5>
              })}
            </div>
          )
        } else {
          return (
            <div className="too">
              <img className="testimg" src={element.Iconurl} alt="" />
              <h3 className="spaceBoon">{element.Name}</h3>
              {element.Other.map(reqs => {
                return <h5>+{reqs}</h5>
              })}
            </div>
          )
        }
      } else {
        return (
          <div className="too">
            <img className="testimg" src={element.Iconurl} alt="" />
            <h4>{element.Name}</h4>
            <div className="derp">
              {element.Other.map(reqs => {
                return <h5>+{reqs}</h5>
              })}
            </div>
          </div>
        )
      }
    } else {
      return null
    }
  })
}
