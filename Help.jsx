import { NavLink , Outlet} from 'react-router-dom'

export const Help = () => {
  return (
    <div>
        <h1>Help</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, doloremque.</p>
        <nav>
        <NavLink to='faq'>Faq</NavLink>
        <NavLink to='contact'>Contanct Us</NavLink>
        </nav>
        <Outlet/>
    </div>
  )
}
