import executeQuery from "@/database/db";
export async function POST(request) {
    try {
        const data = await request.json();
        const id = data.id;
        const option=data.option
        let result=0
        if(option==1){
          result = await executeQuery('UPDATE chefmenage SET active=? WHERE uuid=? ', [2,id])
        }
       else{
        if(option==2){
             result = await executeQuery('UPDATE conjoint SET active=? WHERE uuid=? ', [2,id])
        }
       
       }
      
        if(result ){
            return Response.json({message:"success"});
        }
        else{
            return Response.json({ message: ' error' });
        }
    }
    catch (error) {
        return Response.json({ message: 'select error' });
    }



}