import { AzureFunction, Context, HttpRequest } from "@azure/functions"

const faRoot: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    context.log('HTTP trigger function processed a request.');
    function html(){
        return `<main>
            <h1>App Root File</h1>
        </main>`
    }

    try{
        context.res = {
            headers: {"content-type":"text/html"},
            body: html(),
            status: 200
        }
    }catch(err){
        const error = new Error(err);
        context.log(error);
        context.res = {
            body: error,
            status: 500
        }
    }

};

export default faRoot;
