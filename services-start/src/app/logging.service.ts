export class LoggingService{
    logStatusChange(staus:string){
        console.log('A server status changed, new status: ' + staus);
    }
}