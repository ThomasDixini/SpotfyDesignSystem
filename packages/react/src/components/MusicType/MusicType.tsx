import { ComponentProps } from "react";
import { MusicTypeContainer } from "./styles";

export interface MusicTypeProps extends ComponentProps<typeof MusicTypeContainer> {
    label: string;
}

export function MusicType({ label, size }: MusicTypeProps){
    return(
        <MusicTypeContainer size={size}>
            <img src="https://source.unsplash.com/random" width="80" height="80" alt="Logo da musica" />
            <span> {label} </span>
        </MusicTypeContainer>
    );
}