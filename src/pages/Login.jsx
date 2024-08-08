import FRESASIMG from '../assets/img/fresas-1.webp'
import '../styles/pages/Login.css'
export const Login = () => {
  return (
    <div className="login-page">
        <section className="login-img">
            <img src={FRESASIMG} alt="FRESAS" />
        </section>
        <section className="login-divider">
            <span></span>
            <span></span>
            <span></span>
        </section>
        <section className='login-content'>
            <h1>Welcome to FreshCart</h1>
            <p>Embark on a culinary journey with fresh ingredients brought right to your kitchen</p>
        </section>
        <section className='login-button'>
            <button>Continue</button>
        </section>
    </div>
  )
}
