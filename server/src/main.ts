import {NestFactory} from "@nestjs/core";
import {AppModule} from "./app.module";

const PORT = 5000


const start = async () => {
    try {
        const PORT = process.env.PORT || 5000
        const app = await NestFactory.create(AppModule, {cors: {
                origin: 'http://localhost:3000',
                credentials: true,
            }})

        await app.listen(PORT, () => console.log(`An app is listening port ${PORT}...`))

    }catch (e) {
        console.log(e)
    }
}

start()