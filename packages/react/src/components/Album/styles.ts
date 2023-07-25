import { styled } from "../../styles";

export const AlbumContainer = styled('article', {
    fontFamily: '$default',
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    backgroundColor: '$gray300',
    borderRadius: '$xs',
    padding: '1.5rem',

    strong: {
        color: '$white',
        fontWeight: '$bold',
        marginTop: '$4'
    },

    span: {
        color: '$gray100',
        lineHeight: '1.6',
        marginTop: '$2'
    },

    variants: {
        size: {
            md: {
                maxWidth: '190px',

                strong: {
                    fontSize: '$sm',
                },

                span: {
                    fontSize: '$xxs',
                }
            },
            lg: {
                maxWidth: '220px',
                div: {
                    maxWidth: '220px',
                    img: {
                        height: '220px'
                    }
                },
            },
            sm: {
                maxWidth: '160px',
                div: {
                    maxWidth: '160px',
                    img: {
                        height: '160px'
                    }
                },
                strong: {
                    fontSize: '$xs',
                },
                span: {
                    fontSize: '$xxs',
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
    maxWidth: '190px',
    'img:first-child': {
        position: 'absolute',
        transform: 'rotateX(20deg) translateY(calc(60%))',
        width: '100%'
    },

    'img:last-child': {
        position: 'absolute',
        transform: 'translate(calc(-70%), calc(-45%)) rotate(180deg)',
        width: '100%'
    },

    'img:first-child, img:last-child': {
        color: '$green !important'
    },

    img: {
        width: '100%',
        height: '190px',
        borderRadius: '$xs',
        objectFit: 'cover'
    },
})