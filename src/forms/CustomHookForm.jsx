import { useInput } from "./useInput";
export default function CustomHookForm() {
  const [fName, resetFName] = useInput("");
  const [lName, resetLName] = useInput("");
  const [email, resetEmail] = useInput("");
  const [address, resetAddress] = useInput("");
  const [city, resetCity] = useInput("");
  const [phone, resetPhone] = useInput("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(
      fName.value,
      lName.value,
      email.value,
      address.value,
      city.value,
      phone.value
    );
    resetFName();
    resetLName();
    resetEmail();
    resetAddress();
    resetCity();
    resetPhone();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input placeholder="first name..." {...fName} />
        <br />
        <br />
        <input placeholder="last name..." {...lName} />
        <br />
        <br />
        <input placeholder="email..." {...email} />
        <br />
        <br />
        <input placeholder="address..." {...address} />
        <br />
        <br />
        <input placeholder="city..." {...city} />
        <br />
        <br />
        <input placeholder="phone..." {...phone} />
        <br />
        <br />
        <input type="submit" />
      </form>

      <p>Name: {fName.value} {lName.value}</p>
      <p>Email: {email.value}</p>
      <p>Address: {address.value}</p>
      <p>City: {city.value}</p>
      <p>Phone: {phone.value}</p>
    </>
  );
}