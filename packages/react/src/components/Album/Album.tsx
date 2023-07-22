import { ComponentProps } from "react";
import { AlbumContainer, PlaylistImageItem } from "./styles";
import nuvem from '../../assets/cloud.svg'
import nuvem2 from '../../assets/cloud.svg'

export interface AlbumProps extends ComponentProps<typeof AlbumContainer> { }

export function Album() {
    return (
        <AlbumContainer>
            <PlaylistImageItem>
                <img src={nuvem2} alt="" />
                <img src="https://source.unsplash.com/random" alt="Imagem da Playlist" />
                <img src={nuvem} alt="" />
            </PlaylistImageItem>
            <strong> Daily Mix </strong>
            <span> Eminem, roy jones jr., Lil Yachty e mais </span>
        </AlbumContainer>
    )
}