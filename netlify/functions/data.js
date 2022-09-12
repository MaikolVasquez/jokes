import { createClient } from '@supabase/supabase-js';


const supabaseUrl = process.env.SUPABASE_URL
// cambiar en el despliegue usar variables de netlify
const supabaseKey = process.env.SUPABASE_KEY
const supabase = createClient(supabaseUrl, supabaseKey)


async function datos(){

let { data: chistes, error } = await supabase
    .from('chistes')
    .select('*')

    return chistes
}


exports.handler = async function (event, context) {

      return {
        statusCode: 200,
        body: JSON.stringify({info:await datos()}),
      };
    };