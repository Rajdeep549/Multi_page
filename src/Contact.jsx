import React,{useState} from 'react'

const Contact = () => {
  const [data, setdata] = useState({
    fullname:'',
    phone:'',
    email:'',
    msg:'',
  })

  const InputEvent1=(event)=>{
    const {name,value}=event.target;
    setdata((prevval)=>{
       return { ...prevval,
       [name]:value, 
      }
    })
  }
  const formSubmit=(e)=>{
    e.preventDefault();
    alert(`my name is ${data.fullname}.my mobile number is ${data.phone}.my email adress is ${data.email}.Here i want say is ${data.msg}`)
  }
  return (
    <>
      <div className="my-1">
        <div className="text-center font-weight-bold">
          <h1 className="font-weight-Bold">Contact Us</h1>
        </div>
      </div>
      <div className="container contact_div">
        <div className="col-md-6 col-10 mx-auto">
        <form onSubmit={formSubmit} action="">
          <div className="mb-3">
            <label for="exampleFormControlInput1" className="form-label">Full Name</label>
            <input type="text" className="form-control" id="exampleFormControlInput1" name="fullname" value={data.fullname} onChange={InputEvent1} placeholder="Enter Your Name" />
          </div>
          <div className="mb-3">
            <label for="exampleFormControlInput1" className="form-label">Phone Number</label>
            <input type="telephone" className="form-control" id="exampleFormControlInput1" name="phone" value={data.phone} onChange={InputEvent1} placeholder="Phone Number" />
          </div>
          <div className="mb-3">
            <label for="exampleFormControlInput1" className="form-label">Email address</label>
            <input type="email" className="form-control" id="exampleFormControlInput1" name="email" value={data.email} onChange={InputEvent1} placeholder="name@example.com" />
          </div>
         
          <div className="mb-3">
            <label for="exampleFormControlTextarea1" className="form-label">Example textarea</label>
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" name="msg" value={data.msg} onChange={InputEvent1}></textarea>
          </div>
            <div className="col-12">
              <button className="btn btn-primary my_button" type="submit">Submit form</button>
            </div>
          </form>
        </div>
        
      </div>
    </>
  )
}

export default Contact