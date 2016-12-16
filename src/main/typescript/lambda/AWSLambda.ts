
interface Event{
    version:string;
    session:Session;
    context:Context;
    request:Request;
}

interface Request{
    type:string;
    requestId: string;
    timestamp: string;
    locale: string;
    intent: Intent;
    reason: string;
    error: RequestError;
}

interface Intent{
    name: string;
    slots: any;
}

interface RequestError{
    type: string;
    message: string
}

interface Context{
    system:System;
    user:User;
    device:Device;
    audioPlayer:AudioPlayer;
}

interface Device{
    supportedInterfaces:SupportedInterfaces;
}

interface SupportedInterfaces{
    audioPlayer:any;
}

interface System{
    application:Application
}

interface AudioPlayer{
    token:string
    offsetInMilliseconds: number
    playerActivity: string
}

interface Session{
    new:boolean;
    sessionId:string;
    application:Application;
    attributes:any
    user:User;
}

interface User{
    userId:string;
    accessToken:string;
}

interface Application{
    applicationId:string;
}