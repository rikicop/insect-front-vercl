import React from 'react'
import { Body } from './FormularioStyles'

const Formulario = () => {
  return (
    <Body>
        <div className='container'>
            <div className='title'>Formulario de Registro</div>
            <form action="#">
                <div className="user-details">
                    <div className="input-box">
                        <span className="details">Full Name</span>
                        <input type="text" placeholder='Nombre' required/>
                    </div>
                    <div className="input-box">
                        <span className="details">UserName</span>
                        <input type="text" placeholder='UserName' required/>
                    </div>
                    <div className="input-box">
                        <span className="details">Email</span>
                        <input type="text" placeholder='Email' required/>
                    </div>
                    <div className="input-box">
                        <span className="details">Phone Number</span>
                        <input type="text" placeholder='phone' required/>
                    </div>
                    <div className="input-box">
                        <span className="details">Password</span>
                        <input type="text" placeholder='Nombre' required/>
                    </div>
                    <div className="input-box">
                        <span className="details">Confirm Password</span>
                        <input type="text" placeholder='Nombre' required/>
                    </div>
                </div>
                <div className="gender-details">
                    <input type="radio" name="gender" id="dot-1" />
                    <input type="radio" name="gender" id="dot-2" />
                    <input type="radio" name="gender" id="dot-3" />
                    <span className="gender-title">Gender</span>
                    <div className='category'>
                        <label htmlFor="dot-1">
                            <span className="dot one"></span>
                            <span className="gender">Male</span>
                        </label>
                        <label htmlFor="dot-2">
                            <span className="dot two"></span>
                            <span className="gender">Female</span>
                        </label>
                        <label htmlFor="dot-3">
                            <span className="dot three"></span>
                            <span className="gender">Prefer not to say</span>
                        </label>
                    </div>
                </div>
                <div className="button">
                    <input type="submit" name="" value="Register" />
                </div>
            </form>
        </div>
    </Body>
  )
}

export default Formulario