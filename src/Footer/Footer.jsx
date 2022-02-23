import React from 'react'
import './Footer.css'


// function Footer() {
//   return (
//     <div>
//         <h2>Esto es el footer</h2>
//     </div>
//   )
// }

// export default Footer


const Footer = () => {
  return (
    <div id='footer'>
    <h5 className="title">Footer Content</h5>
        <div className='footerContent'>
          <div className='descripcionFooter'>
            <h4>Descripcion de la empresa - Cosas importantes</h4>
              <p className='descripcionFooter'>
Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt molestiae beatae incidunt soluta assumenda placeat recusandae excepturi quia hic odit! Laboriosam earum dicta laudantium cumque ipsum cupiditate, qui rerum, fugit natus assumenda reprehenderit perspiciatis velit cum voluptatum saepe tempore soluta distinctio libero a sint. Recusandae, veniam! Ipsa autem obcaecati animi.
              </p>
          </div>
          <div className='ListadoLinksFooter'>
                <h5 className="titleLinksFooter">Links</h5>
                <ul>
                  <li className="links">
                    <a href="#!">Link 1</a>
                  </li>
                  <li className="links">
                    <a href="#!">Link 2</a>
                  </li>
                  <li className="links">
                    <a href="#!">Link 3</a>
                  </li>
                  <li className="links">
                    <a href="#!">Link 4</a>
                  </li>
                </ul>
          </div>
          <div className='Map'> 
          <iframe className='FooterMap' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.70178828842!2d-58.50804599999999!3d-34.5864115!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb64cd7e01dab%3A0xa977aefa83fc9ff5!2sCuenca%204965%2C%20C1419ABU%20CABA!5e0!3m2!1ses!2sar!4v1645625111970!5m2!1ses!2sar" title='map'></iframe>
          <h4>Direccion</h4>
          </div>
        </div>
        <div className="footerCopyright">
            &copy; {new Date().getFullYear()} Copyright: <a href="https://www.mdbootstrap.com"> Juan Ignacio Vidal Bruni </a>
        </div>
      </div>
   
  );
}

export default Footer;