import {CoreContainer} from "@CoreContainer";
import {IInitiator} from "@Core/Types";
import {CoreSymbols} from "../core/ioc/ioc.core.symbols";

export default function HomePage() {
    return <div>Hello, Next.js! </div>;
}

export async function getServerSideProps() {
    await CoreContainer.get<IInitiator>(CoreSymbols.Initiator).start()

    return {
        props: {s: '1'}
    }
}

