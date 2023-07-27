import { Meta, StoryObj } from '@storybook/react'
import { Album, AlbumProps } from 'spotreact';

export default {
  title: 'Example/Album',
  component: Album,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'inline-radio',
      options: ['lg', 'md', 'sm'],
      description: 'Determina o tamanho do componente',
      table: {
        defaultValue: {
          summary: 'medium',
        }
      }
    },
  },
} as Meta<AlbumProps>;

export const Medium: StoryObj<typeof Album> = {
  args: {
    size: "md",
  },
};
export const Small: StoryObj<typeof Album> = {
  args: {
    size: "sm",
  },
};
export const Large: StoryObj<typeof Album> = {
  args: {
    size: "lg",
  },
};