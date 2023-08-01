import { styled } from "../../styles";

export const MusicTypeContainer = styled('article', {
    boxSizing: 'border-box',
    backgroundColor: '$gray200',
    borderRadius: '$xxs',
    height: '80px',
    fontSize: '$sm',
    fontWeight: '$bold',
    color: '$white',
    fontFamily: '$default',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    overflow: 'hidden',
    gap: '$4',
    img: {
        objectFit: 'cover',
        width: '80px',
        height: '80px',
        boxShadow: '2px 0 10px rgb(0,0,0, 0.6)',
    },
    variants: {
        size: {
            lg: {
                width: '450px',
            },
            sm: {
                width: '300px',
            }
        }
    },
    defaultVariants: {
        size: 'lg'
    }
})