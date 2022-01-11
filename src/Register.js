import React , {useState} from "react";
import  "./register.css";
import {
  CountryDropdown,
  RegionDropdown,
  CountryRegionData
} from "react-country-region-selector";
import axios from "axios"



const Register=()=>{
    const [user,setUser]=useState({
      fname:"",
      lname:"",
      email:"",
      phone:"",
      DOB:"",
      Gender:"",
      Aadhar:"",
      district:"",
      addressLine1:"",
      addressLine2:"",
      pincode:"",
    })
    const [country, setCountry] = useState("India");
    const [region, setRegion] = useState("");
    const handleChange= e => {
        const {name , value} =e.target
        console.log(user)
        setUser({
            ...user,
            [name]:value
        })
    }

    const register=()=>{
        const {name, email, password ,reEnterPassword}= user
        if(name && email && password && (password === reEnterPassword))
        {
            if(password.length<8){
                alert("please enter at lest 8 word password")
            }else{
            axios.post("http://localhost:9002/register",{user})
            .then( res=> alert(res.data.message))
            }
        }
        else{
            alert("invalid input")
        }
    }
    return (
      <div className="register">
        <div class="container">
          <div class="title">Patient Registration</div>
          <div class="content">
            <div className="formm">
              <div class="user-details">
                <div class="input-box">
                  <span class="details">First Name</span>
                  <input
                    type="text"
                    name="fname"
                    value={user.name}
                    placeholder="Enter your Name"
                    onChange={handleChange}
                    required
                  />
                </div>
                <div class="input-box">
                  <span class="details">Middle Name</span>
                  <input
                    type="text"
                    name="mname"
                    value={user.name}
                    onChange={handleChange}
                    placeholder="Enter your middle name"
                    required
                  />
                </div>
                <div class="input-box">
                  <span class="details">Last Name</span>
                  <input
                    type="text"
                    name="lname"
                    value={user.name}
                    onChange={handleChange}
                    placeholder="Enter your last name"
                    required
                  />
                </div>
                <div class="input-box">
                  <span class="details">Email</span>
                  <input
                    type="text"
                    name="email"
                    value={user.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                    required
                  />
                </div>
                <div class="input-box">
                  <span class="details">Phone Number</span>
                  <input
                    type="tel"
                    name="phone"
                    onKeyDown={ (evt) => evt.key === '.' && evt.preventDefault() }
                    value={user.phone}
                    onChange={handleChange}
                    placeholder="Enter your number"
                    min="1"
                  step="1"
                    pattern="[1-9]{1}[0-9]{9}"
                    maxLength={10}
                    required
                  />
                </div>
                <div class="input-box">
                  <span class="details">Aadhar Number</span>
                  <input
                    type="text"
                    name="aadhar"
                    value={user.aadhar}
                    onChange={handleChange}
                    pattern="^[2-9]{1}[0-9]{3}\\s[0-9]{4}\\s[0-9]{4}$"
                    minLength={12}
                    maxLength={16}
                    placeholder="Enter your Aadhar number"
                    required
                  />
                </div>
                <div class="input-box">
                  <span class="details">DOB</span>
                  <input
                    type="date"
                    name="date"
                    max="2021-12-31"
                    value={user.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div class="input-box">
                  <span class="details">Country</span>
                  <CountryDropdown
                    value={country}
                    onChange={(val) => setCountry(val)}
                    defaultOptionLabel={"Country *"}
                    style={{
                      padding: 5,
                      width: 200,
                      marginLeft: 5,
                      borderWidth: 1,
                      borderStyle: "solid",
                      borderColor: "gray",
                      fontFamily: "Poppins,sans-serif",
                      fontSize: 16,
                      color: "gray",
                      marginBottom: 20,
                    }}
                  />
                </div>
                <div class="input-box">
                  <span class="details">State</span>
                  <RegionDropdown
                    blankOptionLabel={"State *"}
                    defaultOptionLabel={"State *"}
                    country={country}
                    value={region}
                    onChange={(val) => setRegion(val)}
                    style={{
                      padding: 5,
                      marginLeft: 5,
                      width: 200,
                      borderWidth: 1,
                      borderStyle: "solid",
                      borderColor: "gray",
                      fontFamily: "Poppins,sans-serif",
                      fontSize: 16,
                      color: "gray",
                      marginBottom: 20,
                    }}
                  />
                </div>
                <div class="input-box">
                  <span class="district">District</span>
                  <input
                    type="text"
                    placeholder="Enter District"
                    name="district"
                    value={user.district}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div class="input-box">
                  <span class="address">Address Line 1</span>
                  <input
                    type="text"
                    placeholder="Enter Address Line 1"
                    name="addressLine1"
                    value={user.addressLine1}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div class="input-box">
                  <span class="address">Address Line 2</span>
                  <input
                    type="text"
                    placeholder="Enter Address Line 2"
                    name="addressLine2"
                    value={user.addressLine2}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div class="input-box">
                  <span class="pincode">Pincode</span>
                  <input
                    type="text"
                    placeholder="Enter PinCode"
                    name="pincode"
                    maxLength={6}
                    value={user.pincode}
                    onChange={handleChange}
                    required
                  />
                </div>

                
                
              </div>

              <div class="gender-details">
                <input type="radio" name="gender" id="dot-1" />
                <input type="radio" name="gender" id="dot-2" />
                <input type="radio" name="gender" id="dot-3" />
                <span class="gender-title">Gender</span>
                <div class="category">
                  <label for="dot-1">
                    <span
                      class="dot one"
                      name="Gender"
                      value={user.name}
                      onChange={handleChange}
                    ></span>
                    <span class="gender">Male</span>
                  </label>
                  <label for="dot-2">
                    <span
                      class="dot two"
                      name="Gender"
                      value={user.name}
                      onChange={handleChange}
                    ></span>
                    <span class="gender">Female</span>
                  </label>
                  <label for="dot-3">
                    <span class="dot three"></span>
                    <span class="gender">Prefer not to say</span>
                  </label>
                </div>
              </div>
              <div class="button">
                <input type="button" onClick={register} value="Sign Up" />
              </div>
              <div class="signup-link">
                Already a member? <a>Login now</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    );

}

export default Register