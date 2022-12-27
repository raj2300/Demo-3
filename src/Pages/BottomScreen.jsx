import {useState} from "react";
import style from "../styles/BottomScreen.module.css";
import "../Component/style.css";
import "../App.css";

export const BottomScreen = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");

  function validEmail() {
    //eslint-disable-next-line
    const re = new RegExp('^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$');
    return re.test(email);
  }

  function validPhone() {
    //eslint-disable-next-line
    const re = new RegExp('^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$');
    return re.test(phone);
  }

  const areFieldsValid = () => {
    if (name.length === 0) {
      setError("Name cannot be empty!");
      return false;
    }
    if (email.length === 0) {
      setError("Email cannot be empty!");
      return false;
    }
    if (!validEmail()) {
      setError("Please enter correct email address!");
      return false;
    }
    if (phone.length === 0) {
      setError("Mobile number cannot be empty!");
      return false;
    }
    if (!validPhone()) {
      setError("Please enter correct phone number!");
      return false;
    }
    return true;
  };

  const handleSubmit = () => {
    if (!areFieldsValid()) return;
  };

  return (
    <div class="container p-4 border border-dark rounded m-auto ">
      <div class="row ">
        <div class="col-sm   v1  m-2 align-middle justify-center">
          <h2 className="text-dark text-center font-weight-bold">
            GET IN TOUCH
          </h2>
          <h6 className="text-dark text-center font-weight-bold">
            Please Complete the form and we will get back to you
          </h6>
        </div>

        <div class="col-sm  border-dark border-left   ">
          <form
            class="text text-dark font-weight-bold p-2 m-1"
            onSubmit={handleSubmit}
          >
            <div className="form-group ">
              <label htmlFor="name">Name*</label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                minLength={3}
                aria-describedby="name"
                placeholder="Enter your Name"
              />
            </div>
            <div className="form-group my-2">
              <label htmlFor="email">Email*</label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                aria-describedby="email"
                placeholder="Enter your email"
              />
            </div>

            <div className="form-group my-2">
              <label htmlFor="mobile">Mobile Number*</label>
              <input
                type="tel"
                pattern="[6789][0-9]{9}"
                className="form-control"
                name="mobile"
                id="mobile"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
                minLength={10}
                maxLength={10}
                aria-describedby="mobile number"
                placeholder="Enter your Mobile Number"
              />
            </div>
            <div className={style.error} style={{ display: error.length===0 ? 'none': 'block'}}>{error}</div>
            <div className="text-center ">
              <button
                type="submit"
                className="btn  btn-primary my-1 text-center  btn-lg col-12 "
                style={{ backgroundColor: "#123456" }}
              >
                Register Now
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
