import {Module} from "@nestjs/common";
import { TrackModule } from './track/track.module';
import {MongooseModule} from "@nestjs/mongoose";


@Module({
    controllers: [],
    providers: [],
    imports: [
        MongooseModule.forRoot('mongodb+srv://NNPuser:ktDw3xGAFSf8Fm6y@cluster0.9obbv.mongodb.net/NestNextDB?retryWrites=true&w=majority'),
        TrackModule
    ]
})
export class AppModule {

}