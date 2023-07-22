import { styled } from "../../styles";

export const AlbumContainer = styled('article', {
    variants: {
        size: {
            md: {
                fontFamily: '$default',
                display: 'flex',
                flexDirection: 'column',
                maxWidth: '150px',
                width: '100%',
                backgroundColor: '$gray300',
                padding: '1.5rem',
                borderRadius: '$xs',

                strong: {
                    fontSize: '$sm',
                    color: '$white',
                    fontWeight: '$bold',
                    marginTop: '$4'
                },

                span: {
                    fontSize: '$xxs',
                    color: '$gray100',
                    lineHeight: '1.6',
                    marginTop: '$2'
                }
            }
        }
    },
    defaultVariants: {
        size: 'md'
    }
})

export const PlaylistImageItem = styled('div', {
    position: 'relative',
    overflow: 'hidden',
    'img:first-child': {
        position: 'absolute',
        transform: 'rotateX(20deg) translateY(calc(60%))',
        width: '150px'
    },

    'img:last-child': {
        position: 'absolute',
        transform: 'translate(calc(-70%), calc(-45%)) rotate(180deg)',
        width: '150px'
    },

    'img:first-child, img:last-child': {
        color: '$green !important'
    },

    img: {
        maxWidth: '150px',
        width: '100%',
        height: '150px',
        borderRadius: '$xs',
        objectFit: 'cover'
    },
})