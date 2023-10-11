import Login from './login/page';

export default function Home() {
  let error = false;
  
  if(!error){
    return (
      <Login/>
    )
  }
  else{
    return(
      <h1 style={{
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        marginTop:"10rem",
        fontWeight:"900",
        fontSize:"5rem"
      }}>
      Error 404 :( 
      </h1>
    )
  }

}
