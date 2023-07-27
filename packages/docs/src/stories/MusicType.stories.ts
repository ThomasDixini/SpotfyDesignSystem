import { Meta, StoryObj } from '@storybook/react'
import { MusicType, MusicTypeProps } from 'spotreact';

export default {
    title: 'Home/MusicType',
    component: MusicType,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        size: {
            control: 'inline-radio',
            options: ['lg', 'sm'],
            description: 'Determina o tamanho do componente',
            table: {
                defaultValue: {
                    summary: 'medium',
                }
            }
        },
        label: {
            description: 'Tipo de música do componente',
            table: {
                defaultValue: {
                    summary: 'Eletrônicas',
                }
            }
        }
    },
} as Meta<MusicTypeProps>;

export const Small: StoryObj<typeof MusicType> = {
    args: {
        size: "sm",
        label: 'Eletrônicas'
    },
};
export const Large: StoryObj<typeof MusicType> = {
    args: {
        size: "lg",
        label: 'Eletrônicas'
    },
};