import { TítuloStyled, Subtítulo } from "./titulo.style";

interface TítuloProps {
    titulo: string;
    subtitulo?: string | JSX.Element;
}

export default function Título(props: TítuloProps){
    return (
        <>
            <TítuloStyled>{props.titulo}</TítuloStyled>
            <Subtítulo>{props.subtitulo}</Subtítulo>
        </>
    )
}