import "./form.css"

function FORM(props) {
  return(
    <div className="inputGroup" >
      <label for={props.id}> {props.label} : </label>
      <input type={props.type} id={props.id} />
    </div>
  )
}
function Buttons() {
    return (
        <div className="btn-group">
            <button>Login</button>
            <button>Register</button>
        </div>
    )
}
export default function Forms() {
  return(
    <div className="container">
      <div className="box">
        <FORM id="nama" label="Nama" type="name" />
        <FORM id="pass" label="Password" type="password" />
        <Buttons/>
      </div>
    </div>
  )
}