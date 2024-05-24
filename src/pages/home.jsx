import Layout from "../layout/AuthLayout"
function Home () {
    return(
        <>
        <Layout><main className=' w-full h-[400px] flex '>
        <section className ="border w-[60%] p-5  ">
        <footer className="capitalize flex flex-col items-center justify-center w-[300px] h-[300px] p-5 mx-auto mb-3 mt-0">
            
            <h1 className="w-fit h-[70px] ">ali</h1> 
         <h1 className="w-fit h-[70px] ">nur</h1>
         <h1 className="w-fit h-[70px] ">iman</h1> 
         
       </footer>
       <div className='w-full h-fit flex  justify-around'>
          <p className=' capitalize'>-fullstack web developer-</p>
  
          <email>
          <p className=" capitalize  font-semibold h-[15px] ">email me</p>
          <ul></ul>
          <p className='font-light'>alinuriman000@gmail.com</p>
          </email>
         
  
        </div>
        </section >
         
        <section className="border w-[40%] bg-third overflow-hidden "><img className="w-100%" src="https://source.unsplash.com/600x600/?landscape" alt="gambar" /></section>
        </main></Layout>
        </>
        
    )
}
export default Home