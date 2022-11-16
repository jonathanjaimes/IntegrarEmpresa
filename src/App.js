import React from "react";
import "./App.css";

function App() {
  const [isShowingLogin, setIsShowingLLogin] = React.useState(true);

  return (
    <div
      style={{
        height: "100vh",
        backgroundColor: "#c4c4c4",
        display: "flex",
        alignItems: "end",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          backgroundColor: "#fff",
          width: "100%",
          padding: "20px 15px",
          borderTopLeftRadius: "20px",
          borderTopRightRadius: "20px",
          height: "76vh",
        }}
      >
        <div
          style={{
            display: "flex",
            position: "absolute",
            justifyContent: "center",
            backgroundColor: "rgba(0,0,0,0)",
            width: "100%",
            left: 0,
          }}
        >
          <div
            style={{
              width: "100px",
              position: "relative",
              height: "100px",
              top: "-70px",
              backgroundColor: "red",
              borderRadius: "100%",
              border: "5px #fff solid",
            }}
          ></div>
        </div>

        {isShowingLogin ? (
          <div >
            <p
              style={{
                fontSize: "20px",
                textAlign: "center",
                marginTop: "70px",
              }}
            >
              ¡Bienvenido!
            </p>
            <p style={{ textAlign: "left", marginTop: "30px" }}>
              Iniciar sesión
            </p>
            <p>fdlkgjlkdjgkfjd</p>
            <p>fdlkgjlkdjgkfjd</p>
            <p>fdlkgjlkdjgkfjd</p>
            <p>fdlkgjlkdjgkfjd</p>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-around",
                marginTop: "35px",
              }}
            >
              <button
                style={{
                  backgroundColor: "#004df2",
                  color: "#fff",
                  width: "90%",
                  fontSize: "15px",
                  padding: "5px 5px",
                  border: "1px #3400de solid",
                  borderRadius: "5px",
                  cursor:"pointer",
                }}
              >
                Iniciar sesión
              </button>
            </div>
            <p
              style={{
                textAlign: "center",
                marginTop: "50px",
                fontSize: "15px",
              }}
            >
              ¿Aún no tienes cuenta?{" "}
              <span style={{ fontWeight: "bold", cursor:"pointer" }} onClick={()=>{
                setIsShowingLLogin(false)
              }}>Regístrate aquí</span>
            </p>
            <p style={{marginTop:"20px", textAlign:"center", cursor:"pointer"}}>Olvidé mi contraseña</p>
          </div>
        ) : (
          <div>
            <p
              style={{
                marginTop: "70px",
                fontSize: "20px",
                textAlign: "center",
              }}
            >
              Regístrate
            </p>
            <div>
              <p>fdlkgjlkdjgkfjd</p>
              <p>fdlkgjlkdjgkfjd</p>
              <p>fdlkgjlkdjgkfjd</p>
              <p>fdlkgjlkdjgkfjd</p>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <button
                style={{
                  backgroundColor: "#004df2",
                  color: "#fff",
                  width: "90%",
                  fontSize: "15px",
                  padding: "5px 5px",
                  border: "1px #3400de solid",
                  borderRadius: "5px",
                  marginTop: "20px",
                  cursor:"pointer"
                }}
              >
                Crear cuenta
              </button>
            </div>
            <p style={{textAlign:"center", marginTop:"60px"}}>¿Ya tienes cuenta? <span onClick={()=>{
              setIsShowingLLogin(true)
            }} style={{fontWeight:"bold", fontSize:"15px", cursor:"pointer"}}>inicia sesión</span></p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
