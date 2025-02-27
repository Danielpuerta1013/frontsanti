import "./Logistica.css"

export function Logistica(){

    return(

        <>

                <section className="fondo">

                </section>

            <section className="container-my-5 text-center"> 
                <section className="row p-5">
                    <div className="col-12 col-md-6">
                        <h3>Logistica web</h3>
                        <img src="../../../src/assets/4394250.png" alt="foto" className="img-fluid" />
                    </div>
                    <div className="col-12 col-md-6 align-self-center shadow p-5">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur commodi deleniti accusantium quas non vel veritatis tempore quia exercitationem architecto explicabo debitis ipsa quo consequatur earum id, ipsum cum perferendis possimus laboriosam. Veniam quo, cumque sint enim, asperiores a nobis magnam rem iste impedit fugiat quae praesentium, consequatur quisquam fugit.</p>
                    </div>
                </section>
            </section>
        
            <form className="border rounded p-5">

                <div className="mb-3">
                    <input type="text" className="form-control" placeholder="Cc. Logistica"/>
                </div>

                <div className="mb-3">
                    <input type="email" className="form-control" placeholder="Correo"/>
                </div>

                <div className="mb-3">
                    <input type="text" className="form-control" placeholder="Telefono"/>
                </div>

                <div className="mb-3">
                    <input type="text" className="form-control" placeholder="receptor"/>
                </div>

                <div className="mb-3">
                    <input type="text" className="form-control" placeholder="detalles"/>
                </div>

                <button className="btn btn-primary w-100">Enviar</button>

               

            </form>
        
        </>
    )
}