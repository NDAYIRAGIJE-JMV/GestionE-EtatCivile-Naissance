import { createPool } from "mysql2/promise";

const pool=createPool({
  
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'gestion_etat_civil',
        connectionLimit:100
      
}

);
const executeQuery=async(query,params)=>{
let connection;
try{
    connection=await pool.getConnection();
    const [rows]=await connection.query(query,params);
    return  rows;
}
 catch{
   console.log('une erreur lors de l\execution de requette');

 }
 finally{
    if(connection){
        connection.release();
    }
 }
 
};
export default executeQuery;
