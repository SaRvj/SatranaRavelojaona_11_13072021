import { Component } from 'react'
import logo from '../../assets/logo-small.svg'
import './footer.css'

//Ce composant affiche le "footer" de chaque page
export default class Footer extends Component {
  render() {
    return (
      <div className="footerBackground">
        <div className="footerContent">
          <img
            className="footerLogo"
            src={process.env.PUBLIC_URL + logo}
            alt="Logo Kasa"
          />
          <p className="footerCopyright">© 2020 Kasa. All rights reserved</p>
        </div>
      </div>
    )
  }
}