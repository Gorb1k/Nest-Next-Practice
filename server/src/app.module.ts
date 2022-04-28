import {Module} from "@nestjs/common";
import { TrackModule } from './track/track.module';
import {MongooseModule} from "@nestjs/mongoose";
import {FileModule} from "./file/file.module";
import {ServeStaticModule} from "@nestjs/serve-static";
import * as path from "path";


@Module({
    controllers: [],
    providers: [],
    imports: [
        ServeStaticModule.forRoot({rootPath: path.resolve(__dirname, 'static')}),
        MongooseModule.forRoot('mongodb+srv://NNPuser:ktDw3xGAFSf8Fm6y@cluster0.9obbv.mongodb.net/NestNextDB?retryWrites=true&w=majority'),
        TrackModule,
        FileModule
    ]
})
export class AppModule {

}