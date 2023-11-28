import {CoreContainer} from "CoreContainer";
import {IInitiator} from "@Core/Types";
import {CoreSymbols} from "../core/ioc/ioc.core.symbols";

export default function HomePage(props: any) {

    console.log(props)
    return <div>Hello, Next.js! </div>;
}

export async function getServerSideProps() {
    const container = CoreContainer.get<IInitiator>(CoreSymbols.Initiator)

    console.log(await container.start())
    // Можете выполнить запрос к API или получить данные другим способом
    const data = { message: 'Привет, это данные с сервера!' };

    // Возвращаем данные как props
    return {
        props: { data },
    };
}