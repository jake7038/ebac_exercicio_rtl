import { fireEvent, render, screen } from '@testing-library/react';
import Post from '.';
import PostComment from '.';

describe('Teste para o componente PostComment', () => {
    it('Deve renderizar o componente corretamente', () => {
        render(<PostComment/>);
        expect(screen.getByText('Comentar')).toBeInTheDocument();
    });
});

test('Deve inserir dois comentário', () => {

    render(<PostComment/>)
    fireEvent.change(screen.getByTestId('comentario'),{
        target: {
            value: 'maneiro'
        }
    })
    fireEvent.click(screen.getByTestId('botao'))

    fireEvent.change(screen.getByTestId('comentario'),{
        target: {
            value: 'gostei'
        }
    })
    fireEvent.click(screen.getByTestId('botao'))

    expect(screen.getByText('maneiro')).toBeInTheDocument();
    expect(screen.getByText('gostei')).toBeInTheDocument();
})