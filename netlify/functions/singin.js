import { createClient } from '@supabase/supabase-js';


const supabaseUrl = process.env.SUPABASE_URL
const supabaseKey = process.env.SUPABASE_KEY
const supabase = createClient(supabaseUrl, supabaseKey)

  
  exports.handler = async function (event, context) {
    
    console.log(JSON.parse(event.body))
    data = JSON.parse(event.body)
    

    try{
      const { user, session, error } = await supabase.auth.signIn({
        email:data.email,
        password:data.password,
      })

      return {
        statusCode: 200,
        body: JSON.stringify({user:user,session:session}),
      };
    }
    catch(e){
      return {
        statusCode: 200,
        body: JSON.stringify({info:"Bad request..." + e}),
      };
    }
    
      };