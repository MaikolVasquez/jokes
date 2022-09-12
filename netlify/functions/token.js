import { createClient } from '@supabase/supabase-js';


const supabaseUrl = process.env.SUPABASE_URL
const supabaseKey = process.env.SUPABASE_KEY
const supabase = createClient(supabaseUrl, supabaseKey)


exports.handler = async function (event, context) {
    

    return {
      statusCode: 200,
      body: JSON.stringify({info:data}),
    };
  };