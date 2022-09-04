import React from 'react'
import './Styles/footer.css'

export default function Footer() {
  return (
            <>
              <footer className='foooter'>
                    <div className='container'>
                        <div className='social-icons'>
                                <a href = "https://www.facebook.com/" target="_blank"><i class = "bi bi-facebook"></i></a>
                                <a href = "https://www.twitter.com/" target="_blank"><i class = "bi bi-twitter"></i></a>
                                <a href = "https://www.instagram.com/" target="_blank"><i class = "bi bi-instagram"></i></a>
                                <a href = "https://www.web.whatsapp.com/" target="_blank"><i class = "bi-whatsapp"></i></a>
                                <a href = "https://www.google.com/" target="_blank"><i class = "bi bi-google"></i></a>
                        </div>
                    </div>
              </footer>
            </>
  )
}
