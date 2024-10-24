import executeQuery from "@/database/db";
export async function POST(request) {
    const data= await request.json()

    try {
        if(!data.idprovince){
         const result = await executeQuery('SELECT * FROM communes')
         return Response.json({result});
        }
        else{
          const result = await executeQuery('SELECT * FROM communes WHERE idprovince=?',[data.idprovince])
          return Response.json({result});
        }
      
        
    }

    catch (error) {
        return Response.json({ message: 'select error' });
    }

}