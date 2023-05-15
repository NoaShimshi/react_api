function Info(){
    var userJson=localStorage.getItem("user");
    var user=JSON.parse(userJson);
return (
    <div>
        <h1>name: {user.name}</h1>
        <h3>phone: {user.phone}</h3>
        <h3>email: {user.email}</h3>
        <br/>
        <h2>address:</h2><br/>
        <h3>street: {user.address.street}</h3>
        <h3>suite: {user.address.suite}</h3>
        <h3>city: {user.address.city}</h3>
        <h3>zipcode: {user.address.zipcode}</h3>
        <br/>
        <h3>website: {user.website}</h3>
        <h3>company name: {user.company.name}</h3>

    </div>
);
}
export default Info;