function Home(){
    debugger
    var json =localStorage.getItem('Bret');
    var data=JSON.parse(json)
    console.log(data)
return (
    <p>hi</p>
)
}
export default Home;